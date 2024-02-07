import "../styles/app.css";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tareas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionAuthProvider>
          {children}
        </SessionAuthProvider>
      </body>
    </html>
  );
}
