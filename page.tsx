"use client";

import { useSession, signIn, signOut } from 'next-auth/react';

const HomePage = () => {
  const { data: session, status } = useSession(); // Session aur status

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Next.js Login App</h1>

      {session ? (
        // Agar user logged in hai
        <div className="text-center">
          <p className="mb-4">
            Signed in as <strong>{session.user?.email}</strong>
          </p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      ) : (
        // Agar user logged out hai
        <div className="text-center">
          <p className="mb-4">You are not signed in.</p>
          <button
            onClick={() => signIn('google')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign In with Google
          </button>
          <button
            onClick={() => signIn('github')}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 mt-2"
          >
            Sign In with GitHub
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
