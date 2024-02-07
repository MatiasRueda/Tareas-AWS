"use client"
import { useSession } from "next-auth/react";

export default function SSaludo(): JSX.Element {
  const { data: session } = useSession();
  return (
    <h1>Bienvenido {session?.user.data?.nombre}!</h1>
  )
}
