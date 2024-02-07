"use client"

import { CSSProperties, useState } from "react"
import DIngresarRegistrar from "../dumb/DIngresarRegistrar";
import SFIngresar from "./SFIngresar";
import SFRegistrar from "./SFRegistrar";

export default function SControlador(): JSX.Element {
  const [ ingresar , setIngresar ] = useState<boolean>(true);
  const [ cargando , setCargando ] = useState<boolean>(false);
  
  const elegido: CSSProperties = {
    cursor: "default",
    backgroundColor: "black",
    color: "white",
  }

  const darEstilo = (esElegido: boolean): CSSProperties => {
    if (cargando && esElegido) 
      return {...elegido, pointerEvents: "none"};
    else if (cargando && !esElegido)
      return { pointerEvents: "none" };
    else if (esElegido)
      return elegido;
    else
      return {}
  }

  const irAIngresar = (): void => {
    setIngresar(true);
  }
  
  const irARegistrar = (): void => {
    setIngresar(false);
  }


  return (
    <div className="cont-controlador-ingresar-registrar">
      <DIngresarRegistrar ingresar={irAIngresar} registrar={irARegistrar}
                          ingresarEstilo={darEstilo(ingresar)} 
                          registrarEstilo={darEstilo(!ingresar)}/>
      {ingresar? <SFIngresar cargando={cargando} setCargando={setCargando}/> : 
                 <SFRegistrar cargando={cargando} setCargando={setCargando}/>}                 
    </div>
  )
}
