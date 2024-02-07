import { invitado } from "@/auxiliar/invitado";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        nombre: { label: "Nombre", type: "text", placeholder: "jsmith" },
        contrasenia: { label: "Contrasenia", type: "password" }
      },
      async authorize(credentials, req) {
        if (credentials && "invitado" in credentials && credentials.invitado) 
          return invitado;
        const url: string = `${process.env.NEXT_PUBLIC_API}/api/ingresarUsuario`;
        const response = await fetch(url, {
          method: "POST",
          body : JSON.stringify({
            nombre: credentials?.nombre,
            contrasenia: credentials?.contrasenia
          }),
          headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
          },
        })
        const respuesta = await response.json();
        if (!respuesta.success)
          throw respuesta;
        return respuesta;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user , trigger , session }) {
      if (trigger === "update")
        return { ...token, ...session };
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    }
  },
  pages: {
    signIn: "/",
  }

});

export { handler as GET , handler as POST }