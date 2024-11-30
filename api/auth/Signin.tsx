"use client";

import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Sign In</h1>
        <button
          onClick={() => signIn("github")}
          className="px-4 py-2 text-white bg-black rounded"
        >
          Sign in with GitHub
        </button>
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
