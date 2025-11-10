import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL || '';

// For NeonDB, SSL is required
const pool = new Pool({
  connectionString: connectionString,
  ssl: connectionString.includes('neon.tech') ? {
    rejectUnauthorized: false
  } : undefined
});

// Test connection
pool.on('connect', () => {
  console.log('✅ Connected to NeonDB');
});

pool.on('error', (err) => {
  console.error('❌ Database connection error:', err);
});

export default pool;

