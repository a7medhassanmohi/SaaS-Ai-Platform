"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("753d9302-40f6-4a6e-a2db-209025415b96");
  }, []);

  return null;
};
