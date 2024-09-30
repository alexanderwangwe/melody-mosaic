"use client";
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Header from '../components/Header'
import TrackList from '../components/TrackList'

export default function Dashboard() {
  const { data: session } = useSession()
  const [topTracks, setTopTracks] = useState([])
  const [recentlyPlayed, setRecentlyPlayed] = useState([])
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    if (session) {
      fetchTopTracks()
      // fetchRecentlyPlayed()
      fetchRecommendations()
    }
  }, [session])

  const fetchTopTracks = async () => {
    const res = await fetch('/api/spotify/top-tracks')
    const data = await res.json()
    setTopTracks(data.items)
  }

  // const fetchRecentlyPlayed = async () => {
  //   const res = await fetch('/api/spotify/recently-played')
  //   const data = await res.json()
  //   setRecentlyPlayed(data.items.map(item => item.track))
  // }

  const fetchRecommendations = async () => {
    const res = await fetch('/api/spotify/recommendations')
    const data = await res.json()
    setRecommendations(data.tracks)
  }

  if (!session) {
    return <div>Please sign in to view your dashboard.</div>
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Top Tracks</h2>
            <TrackList tracks={topTracks} />
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Recently Played</h2>
            <TrackList tracks={recentlyPlayed} />
          </section>
        </div>
        <section className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recommended Tracks</h2>
          <TrackList tracks={recommendations} />
        </section>
      </main>
    </div>
  )
}