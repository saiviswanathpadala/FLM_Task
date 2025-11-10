import pool from '../db/connection.js';
import { z } from 'zod';

export const CompanySchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1).max(255),
  industry: z.string().min(1).max(100),
  location: z.string().min(1).max(255),
  size: z.string().min(1).max(50),
  founded_year: z.number().int().min(1800).max(new Date().getFullYear()).nullable().optional(),
  website: z.string().url().max(255).optional().nullable(),
  description: z.string().optional().nullable(),
});

export const CompanyQuerySchema = z.object({
  search: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
  size: z.string().optional(),
  sortBy: z.enum(['name', 'founded_year']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export async function getAllCompanies(queryParams) {
  const validated = CompanyQuerySchema.parse(queryParams);
  const { search, industry, location, size, sortBy, sortOrder, page, limit } = validated;
  
  const offset = (page - 1) * limit;
  const conditions = [];
  const params = [];
  let paramIndex = 1;

  // Build WHERE clause
  if (search) {
    conditions.push(`(name ILIKE $${paramIndex} OR description ILIKE $${paramIndex})`);
    params.push(`%${search}%`);
    paramIndex++;
  }

  if (industry) {
    conditions.push(`industry = $${paramIndex}`);
    params.push(industry);
    paramIndex++;
  }

  if (location) {
    conditions.push(`location = $${paramIndex}`);
    params.push(location);
    paramIndex++;
  }

  if (size) {
    conditions.push(`size = $${paramIndex}`);
    params.push(size);
    paramIndex++;
  }

  const whereClause = conditions.length > 0 ? `WHERE ${conditions.join(' AND ')}` : '';

  // Build ORDER BY clause
  const orderBy = sortBy || 'name';
  const order = sortOrder || 'asc';
  const orderByClause = `ORDER BY ${orderBy} ${order.toUpperCase()}`;

  // Get total count
  const countQuery = `SELECT COUNT(*) as total FROM companies ${whereClause}`;
  const countResult = await pool.query(countQuery, params);
  const total = parseInt(countResult.rows[0].total);

  // Get paginated results
  params.push(limit, offset);
  const dataQuery = `
    SELECT * FROM companies 
    ${whereClause} 
    ${orderByClause}
    LIMIT $${paramIndex} OFFSET $${paramIndex + 1}
  `;
  
  const result = await pool.query(dataQuery, params);
  
  return {
    companies: result.rows,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
}

export async function getCompanyById(id) {
  const result = await pool.query('SELECT * FROM companies WHERE id = $1', [id]);
  return result.rows[0] || null;
}

export async function getDistinctValues(field) {
  const validFields = ['industry', 'location', 'size'];
  if (!validFields.includes(field)) {
    throw new Error(`Invalid field: ${field}`);
  }
  
  const result = await pool.query(`SELECT DISTINCT ${field} FROM companies ORDER BY ${field}`);
  return result.rows.map(row => row[field]);
}

