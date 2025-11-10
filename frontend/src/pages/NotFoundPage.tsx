import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center px-4">
      <Card className="max-w-md w-full bg-white/60 backdrop-blur-md border-white/20 shadow-2xl">
        <CardHeader className="text-center pt-12">
          <CardTitle className="text-8xl font-bold mb-4 text-[#0a66c2]">
            404
          </CardTitle>
          <CardDescription className="text-xl font-semibold text-gray-700">
            Page Not Found
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-12">
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button className="flex items-center gap-2 mx-auto shadow-lg">
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

