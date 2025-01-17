"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import React, { useEffect } from 'react'
import Header from "./components/_Header"
import Sidebar from "./components/_Sidebar"
import PlaylistGrid from "./components/_PlaylistGrid"
import AIPlaylistCreator from "./components/_AIPlaylistCreator"


const Dashboard = () => {
    const {data: session } = useSession()
    useEffect(() => {
        const checkAuthStatus = () => {
          if(!session){
            redirect('/')
          }
        }
    
        checkAuthStatus();
      },[session]);
    return (
        <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Your Playlists</h1>
            <AIPlaylistCreator />
            <PlaylistGrid />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard