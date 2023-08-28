"use client"

import {useSession} from 'next-auth/react'

function DashboardPage() {
    const {data:session,status} = useSession()
   // console.log(session)
    //const userSession = session?.user.role
    //console.log(userSession)
  return (
    <div>DashboardPage
    </div>
  )
}

export default DashboardPage