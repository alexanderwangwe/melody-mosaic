// src/app/page.tsx

"use client";

import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Melody Mosaic</h1>
        <p className="text-xl mb-8">Get personalized music recommendations based on your Spotify listening history.</p>
        {!session && (
          <button
            onClick={() => signIn('spotify')}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign In with Spotify
          </button>
        )}
      </main>
    </div>
  );
}
