export default function DTarea(props: { masDetalles: () => void, eliminarTarea: () => Promise<void> , tarea: Tarea }): JSX.Element {
  return (
    <div className="cont-tarea">
      <h4>{props.tarea.titulo}</h4>
      <p>{props.tarea.descripcion}</p>
      <div id="masDetalles">
        <button onClick={props.masDetalles}>+</button>
      </div>      
      <div id="eliminar">
        <button onClick={props.eliminarTarea}>X</button>
      </div>
    </div>
  )
}
