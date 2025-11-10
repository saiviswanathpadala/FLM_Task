# Companies Directory - Backend API

Express.js backend API for the Companies Directory application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
PORT=3001
DATABASE_URL=your_neondb_connection_string
NODE_ENV=development
```

3. Run database migrations:
```bash
npm run db:migrate
```

4. Seed the database:
```bash
npm run db:seed
```

5. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

## API Endpoints

- `GET /health` - Health check
- `GET /api/companies` - Get all companies (with filters, search, sorting, pagination)
- `GET /api/companies/:id` - Get company by ID
- `GET /api/companies/filters/:field` - Get distinct filter values (industry, location, size)

## Database Schema

```sql
CREATE TABLE companies (
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
```

