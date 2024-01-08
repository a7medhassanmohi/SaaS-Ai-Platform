import React from 'react'
import { UserButton } from "@clerk/nextjs";
type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div>LandingPage
        <UserButton afterSignOutUrl="/sign-in"/>
    </div>
  )
}

export default LandingPage