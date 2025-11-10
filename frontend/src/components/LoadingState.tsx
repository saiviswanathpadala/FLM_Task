import { Skeleton } from './ui/Skeleton';
import { Card, CardContent, CardHeader } from './ui/Card';

export default function LoadingState() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="bg-white/60 backdrop-blur-md border-white/20 shadow-lg">
          <CardHeader>
            <Skeleton className="h-6 w-3/4 bg-gradient-to-r from-blue-200 to-cyan-200" />
            <Skeleton className="h-4 w-1/2 mt-2 bg-gray-200" />
          </CardHeader>
          <CardContent className="space-y-3">
            <Skeleton className="h-4 w-full bg-gray-200" />
            <Skeleton className="h-4 w-2/3 bg-gray-200" />
            <Skeleton className="h-4 w-1/2 bg-gray-200" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

