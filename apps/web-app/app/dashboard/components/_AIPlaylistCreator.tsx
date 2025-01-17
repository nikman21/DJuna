'use client'

import { useState } from 'react'
import { Button } from "@workspace/ui/components/button"
import { Input } from '@workspace/ui/components/input'
import { Label } from '@workspace/ui/components/label'
import { Slider } from '@workspace/ui/components/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@workspace/ui/components/select'

export default function AIPlaylistCreator() {
  const [genre, setGenre] = useState('')
  const [mood, setMood] = useState('')
  const [songCount, setSongCount] = useState(10)

  const handleCreatePlaylist = () => {
    // Here you would integrate with your AI service to create the playlist
    console.log('Creating playlist with:', { genre, mood, songCount })
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold mb-4">Create AI Playlist</h2>
      <div className="space-y-4">
        <div>
          <Label htmlFor="genre">Genre</Label>
          <Select onValueChange={setGenre}>
            <SelectTrigger id="genre">
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="techno">Techno</SelectItem>
              <SelectItem value="hiphop">Hip Hop</SelectItem>
              <SelectItem value="rnb">R&B</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="mood">Mood/Vibe</Label>
          <Input
            id="mood"
            placeholder="e.g., Energetic, Chill, Party"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="songCount">Number of Songs</Label>
          <Slider
            id="songCount"
            min={5}
            max={50}
            step={1}
            value={[songCount]}
            onValueChange={(value) => setSongCount(value[0] ?? 0)}
          />
          <span className="text-sm text-gray-500">{songCount} songs</span>
        </div>
        <Button onClick={handleCreatePlaylist} className="w-full">
          Create AI Playlist
        </Button>
      </div>
    </div>
  )
}

