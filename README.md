# Companies Directory Application

A modern, full-stack web application for browsing and filtering company information. Built with React, TypeScript, Express.js, and PostgreSQL (NeonDB).

## 🚀 Features

- **Company Listing**: Browse companies in a responsive grid layout
- **Advanced Search**: Real-time search by company name or description
- **Filtering**: Filter by industry, location, and company size
- **Sorting**: Sort by name or founded year (ascending/descending)
- **Pagination**: Navigate through results with pagination controls
- **Loading States**: Skeleton loaders during data fetching
- **Error Handling**: Graceful error messages with retry functionality
- **Empty States**: User-friendly messages when no results are found
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Accessibility**: WCAG-compliant with keyboard navigation support
- **Animations**: Smooth transitions powered by Framer Motion

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **TanStack Query (React Query)** for server state management
- **React Hook Form** + **Zod** for form validation
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Router v7** for routing
- **Axios** for API communication

### Backend
- **Node.js** with **Express.js**
- **PostgreSQL** (NeonDB)
- **Zod** for data validation
- **pg** (node-postgres) for database queries

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL database (NeonDB account)
- Git

## 🔧 Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd "FLM Task"
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=3001
DATABASE_URL=postgresql://neondb_owner:npg_fM8g3DRYhlSE@ep-divine-fog-a4nr6zwh-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
NODE_ENV=development
```

### 3. Database Setup

Run migrations and seed the database:

```bash
npm run db:migrate
npm run db:seed
```

### 4. Start Backend Server

```bash
npm run dev
```

The backend API will be available at `http://localhost:3001`

### 5. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

### 6. Start Frontend Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 📁 Project Structure

```
FLM Task/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── connection.js      # Database connection
│   │   │   ├── migrate.js         # Database migrations
│   │   │   └── seed.js            # Seed data
│   │   ├── models/
│   │   │   └── company.js         # Company model & queries
│   │   ├── routes/
│   │   │   └── companies.js       # API routes
│   │   └── server.js              # Express server
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                # Reusable UI components
│   │   │   ├── CompanyCard.tsx
│   │   │   ├── CompanyFilters.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── LoadingState.tsx
│   │   │   ├── ErrorState.tsx
│   │   │   └── EmptyState.tsx
│   │   ├── hooks/
│   │   │   └── useCompanies.ts    # React Query hooks
│   │   ├── lib/
│   │   │   ├── api.ts             # API client
│   │   │   └── utils.ts           # Utility functions
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   └── NotFoundPage.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

## 🎯 API Endpoints

### GET `/api/companies`
Get all companies with optional filters, search, sorting, and pagination.

**Query Parameters:**
- `search` (string): Search by name or description
- `industry` (string): Filter by industry
- `location` (string): Filter by location
- `size` (string): Filter by company size
- `sortBy` (string): Sort by `name` or `founded_year`
- `sortOrder` (string): `asc` or `desc`
- `page` (number): Page number (default: 1)
- `limit` (number): Results per page (default: 20, max: 100)

**Response:**
```json
{
  "companies": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

### GET `/api/companies/:id`
Get a single company by ID.

### GET `/api/companies/filters/:field`
Get distinct values for filter dropdowns (industry, location, or size).

## 🚀 Deployment

### Backend Deployment (Render/Railway/Heroku)

1. Set environment variables:
   - `DATABASE_URL`: Your NeonDB connection string
   - `PORT`: Server port (usually auto-set by platform)
   - `NODE_ENV`: `production`

2. Run migrations:
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

### Frontend Deployment (Vercel/Netlify)

1. Set build command: `npm run build`
2. Set output directory: `dist`
3. Set environment variable:
   - `VITE_API_URL`: Your backend API URL (e.g., `https://your-api.railway.app/api`)

### Environment Variables

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:3001/api
```

**Backend (.env):**
```env
PORT=3001
DATABASE_URL=your_neondb_connection_string
NODE_ENV=development
```

## 🧪 Development

### Running Tests

Currently, no test suite is included. Consider adding:
- Jest + React Testing Library for frontend
- Supertest for backend API testing

### Code Quality

- ESLint configured for TypeScript/React
- Prettier recommended for code formatting
- TypeScript strict mode enabled

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on the repository.

---

Built with ❤️ using modern web technologies.

