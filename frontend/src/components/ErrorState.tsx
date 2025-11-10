import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({ message = 'Failed to load companies', onRetry }: ErrorStateProps) {
  return (
    <Card className="bg-red-50/60 backdrop-blur-md border-red-200 shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertCircle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <CardTitle className="text-red-900">Error</CardTitle>
            <CardDescription className="text-red-700">{message}</CardDescription>
          </div>
        </div>
      </CardHeader>
      {onRetry && (
        <CardContent>
          <Button onClick={onRetry} variant="outline" className="flex items-center gap-2 border-red-300 hover:bg-red-50">
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
        </CardContent>
      )}
    </Card>
  );
}

