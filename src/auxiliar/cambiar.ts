import { Session } from "next-auth";

export async function cambiarTarea(update: (data: any) => Promise<Session | null> , session: Session | null, tareas: Tarea[] ): Promise<void>  {
  await update({
    ...session!.user ,
    data: { 
      ...session!.user.data, 
      tareas: tareas }}) 
}