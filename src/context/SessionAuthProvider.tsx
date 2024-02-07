"use client"

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function SessionAuthProvider(props: { children: ReactNode }): JSX.Element {
  return (
    <SessionProvider>
      {props.children}
    </SessionProvider>
  )
} 