import { FieldValues, UseFormRegister } from "react-hook-form";

type TextAreaParams = {
    nombre: string;
    texto?: string;
    id?: string;
    clase?: string;
    readonly?: boolean;
    placeholder?: string;
    register?: UseFormRegister<FieldValues>;
}


function STextArea({...rest}: TextAreaParams): JSX.Element {
    return <textarea id={rest.id} className={rest.clase} 
            defaultValue={rest.texto} readOnly={rest.readonly}
            placeholder={rest.placeholder} {...rest.register!(rest.nombre)}/>
}

export default STextArea;