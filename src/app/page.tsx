"use client";

import React from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import { Disc, Music, Headphones, Mic } from 'lucide-react';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      <Header />
      <main className="container mx-auto mt-16 text-center px-4 relative">
        <div className="absolute top-0 left-0 w-full h-full">
          <Disc className="absolute top-10 left-1/4 w-20 h-20 text-yellow-400 opacity-30 animate-spin-slow" />
          <Music className="absolute bottom-20 right-1/4 w-24 h-24 text-pink-400 opacity-30 animate-bounce" />
          <Headphones className="absolute top-1/3 right-10 w-16 h-16 text-blue-400 opacity-30 animate-pulse" />
          <Mic className="absolute bottom-1/3 left-10 w-18 h-18 text-green-400 opacity-30 animate-bounce" />
        </div>
        <div className="relative z-10">
          <h1 className="text-7xl font-extrabold mb-8 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 animate-gradient-x">
              Melody Mosaic
            </span>
          </h1>
          <p className="text-3xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Discover your perfect soundtrack with AI-powered music recommendations.
          </p>
          {!session && (
            <button
              onClick={() => signIn('spotify')}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto"
            >
              <span>Get Started with Spotify</span>
              <Music className="ml-2 w-6 h-6" />
            </button>
          )}
        </div>
      </main>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </div>
  );
}