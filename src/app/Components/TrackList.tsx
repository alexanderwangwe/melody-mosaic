import React from 'react'
import Image from 'next/image'

interface Track {
  id: string
  name: string
  artists: { name: string }[]
  album: { images: { url: string }[] }
}

interface TrackListProps {
  tracks: Track[]
}

export default function TrackList({ tracks }: TrackListProps) {
  return (
    <ul className="space-y-4">
      {tracks.map((track) => (
        <li key={track.id} className="flex items-center space-x-4 bg-gray-100 p-4 rounded-lg">
          <Image
            src={track.album.images[0].url}
            alt={track.name}
            width={64}
            height={64}
            className="rounded-md"
          />
          <div>
            <h3 className="font-bold">{track.name}</h3>
            <p className="text-gray-600">{track.artists.map(artist => artist.name).join(', ')}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}