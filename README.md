# Tareas NextJS

![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Proyecto personal para aplicar mis conocimientos en NextJs y Typescript. </br>
La pagina ofrece un lista de tareas para cada usuario. </br>
Permite al usuario registrarse e ingresar y de esta poder guardar sus tareas en un base de datos.
A su vez le permite al usuario también ingresar como invitado si no quiere ingresar sus datos.

## Tabla de contenido
* [Introducción](#Introducción)
* [Tabla de contenido](#Tabla-de-contenido)
* [Tipo de proyecto](#Tipo-de-proyecto)
* [Capturas de pantalla](#Capturas-de-pantalla)
* [Estrategias](#Estrategias)
* [Tecnologías utilizadas](#Tecnologías-utilizadas)
* [Estructura](#Estructura)
* [Instalación](#Instalación)
* [Uso](#Uso)


## Tipo de proyecto
Proyecto individual.

## Capturas de pantalla 
<img src="https://i.postimg.cc/9z5tZrk9/tareasaws1.png"/>
<img src="https://i.postimg.cc/tT4r4n0C/tareasaws2.png"/>

## Estrategias
### Smart y Dumb Component
Se separaron los componentes que se utilizan en el proyecto en smart  y dumb component según la responsabilidad que tengan. Esto lo hice con el objetivo de obtener un código mas conciso y una mejor legibilidad </br> 
**Smart**:  Tendrán la lógica del componente, operaciones complejas , gestionan eventos y acciones del usuario.</br>
**Dumb**: No manejan la lógica, se encargan únicamente de la presentación.

### Carpeta Auxiliar
En esta carpeta guardo distintas funciones o variables constantes que usare a lo largo de todo el proyecto, de esta forma evito repetir código y con las variable contantes definidas evito tener cadenas mágicas.

### Next-Auth
Esta dependencia me permite almacenar la información del usuario de una forma mas segura y además me facilita el poder agregar seguridad a las rutas que se necesitan de una autorización.

## Tecnologías utilizadas
  - NextJs
  - CSS
  - Typescript

## Estructura 

```
Tareas-NextJS
├─ .eslintrc.json
├─ .gitignore
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ public
├─ README.md
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ auth
│  │  │     └─ [...nextauth]
│  │  │        └─ route.ts
│  │  ├─ favicon.ico
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ tareas
│  │     └─ page.tsx
│  ├─ auxiliar
│  │  ├─ animacion.ts
│  │  ├─ cambiar.ts
│  │  └─ invitado.ts
│  ├─ components
│  │  ├─ dumb
│  │  │  ├─ DCargando.tsx
│  │  │  ├─ DIngresarRegistrar.tsx
│  │  │  ├─ DLeerTarea.tsx
│  │  │  ├─ DMensaje.tsx
│  │  │  ├─ DMensajeUsuario.tsx
│  │  │  ├─ DSpan.tsx
│  │  │  └─ DTarea.tsx
│  │  └─ smart
│  │     ├─ SActualizarTarea.tsx
│  │     ├─ SControlador.tsx
│  │     ├─ SFActualizarTarea.tsx
│  │     ├─ SFAgregarTarea.tsx
│  │     ├─ SFIngresar.tsx
│  │     ├─ SFormulario.tsx
│  │     ├─ SFRegistrar.tsx
│  │     ├─ SInput.tsx
│  │     ├─ SListaTareas.tsx
│  │     ├─ SMasDetalles.tsx
│  │     ├─ SSaludo.tsx
│  │     ├─ STextArea.tsx
│  │     └─ SVolver.tsx
│  ├─ context
│  │  └─ SessionAuthProvider.tsx
│  ├─ middleware.ts
│  ├─ styles
│  │  ├─ app.css
│  │  ├─ home.css
│  │  ├─ masDetalles.css
│  │  └─ tareas.css
│  └─ types
│     ├─ next-auth.d.ts
│     └─ type.ts
└─ tsconfig.json

```

## Instalación 
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en). </br>
Una vez descargado o clonado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara las dependencias que necesite el proyecto

## Uso
En caso de haber seguido los pasos de la instalación solo debe ejecutar el siguiente comando:
```
npm run dev
```
y dirigirse a la dirección que se muestra en consola


En caso de saltarse los paso de instalación y querer probar el proyecto en linea visitar el siguiente link: <a href="https://tareas-next-js.vercel.app">https://tareas-next-js.vercel.app</a>
</br>



