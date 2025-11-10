import pool from './connection.js';

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    industry VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    size VARCHAR(50) NOT NULL,
    founded_year INTEGER,
    website VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

  -- Add description column if it doesn't exist (for existing tables)
  DO $$ 
  BEGIN
    IF NOT EXISTS (
      SELECT 1 FROM information_schema.columns 
      WHERE table_name = 'companies' AND column_name = 'description'
    ) THEN
      ALTER TABLE companies ADD COLUMN description TEXT;
    END IF;
  END $$;

  CREATE INDEX IF NOT EXISTS idx_companies_industry ON companies(industry);
  CREATE INDEX IF NOT EXISTS idx_companies_location ON companies(location);
  CREATE INDEX IF NOT EXISTS idx_companies_size ON companies(size);
  CREATE INDEX IF NOT EXISTS idx_companies_name ON companies(name);
  CREATE INDEX IF NOT EXISTS idx_companies_founded_year ON companies(founded_year);
`;

async function migrate() {
  try {
    await pool.query(createTableQuery);
    console.log('✅ Database migration completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrate();

