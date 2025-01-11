"use client"

import { useSession, signIn } from "next-auth/react"
import React from 'react'

const Dashboard = () => {
    const {data: session } = useSession()

    return (
        <>
        { session ? ( 
            <>
                <h1>
                    Welcome Back
                </h1>
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