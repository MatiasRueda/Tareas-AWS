"use client"

import { useState } from "react";
import DCargando from "../dumb/DCargando";
import SFormulario from "./SFormulario";
import DSpan from "../dumb/DSpan";
import SInput from "./SInput";
import { useSession } from "next-auth/react";
import STextArea from "./STextArea";
import DMensaje from "../dumb/DMensaje";
import { invitado } from "@/auxiliar/invitado";
import { v4 } from "uuid";
import { cambiarTarea } from "@/auxiliar/cambiar";
import DMensajeUsuario from "../dumb/DMensajeUsuario";

export default function SFAgregarTarea(): JSX.Element {
  const [ cargando, setCargando ] = useState<boolean>(false);
  const [ mensaje, setMensaje ] = useState<string>();
  const { data: session , update } = useSession();

  const submit = async (data: any): Promise<void> => {
    if (session?.user.data?.token === invitado.data?.token) {
      const id: string = v4();
      const nuevaTarea: Tarea = {
        id,
        ...data,
        usuario: invitado.data!.nombre,
        realizado: false
      }
      await cambiarTarea(update, session, [ nuevaTarea , ...session!.user!.data!.tareas,]);
      return;
    }
    setCargando(true);
    const url: string = `${process.env.NEXT_PUBLIC_API}/api/auth/agregarTarea`;
    const peticion = await fetch(url, {
      method: "POST",
      body : JSON.stringify(data),
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Authorization" : session!.user.data!.token,
      },
    })
    const respuesta: Respuesta<Tarea> = await peticion.json();
    if (!respuesta.success) {
      setMensaje(respuesta.message);
      setCargando(false);
      return;
    }
    await cambiarTarea(update, session, [respuesta.data! , ...session!.user!.data!.tareas]);
    setCargando(false);
  } 
  
  const volver = () => {
    setMensaje(undefined);
  }

  return (
    <div className="cont-agregar-tarea">
      <h3>Agregar Tarea</h3>
      {cargando? <DCargando/> : 
                 <SFormulario id="agregarTarea" btnEnviar="Agregar" onSubmit={submit}>
                    <DSpan texto="Titulo:"/>
                    <SInput nombre="titulo" type="text"
                            reglas={{ required: "Escriba un titulo porfavor", 
                                      maxLength: { value: 15 , message: "Maximo de 15 caracteres"}}}/>
                    <DSpan texto="Descripcion:"/>
                    <STextArea nombre="descripcion" placeholder="Describa la tarea"/>
                </SFormulario>}
      {cargando && <DMensaje mensaje={"Actualizando datos"}/>}
      {mensaje && <DMensajeUsuario mensaje={mensaje} volver={volver}/>}
    </div>
  )
}
