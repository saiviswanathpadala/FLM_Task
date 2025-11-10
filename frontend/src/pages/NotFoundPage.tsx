import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-6xl font-bold mb-4">404</CardTitle>
          <CardDescription className="text-lg">
            Page Not Found
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="flex items-center gap-2 mx-auto">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

