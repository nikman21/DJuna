'use client'
import { Button } from "@workspace/ui/components/button"
import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect } from "react"
export default function Page() {

  const {data: session } = useSession()

  useEffect(() => {
    const checkAuthStatus = () => {
      if(session){
        redirect('/dashboard')
      }
    }

    checkAuthStatus();
  },[session]);


  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button size="sm" onClick={() => signIn("spotify")}>Signin with spotify</Button>
      </div>
    </div>
  )
}
