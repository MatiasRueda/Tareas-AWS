import SFActualizarTarea from "./SFActualizarTarea";

export default function SActualizarTarea(props: { tarea: Tarea , menosDetalles: () => void , volver: () => void }): JSX.Element {
  
  return (
    <div className="cont-mas-detalles">
      <div className="cont-encabezado-mas-detalles">
        <h2>Actualizar Tarea</h2>
        <button onClick={props.menosDetalles}>X</button>
      </div>
      <SFActualizarTarea tarea={props.tarea} 
                         volver={props.volver}
                         menosDetalles={props.menosDetalles}/>
    </div>
  )
}
