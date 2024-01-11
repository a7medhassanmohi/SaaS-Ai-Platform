import { UserButton } from '@clerk/nextjs'
import React from 'react'
import MobileSidebar from './MobileSidebar'

type Props = {
  apiLimitCount:number
}

const Navbar = ({apiLimitCount}: Props) => {
  return (
    <nav className="flex items-center p-4">
    <MobileSidebar apiLimitCount={apiLimitCount}  />
    <div className="flex w-full justify-end">
      <UserButton afterSignOutUrl="/" />
    </div>
  </nav>
  )
}

export default Navbar