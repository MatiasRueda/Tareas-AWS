import { useState } from "react"
import SActualizarTarea from "./SActualizarTarea";
import DLeerTarea from "../dumb/DLeerTarea";
import { motion } from "framer-motion";
import { Fade } from "@/auxiliar/animacion";

export default function SMasDetalles(props: { tarea: Tarea , menosDetalles: () => void }): JSX.Element {
  const [ actualizar, setActualizar ] = useState<boolean>(false);

  const actualizarTarea = (): void => {
    setActualizar(true);
  }

  const noActualiarTarea = (): void => {
    setActualizar(false);
  }

  return (
    <motion.section className="mas-detalles"
                    key={props.tarea.titulo}
                    {...Fade}>
      {actualizar? <SActualizarTarea tarea={props.tarea}
                                     menosDetalles={props.menosDetalles}
                                     volver={noActualiarTarea}/> : 
                   <DLeerTarea tarea={props.tarea}
                               menosDetalles={props.menosDetalles}
                               actualizar={actualizarTarea} />}
    </motion.section>
  )
}
