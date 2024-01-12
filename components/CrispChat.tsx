"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";
import { usePathname } from "next/navigation";

export const CrispChat = () => {
  const path=usePathname()
  
  useEffect(() => {
    if(path!=="/"){

      Crisp.configure("753d9302-40f6-4a6e-a2db-209025415b96");
    }
  }, [path]);

  return null;
};
