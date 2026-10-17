import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../components/Buttons';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <p className="text-sm font-medium text-violet-400 uppercase tracking-wide mb-3">404</p>
      <h1 className="text-3xl md:text-5xl font-semibold mb-4">Page not found</h1>
      <p className="text-gray-400 mb-8 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
      <PrimaryButton onClick={() => navigate('/')} className="px-8 py-2.5">
        <ArrowLeftIcon className="size-4" /> Back to home
      </PrimaryButton>
    </div>
  );
};

export default NotFound;
