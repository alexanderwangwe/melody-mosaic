import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { Music, Disc, Search, Layers } from 'lucide-react'


export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center space-x-2 group">
          <Disc className="w-8 h-8 text-yellow-400 group-hover:animate-spin-slow transition-all duration-300" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
            Melody Mosaic
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/dashboard" className="flex items-center space-x-1 hover:text-pink-400 transition-colors duration-200">
                <Music className="w-5 h-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/search" className="flex items-center space-x-1 hover:text-pink-400 transition-colors duration-200">
                <Search className="w-5 h-5" />
                <span>Search</span>
              </Link>
            </li>
            <li>
              <Link href="/playlist" className="flex items-center space-x-1 hover:text-pink-400 transition-colors duration-200">
                <Layers className="w-5 h-5" />
                <span>Playlists</span>
              </Link>
            </li>
          </ul>
        </nav>
        {session ? (
          <button
            onClick={() => signOut()}
            
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => signIn('spotify')}
           
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Sign In with Spotify
          </button>
        )}
      </div>
    </header>
  )
}