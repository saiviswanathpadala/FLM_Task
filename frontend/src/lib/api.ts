import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  size: string;
  founded_year: number | null;
  website: string | null;
  description: string | null;
}

export interface CompaniesResponse {
  companies: Company[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CompanyFilters {
  search?: string;
  industry?: string;
  location?: string;
  size?: string;
  sortBy?: 'name' | 'founded_year';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export const companiesApi = {
  getCompanies: async (filters: CompanyFilters = {}): Promise<CompaniesResponse> => {
    const params = new URLSearchParams();
    
    if (filters.search) params.append('search', filters.search);
    if (filters.industry) params.append('industry', filters.industry);
    if (filters.location) params.append('location', filters.location);
    if (filters.size) params.append('size', filters.size);
    if (filters.sortBy) params.append('sortBy', filters.sortBy);
    if (filters.sortOrder) params.append('sortOrder', filters.sortOrder);
    if (filters.page) params.append('page', filters.page.toString());
    if (filters.limit) params.append('limit', filters.limit.toString());

    const response = await api.get<CompaniesResponse>(`/companies?${params.toString()}`);
    return response.data;
  },

  getCompanyById: async (id: number): Promise<Company> => {
    const response = await api.get<Company>(`/companies/${id}`);
    return response.data;
  },

  getFilterOptions: async (field: 'industry' | 'location' | 'size'): Promise<string[]> => {
    const response = await api.get<string[]>(`/companies/filters/${field}`);
    return response.data;
  },
};

export default api;

