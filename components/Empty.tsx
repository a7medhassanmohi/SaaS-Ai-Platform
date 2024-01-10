import Image from 'next/image';
import React from 'react'

type Props = {
    label: string;
}

const Empty = ({label}: Props) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
    <div className="relative h-72 w-72">
      <Image src="/empty.png" fill alt="Empty"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
    </div>
    <p className="text-muted-foreground text-sm text-center">
      {label}
    </p>
  </div>
  )
}

export default Empty