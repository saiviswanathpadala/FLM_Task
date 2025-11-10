import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home } from 'lucide-react';
import { useCompanies } from '@/hooks/useCompanies';
import CompanyCard from '@/components/CompanyCard';
import CompanyFilters, { type FilterFormData } from '@/components/CompanyFilters';
import Pagination from '@/components/Pagination';
import LoadingState from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';
import EmptyState from '@/components/EmptyState';

export default function CompaniesPage() {
  const [filters, setFilters] = useState<FilterFormData>({
    search: '',
    industry: '',
    location: '',
    size: '',
    sortBy: 'name',
    sortOrder: 'asc',
  });
  const [page, setPage] = useState(1);

  const { data, isLoading, error, refetch } = useCompanies({
    ...filters,
    page,
    limit: 12,
  });

  const handleFiltersChange = (newFilters: FilterFormData) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="h-7 w-7 text-[#0a66c2]" />
              <h1 className="text-2xl font-bold text-[#0a66c2]">
                Companies Directory
              </h1>
            </div>
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-600 hover:text-[#0a66c2] transition-colors"
            >
              <Home className="h-5 w-5" />
              <span className="text-sm font-medium">Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8 p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
          <CompanyFilters filters={filters} onFiltersChange={handleFiltersChange} />
        </div>

        {/* Results Count */}
        {data && (
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-600">
              Showing <span className="text-[#0a66c2] font-bold">{data.companies.length}</span> of{' '}
              <span className="text-[#0a66c2] font-bold">{data.pagination.total}</span> companies
            </p>
          </div>
        )}

        {/* Loading State */}
        {isLoading && <LoadingState />}

        {/* Error State */}
        {error && (
          <ErrorState
            message="Unable to fetch companies. Please try again."
            onRetry={() => refetch()}
          />
        )}

        {/* Empty State */}
        {!isLoading && !error && data && data.companies.length === 0 && <EmptyState />}

        {/* Company Grid */}
        {!isLoading && !error && data && data.companies.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.companies.map((company, index) => (
                <CompanyCard key={company.id} company={company} index={index} />
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={data.pagination.page}
              totalPages={data.pagination.totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>
    </div>
  );
}
