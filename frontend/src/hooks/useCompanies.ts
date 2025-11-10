import { useQuery } from '@tanstack/react-query';
import { companiesApi, type CompanyFilters } from '@/lib/api';

export function useCompanies(filters: CompanyFilters = {}) {
  return useQuery({
    queryKey: ['companies', filters],
    queryFn: () => companiesApi.getCompanies(filters),
  });
}

export function useFilterOptions(field: 'industry' | 'location' | 'size') {
  return useQuery({
    queryKey: ['filterOptions', field],
    queryFn: () => companiesApi.getFilterOptions(field),
  });
}

