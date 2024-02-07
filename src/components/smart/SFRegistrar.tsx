import { Dispatch, Fragment, SetStateAction, useState } from "react"
import DSpan from "../dumb/DSpan"
import SFormulario from "./SFormulario"
import SInput from "./SInput"
import DMensajeUsuario from "../dumb/DMensajeUsuario"
import DCargando from "../dumb/DCargando"


export default function SFRegistrar(props: { cargando: boolean , setCargando: Dispatch<SetStateAction<boolean>>}): JSX.Element {
  const [ mensaje , setMensaje ] = useState<string>();
  
  const submit = async (data: any): Promise<void> => {
    props.setCargando(true);
    const url: string = `${process.env.NEXT_PUBLIC_API}/api/registrarUsuario`;
    const peticion = await fetch(url, {
      method: "POST",
      body : JSON.stringify({
        nombre: data.nombre,
        contrasenia: data.contrasenia
      }),
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
      },
    })
    const respuesta: Respuesta<undefined> = await peticion.json();
    props.setCargando(false);
    setMensaje(respuesta.message);

  }

  const volver = (): void => {
    setMensaje(undefined);
  }
  
  return (
    <Fragment>
      { props.cargando? 
          <DCargando/> :
          <SFormulario id="registrar" btnEnviar="Registrar" onSubmit={submit}>
            <DSpan texto="Nombre:" />
            <SInput nombre="nombre" type="text"
                    reglas={{ required: "Escriba su nombre porfavor" , 
                              maxLength: { value: 10, message: "maximo 10 caracteres" }}}/>
            <DSpan texto="Contrasenia:"/>
            <SInput nombre="contrasenia" type="password"
                    reglas={{ required: "Escriba su contrasenia porfavor", 
                              maxLength: { value: 10, message: "maximo 10 caracteres" }}}/>
            <DSpan texto="Confirmar contrasenia:"/>
            <SInput nombre="confirmarContrasnia" type="password" 
                    reglas={{ required: "Reescriba su contrasenia porfavor" }} 
                    inputIgual="contrasenia"/>
          </SFormulario>}
      {mensaje && <DMensajeUsuario mensaje={mensaje} volver={volver}/>}
    </Fragment>
  )
}
