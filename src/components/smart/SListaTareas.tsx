"use client"

import { useSession } from "next-auth/react"
import DTarea from "../dumb/DTarea";
import { Fragment, useState } from "react";
import SMasDetalles from "./SMasDetalles";
import DMensaje from "../dumb/DMensaje";
import { invitado } from "@/auxiliar/invitado";
import { cambiarTarea } from "@/auxiliar/cambiar";

export default function SListaTareas(): JSX.Element {
  const { data: session , update } = useSession();
  const [ cargando, setCargando ] = useState<boolean>(false);
  const [ tarea , setTarea ] = useState<Tarea>();
  
  const masDetalles = (tarea: Tarea) => {
    setTarea(tarea);
  }

  const menosDetalles = () => {
    setTarea(undefined);
  }

  const eliminarTarea = async (id: string): Promise<void> => {
    if (session?.user.data?.token === invitado.data?.token) {
      await cambiarTarea(update, session, session!.user!.data!.tareas.filter(tarea => tarea.id != id));
      return;
    }
    setCargando(true);
    const url: string = `${process.env.NEXT_PUBLIC_API}/api/auth/eliminarTarea/${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Authorization" : session!.user.data!.token,
      },
    })
    await cambiarTarea(update, session, session!.user!.data!.tareas.filter(tarea => tarea.id != id));
    setCargando(false);
  }

  return (
    <Fragment>
      <div className="cont-lista-tarea">
        <div className="cont-cabecera">
          <h3>Titulo</h3>
          <h3>Descripcion</h3>
          <h3>Mas detalles</h3>
          <h3>Eliminar</h3>
        </div>
       <div className="cont-lista">
          {!session?.user.data?.tareas.length? 
            <h1>No hay tareas</h1> :
            session?.user.data?.tareas.map(tarea => 
              <DTarea key={tarea.id} tarea={tarea}
                      eliminarTarea={async () => await eliminarTarea(tarea.id) } 
                      masDetalles={() => { masDetalles(tarea) }}/>)}
        </div>
      </div>
      {tarea && <SMasDetalles tarea={tarea} menosDetalles={menosDetalles}/>}
      {(cargando || !session) && <DMensaje mensaje={"Actualizando datos..."}/>}
    </Fragment>
  )
}
