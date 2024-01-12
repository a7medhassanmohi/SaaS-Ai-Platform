"use client";

import { CrispChat } from "@/components/CrispChat";
import { usePathname } from "next/navigation";

export const CrispProvider = () => {
  const path=usePathname()
  if(path==="/") return null
  return <CrispChat />
};
