"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <button
          onClick={() => signIn("github")}
          className="w-full bg-black text-white py-2 rounded mb-4"
        >
          Sign in with GitHub
        </button>
        <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
