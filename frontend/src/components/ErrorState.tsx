import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({ message = 'Failed to load companies', onRetry }: ErrorStateProps) {
  return (
    <Card className="border-destructive">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-destructive" />
          <CardTitle>Error</CardTitle>
        </div>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
      {onRetry && (
        <CardContent>
          <Button onClick={onRetry} variant="outline" className="flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Retry
          </Button>
        </CardContent>
      )}
    </Card>
  );
}

