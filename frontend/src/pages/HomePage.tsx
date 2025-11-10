import { useState } from 'react';
import { Building2 } from 'lucide-react';
import { useCompanies } from '@/hooks/useCompanies';
import CompanyCard from '@/components/CompanyCard';
import CompanyFilters, { type FilterFormData } from '@/components/CompanyFilters';
import Pagination from '@/components/Pagination';
import LoadingState from '@/components/LoadingState';
import ErrorState from '@/components/ErrorState';
import EmptyState from '@/components/EmptyState';

export default function HomePage() {
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
    setPage(1); // Reset to first page when filters change
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Companies Directory</h1>
              <p className="text-muted-foreground">Explore and discover companies</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8">
          <CompanyFilters filters={filters} onFiltersChange={handleFiltersChange} />
        </div>

        {/* Results Count */}
        {data && (
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {data.companies.length} of {data.pagination.total} companies
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

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Companies Directory. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

