# Companies Directory Application

A modern, full-stack web application for browsing and filtering company information with a professional LinkedIn-inspired UI. Built with React, TypeScript, Express.js, and PostgreSQL (NeonDB).

## 🎨 Design Highlights

- **Modern Landing Page**: Animated hero section with glassmorphism effects
- **Professional Color Scheme**: LinkedIn-inspired blue palette (#0a66c2, #0084ff, #00a699)
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Glassmorphism UI**: Frosted glass effects with backdrop blur
- **Responsive Design**: Seamless experience across all devices

## 🚀 Features

- **Landing Page**: Animated hero section with call-to-action
- **Company Directory**: Browse companies in a responsive grid layout
- **Advanced Search**: Real-time search by company name or description
- **Smart Filtering**: Filter by industry, location, and company size
- **Sorting**: Sort by name or founded year (ascending/descending)
- **Pagination**: Navigate through results with modern pagination controls
- **Loading States**: Elegant skeleton loaders during data fetching
- **Error Handling**: Graceful error messages with retry functionality
- **Empty States**: User-friendly messages when no results are found
- **Accessibility**: WCAG-compliant with keyboard navigation support

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
- **PostgreSQL** (NeonDB cloud database)
- **Zod** for data validation
- **pg** (node-postgres) for database queries
- **CORS** enabled for cross-origin requests

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
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

Create a `.env` file in the `frontend` directory:

```env
VITE_API_URL=http://localhost:3001/api
```

### 6. Start Frontend Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 📁 Project Structure

```
FLM Task/
├── backend/
│   ├── src/
│   │   ├── db/
│   │   │   ├── connection.js      # Database connection
│   │   │   ├── migrate.js         # Database migrations
│   │   │   └── seed.js            # Seed data (36 companies)
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
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   └── Skeleton.tsx
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
│   │   │   ├── LandingPage.tsx    # Hero landing page
│   │   │   ├── CompaniesPage.tsx  # Main directory page
│   │   │   └── NotFoundPage.tsx   # 404 page
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

## 🎨 Design Decisions

### Color Palette
- **LinkedIn Blue (#0a66c2)**: Primary brand color for headers and key elements
- **Bright Blue (#0084ff)**: Accent color for interactive elements
- **Teal (#00a699)**: Secondary accent for variety
- **Soft Gradients**: Subtle slate/blue/cyan backgrounds for depth

### UI/UX Approach
- **Glassmorphism**: Modern frosted glass effect with backdrop blur
- **Micro-interactions**: Hover effects, scale animations, smooth transitions
- **Progressive Disclosure**: Information revealed as needed
- **Accessibility First**: Keyboard navigation, ARIA labels, semantic HTML

### Technical Decisions
- **React Query**: Efficient server state management with caching
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Rapid UI development with utility classes
- **Framer Motion**: Smooth, performant animations
- **Component Architecture**: Reusable, maintainable components

## 🚀 Key Features Explained

### 1. Landing Page
- Animated floating background blobs
- Hero section with gradient text
- Call-to-action button leading to directory

### 2. Company Directory
- Real-time search with debouncing
- Multiple filter options (industry, location, size)
- Sorting capabilities
- Pagination with page navigation
- Responsive grid layout

### 3. Company Cards
- Glassmorphism design
- Hover animations (lift + scale)
- Color-coded icons
- Direct website links

### 4. State Management
- Loading states with skeleton loaders
- Error states with retry functionality
- Empty states with helpful messages

---

Built with ❤️ by Padala Sai Viswanath
