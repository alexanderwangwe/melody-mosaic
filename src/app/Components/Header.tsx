import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Melody Mosaic
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/search">Search</Link></li>
            <li><Link href="/playlist">Playlists</Link></li>
          </ul>
        </nav>
        {session ? (
          <button onClick={() => signOut()} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
            Sign Out
          </button>
        ) : (
          <button onClick={() => signIn('spotify')} className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
            Sign In with Spotify
          </button>
        )}
      </div>
    </header>
  )
}