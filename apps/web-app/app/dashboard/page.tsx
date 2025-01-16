"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"
import React, { useEffect } from 'react'

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
        <>
        { session ? ( 
            <>
                <h1>
                     {session?.user?.name}
                </h1>
                <button onClick={() => signOut()}>Signout</button>
            </>
        ): (
            <>
                <h1>Your not logged in</h1>
                <button onClick={() => signIn("spotify")}>Sign in with spotify</button>
            </>



        )}
        </>
    )
}

export default Dashboard