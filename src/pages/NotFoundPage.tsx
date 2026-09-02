import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="grid min-h-[70vh] place-items-center px-4 pt-20">
      <div className="text-center">
        <p className="font-serif text-8xl font-bold text-primary">404</p>
        <h1 className="mt-4 font-serif text-2xl font-bold text-gray-900 dark:text-white">Page Not Found</h1>
        <p className="mt-2 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary mt-6">
          <Home className="h-4 w-4" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
