export default function DMensajeUsuario(props: { mensaje: string , volver: () => void }): JSX.Element {
  return (
    <section className="pantalla">
      <div className="cont-mensaje">
        <h3>{props.mensaje}</h3>
        <button onClick={props.volver}>Aceptar</button>
      </div>
    </section>
  )
}
