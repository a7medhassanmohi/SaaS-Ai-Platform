import { UserButton } from '@clerk/nextjs'
import React from 'react'
import MobileSidebar from './MobileSidebar'

type Props = {
  apiLimitCount:number,
  isPro:boolean
}

const Navbar = ({apiLimitCount,isPro=false}: Props) => {
  return (
    <nav className="flex items-center p-4">
    <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro}  />
    <div className="flex w-full justify-end">
      <UserButton afterSignOutUrl="/" />
    </div>
  </nav>
  )
}

export default Navbar