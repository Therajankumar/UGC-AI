import { useClerk, useUser } from '@clerk/react';
import { Loader2Icon, LockIcon } from 'lucide-react';
import type React from 'react';
import { PrimaryButton } from './Buttons';

// shows the page only to signed-in users, otherwise asks them to sign in
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2Icon className="size-7 animate-spin text-indigo-400" />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="glass-panel rounded-2xl p-10 text-center max-w-sm">
          <div className="mx-auto mb-5 size-14 rounded-full bg-white/5 flex items-center justify-center">
            <LockIcon className="size-6 text-violet-400" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Sign in to continue</h2>
          <p className="text-sm text-gray-400 mb-6">You need an account to create and manage your generations.</p>
          <PrimaryButton onClick={() => openSignIn()} className="px-8 py-2.5">Sign in</PrimaryButton>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
