import { useSession } from "next-auth/react";
import DSpan from "../dumb/DSpan";
import SFormulario from "./SFormulario";
import SInput from "./SInput";
import STextArea from "./STextArea";
import { Fragment, useState } from "react";
import DMensaje from "../dumb/DMensaje";
import { invitado } from "@/auxiliar/invitado";
import DMensajeUsuario from "../dumb/DMensajeUsuario";
import { cambiarTarea } from "@/auxiliar/cambiar";

export default function SFActualizarTarea(props: { tarea: Tarea , volver: () => void , menosDetalles: () => void }): JSX.Element {
  const { data: session , update } = useSession();
  const [ cargando, setCargando ] = useState<boolean>(false);
  const [ mensaje , setMensaje ] = useState<string>();

  const submit = async (data: any): Promise<void> => {
    const tareas: Tarea[] = session!.user.data!.tareas;
    const url: string = `${process.env.NEXT_PUBLIC_API}/api/auth/actualizarTarea`;
    const tareaActualizada: Tarea = {
      ...props.tarea,
      ...data,
    };
    if (session?.user.data?.token === invitado.data?.token) {
      tareas.forEach((tarea, indice) => { 
        if (tarea.id === tareaActualizada.id) 
          tareas[indice] = tareaActualizada
      });
      await cambiarTarea(update, session, tareas);
      props.menosDetalles();
      return;
    }
    setCargando(true);
    const peticion = await fetch(url, {
      method: "PUT",
      body : JSON.stringify(tareaActualizada),
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
        "Authorization" : session!.user.data!.token,
      },
    })
    const respuesta: Respuesta<Tarea> = await peticion.json();
    if (!respuesta.success) {
      setMensaje(respuesta.message);
      props.menosDetalles();
      setCargando(false);
      return;
    }
    tareas.forEach((tarea, indice) => {
       if (tarea.id === respuesta.data!.id) 
        tareas[indice] = respuesta.data!
    });
    await cambiarTarea(update, session, tareas);
    props.menosDetalles();
    setCargando(false);
  } 

  const volver = (): void => {
    setMensaje(undefined);
  }

  const cancelar = {
    texto: "Volver",
    accion: props.volver
  }
  
  return (
    <Fragment>
      <SFormulario id="actualizarTarea" btnEnviar="Aceptar" onSubmit={submit} cancelar={cancelar}>
        <DSpan texto="Titulo:"/>
        <SInput nombre="titulo" type="text" defaultValue={props.tarea.titulo}
                reglas={{ required: "Escriba un titulo porfavor", 
                          maxLength: { value: 15 , message: "Maximo de 15 caracteres"}}}/>
        <DSpan texto="Descripcion:"/>
        <STextArea nombre="descripcion" placeholder="Describa la tarea"
                   texto={props.tarea.descripcion}/>
      </SFormulario>
      {cargando && <DMensaje mensaje={"Actualizando datos"}/>}
      {mensaje && <DMensajeUsuario mensaje={mensaje} volver={volver}/>}
    </Fragment>
  )
}
