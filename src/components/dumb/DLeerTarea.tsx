export default function DLeerTarea(props: { tarea: Tarea , menosDetalles: () => void , actualizar: () => void }): JSX.Element {
  return (
    <div className="cont-mas-detalles">
      <div className="cont-encabezado-mas-detalles">
        <h2>Mas detalles</h2>
        <button onClick={props.menosDetalles}>X</button>
      </div>
      <div className="cont-detalles">
        <p>Titulo:</p>
        <p id={"texto"}> {props.tarea.titulo}</p>
        <p>Descripcion:</p>
        <textarea id="leer-descripcion" value={props.tarea.descripcion} readOnly></textarea>
      </div>
      <div className="cont-actualizar-button">
        <button onClick={props.actualizar}>Actualizar</button>
      </div>
    </div>
  )
}
