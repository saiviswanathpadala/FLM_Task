import { Search } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/Card';

export default function EmptyState() {
  return (
    <Card className="bg-white/60 backdrop-blur-md border-white/20 shadow-lg">
      <CardHeader className="text-center py-12">
        <div className="flex justify-center mb-6">
          <div className="rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 p-6">
            <Search className="h-12 w-12 text-[#0a66c2]" />
          </div>
        </div>
        <CardTitle className="text-2xl text-[#0a66c2] mb-2">
          No Companies Found
        </CardTitle>
        <CardDescription className="text-base text-gray-600">
          No companies match your search criteria. Try adjusting your filters or search terms.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

