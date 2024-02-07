import { Dispatch, Fragment, SetStateAction, useState } from "react"
import DSpan from "../dumb/DSpan"
import SFormulario from "./SFormulario"
import SInput from "./SInput"
import DCargando from "../dumb/DCargando"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { invitado } from "@/auxiliar/invitado"
import DMensajeUsuario from "../dumb/DMensajeUsuario"

export default function SFIngresar(props: { cargando: boolean , setCargando: Dispatch<SetStateAction<boolean>>}): JSX.Element {
  const [ mensaje, setMensaje ] = useState<string>();
  const router = useRouter();

  const submit = async (data: any): Promise<void> => {
    props.setCargando(true);
    const respuesta = await signIn("credentials", {
      nombre: data.nombre,
      contrasenia: data.contrasenia,
      redirect: false
    });
    if (respuesta?.ok) {
      router.push("/tareas");
      return;
    }
    setMensaje(respuesta?.error!);
    props.setCargando(false);
  } 
  
  const ingresarInvitado = async (): Promise<void> => {
    props.setCargando(true);
    const respuesta = await signIn("credentials", {
      nombre: invitado.data?.nombre,
      contrasenia: invitado.data?.token,
      invitado: true,
      redirect: false
    })
    if (respuesta?.ok) {
      router.push("/tareas");
      return;
    }
    props.setCargando(false);
  }

  const volver = (): void => {
    setMensaje(undefined);
  }

  const cancelar = {
    texto: "Invitado",
    accion: ingresarInvitado
  }
  return (
    <Fragment>
      {props.cargando? <DCargando/> : 
                 <SFormulario id="ingresar" btnEnviar="Ingresar" onSubmit={submit} cancelar={cancelar}>
                    <DSpan texto="Nombre:"/>
                    <SInput nombre="nombre" type="text"
                            reglas={{ required: "Escriba su nombre porfavor" }}/>
                    <DSpan texto="Contrasenia:"/>
                    <SInput nombre="contrasenia" type="password"
                            reglas={{ required: "Escriba su contrasenia porfavor" }}/>
                </SFormulario>}
      {mensaje && <DMensajeUsuario mensaje={mensaje} volver={volver}/>}
    </Fragment>
  )
}
