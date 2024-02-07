type Respuesta<T> = {
  data?: T;
  message: string;
  success: boolean
}

type Tarea = {
  id: string;
  titulo: string;
  descripcion: string;
  usuario: string;
  realizado: boolean;
}

type Usuario = {
  nombre: string;
  tareas: Tarea[];
  token: string;
}
