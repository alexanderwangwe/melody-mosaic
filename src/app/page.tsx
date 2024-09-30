"use client";

import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import { Disc, Music } from 'lucide-react';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <Header />
      <main className="container mx-auto mt-8 text-center px-4">
        <div className="relative">
          <Disc className="absolute top-0 left-1/4 w-16 h-16 text-yellow-400 opacity-50 animate-spin-slow" />
          <Music className="absolute bottom-0 right-1/4 w-16 h-16 text-pink-400 opacity-50" />
          <h1 className="text-6xl font-bold mb-6 tracking-tight relative z-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
              Melody Mosaic
            </span>
          </h1>
        </div>
        <p className="text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Get groovy with personalized tunes based on your Spotify vibes.
        </p>
        {!session && (
          <button
            onClick={() => signIn('spotify')}
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-6 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Sign In with Spotify
          </button>
        )}
      </main>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-50"></div>
    </div>
  );
}