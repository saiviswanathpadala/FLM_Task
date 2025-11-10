import express from 'express';
import { getAllCompanies, getCompanyById, getDistinctValues } from '../models/company.js';

const router = express.Router();

// Get all companies with filters, search, sorting, and pagination
router.get('/', async (req, res) => {
  try {
    const result = await getAllCompanies(req.query);
    res.json(result);
  } catch (error) {
    console.error('Error fetching companies:', error);
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: 'Invalid query parameters', details: error.errors });
    }
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

// Get company by ID
router.get('/:id', async (req, res) => {
  try {
    const company = await getCompanyById(parseInt(req.params.id));
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    console.error('Error fetching company:', error);
    res.status(500).json({ error: 'Failed to fetch company' });
  }
});

// Get distinct values for filters
router.get('/filters/:field', async (req, res) => {
  try {
    const values = await getDistinctValues(req.params.field);
    res.json(values);
  } catch (error) {
    console.error('Error fetching filter values:', error);
    res.status(400).json({ error: error.message });
  }
});

export default router;

