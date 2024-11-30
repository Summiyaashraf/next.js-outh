"use client";

import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p>You must be logged in to access this page.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
