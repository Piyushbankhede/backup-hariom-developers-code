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
    <div className="grid min-h-[70vh] place-items-center px-4 pt-20 pb-12">
      <div className="text-center max-w-md mx-auto">
        <p className="font-serif text-6xl sm:text-8xl font-bold text-primary">404</p>
        <h1 className="mt-4 font-serif text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Page Not Found</h1>
        <p className="mt-2 text-xs sm:text-sm text-gray-500">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleBack}
            className="btn-ghost inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto min-h-[44px]"
          >
            <ArrowLeft className="h-4 w-4" /> Go Back
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="btn-primary inline-flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto min-h-[44px]"
          >
            <Home className="h-4 w-4" /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
