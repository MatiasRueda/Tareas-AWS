import { CSSProperties } from "react";

type IngresarRegistrarParams = {
  ingresar: () => void;
  registrar: () => void;
  ingresarEstilo?: CSSProperties;
  registrarEstilo?: CSSProperties;
}


export default function DIngresarRegistrar({...rest}: IngresarRegistrarParams): JSX.Element {
  return (
    <div className="cont-ingresar-registrar">
      <button onClick={rest.ingresar} style={rest.ingresarEstilo}>Ingresar</button>
      <button onClick={rest.registrar} style={rest.registrarEstilo}>Registrar</button>
    </div>
  )
}
