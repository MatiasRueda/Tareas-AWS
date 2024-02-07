"use client";
import "../../styles/tareas.css";
import "../../styles/masDetalles.css";
import SSaludo from "@/components/smart/SSaludo";
import SListaTareas from "@/components/smart/SListaTareas";
import SFAgregarTarea from "@/components/smart/SFAgregarTarea";
import { Fragment } from "react";
import SVolver from "@/components/smart/SVolver";
import { motion } from "framer-motion";
import { Fade } from "@/auxiliar/animacion";
import { usePathname } from "next/navigation";

export default function Tareas(): JSX.Element {
  const path = usePathname();
  return (
    <Fragment>
      <header className="encabezado-tareas">
        <SVolver/>
        <SSaludo/>
      </header>
      <motion.main className="tareas" key={path}
                 {...Fade}>
        <section className="lista-tareas">
          <SListaTareas/>
        </section>
        <section className="formulario-tareas-agregar">
          <SFAgregarTarea/>
        </section>
      </motion.main>
    </Fragment>
  )
}
