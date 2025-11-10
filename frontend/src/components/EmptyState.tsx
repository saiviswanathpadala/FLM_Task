import { Search } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/Card';

export default function EmptyState() {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-muted p-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
        </div>
        <CardTitle>No Companies Found</CardTitle>
        <CardDescription>
          No companies match your search criteria. Try adjusting your filters or search terms.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

