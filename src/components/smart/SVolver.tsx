"use client"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation";

export default function SVolver(): JSX.Element {
  const router = useRouter();

  const salir = () => {
    signOut();
    router.push("/");
  }

  return (
    <div className="cont-salir">
      <button onClick={salir}>{"<"}</button>
    </div>
  )
}
