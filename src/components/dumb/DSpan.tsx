function DSpan(props: { texto: string }): JSX.Element {
  return (
    <div className="cont-label">
      <span>
        {props.texto}
      </span>
    </div>
  )
}

export default DSpan;