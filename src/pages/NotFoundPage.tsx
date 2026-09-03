import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="grid min-h-[70vh] place-items-center px-4 pt-20">
      <div className="text-center">
        <p className="font-serif text-8xl font-bold text-primary">404</p>
        <h1 className="mt-4 font-serif text-2xl font-bold text-gray-900 dark:text-white">Page Not Found</h1>
        <p className="mt-2 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="btn-secondary inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn-primary inline-flex items-center gap-2 cursor-pointer"
          >
            <Home className="h-4 w-4" /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
