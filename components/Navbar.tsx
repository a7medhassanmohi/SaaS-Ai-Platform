import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex items-center p-4">
    {/* <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} /> */}
    <div className="flex w-full justify-end">
      <UserButton afterSignOutUrl="/" />
    </div>
  </nav>
  )
}

export default Navbar