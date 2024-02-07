import { Fade } from "@/auxiliar/animacion";
import { motion } from "framer-motion";

export default function DMensaje(props: { mensaje: string }): JSX.Element {
  return (
    <motion.section className="pantalla"
                    {...Fade}>
      <div className="cont-mensaje">
        <h1>{props.mensaje}</h1>
      </div>
    </motion.section>
  )
}
