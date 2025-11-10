import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Search, X } from 'lucide-react';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Button } from './ui/Button';
import { useFilterOptions } from '@/hooks/useCompanies';

const filterSchema = z.object({
  search: z.string().optional(),
  industry: z.string().optional(),
  location: z.string().optional(),
  size: z.string().optional(),
  sortBy: z.enum(['name', 'founded_year']).optional(),
  sortOrder: z.enum(['asc', 'desc']).optional(),
});

export type FilterFormData = z.infer<typeof filterSchema>;

interface CompanyFiltersProps {
  filters: FilterFormData;
  onFiltersChange: (filters: FilterFormData) => void;
}

export default function CompanyFilters({ filters, onFiltersChange }: CompanyFiltersProps) {
  const { register, handleSubmit, watch, reset } = useForm<FilterFormData>({
    resolver: zodResolver(filterSchema),
    defaultValues: filters,
  });

  const { data: industries = [] } = useFilterOptions('industry');
  const { data: locations = [] } = useFilterOptions('location');
  const { data: sizes = [] } = useFilterOptions('size');

  // Sync form with external filter changes
  useEffect(() => {
    reset(filters);
  }, [filters, reset]);

  const onSubmit = (data: FilterFormData) => {
    onFiltersChange(data);
  };

  const handleReset = () => {
    reset({
      search: '',
      industry: '',
      location: '',
      size: '',
      sortBy: 'name',
      sortOrder: 'asc',
    });
    onFiltersChange({
      search: '',
      industry: '',
      location: '',
      size: '',
      sortBy: 'name',
      sortOrder: 'asc',
    });
  };

  const hasActiveFilters = watch('search') || watch('industry') || watch('location') || watch('size');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            {...register('search')}
            placeholder="Search companies..."
            className="pl-10"
            onChange={(e) => {
              register('search').onChange(e);
              handleSubmit(onSubmit)();
            }}
          />
        </div>

        {/* Industry Filter */}
        <Select
          {...register('industry')}
          onChange={(e) => {
            register('industry').onChange(e);
            handleSubmit(onSubmit)();
          }}
        >
          <option value="">All Industries</option>
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </Select>

        {/* Location Filter */}
        <Select
          {...register('location')}
          onChange={(e) => {
            register('location').onChange(e);
            handleSubmit(onSubmit)();
          }}
        >
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </Select>

        {/* Size Filter */}
        <Select
          {...register('size')}
          onChange={(e) => {
            register('size').onChange(e);
            handleSubmit(onSubmit)();
          }}
        >
          <option value="">All Sizes</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size} employees
            </option>
          ))}
        </Select>

        {/* Sort By */}
        <Select
          {...register('sortBy')}
          onChange={(e) => {
            register('sortBy').onChange(e);
            handleSubmit(onSubmit)();
          }}
        >
          <option value="name">Sort by Name</option>
          <option value="founded_year">Sort by Founded Year</option>
        </Select>

        {/* Sort Order */}
        <Select
          {...register('sortOrder')}
          onChange={(e) => {
            register('sortOrder').onChange(e);
            handleSubmit(onSubmit)();
          }}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
      </div>

      {hasActiveFilters && (
        <div className="flex justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={handleReset}
            className="flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Reset Filters
          </Button>
        </div>
      )}
    </form>
  );
}

