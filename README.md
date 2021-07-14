# SEGURO VEHICULAR TRACKING
## HERRAMIENTAS USADAS
### `REACT HOOKS`
  Usar react hooks hace que el codigo sea mas ordenado y facilita varias tareas, ademas que promueve a la modularizacion del codigo.
### `REACT-ROUTER`
 Se usa para poder conectar las vistas y mantener el flujo de funcionamiento.
### `NODE-SASS`
  Usar node-sass permite darle estilo a los componentes mediante archivos de scss modularizados para cada componente.
### `AXIOS`
  Axios facilita el trabajo con las apis.
### `GITHUBT PAGES`
  Se usa para desplegar el proyecto. El link es el siguiente. (https://LorenaGRB.github.io/seguro-vehicular-tracking)
### `FIREBASE`
   Se uso firebase para poder almacenar la informacion enviada y poder jalar la data deseada. Se que se podia usar el API que me enviaron (https://jsonplaceholder.typicode.com) pero decidi usar firebase para hacerlo mas 'real'. el link es (https://segurovehiculartrack-default-rtdb.firebaseio.com/)
  
  
## Los pasos que se siguieron:
  ### `GENERALES`
  -Se identifico con que herramientas se iba a realizar el proyecto.
  
  -Se creo un bosquejo del arbol de componentes, el cual da una idea clara y general del proyecto. Ademas que con este se identifican los componentes principales y los componentes a reusar.
  
  -Se descargaron todas las imagenes y se guardaron en assets dondese dividieron por componente principal.
  
  -Luego se fue avanzando los componentes conforme al flujo de trabajo que se indico en el figma y el arbol de componentes se modifico un poco conforme avanzaba.
  
  -Para realizar la maquetacion se usa la metodologia BEM porque es una manera de personalizar cada estilo sin que los demas se vean afectados.Por lo tanto, al maquetar componentes reusables se necesitaron enviar datos atraves de props.
 
 
  ### `VALIDACION`
  -En la logica de validacion se usaron regular expressions.
  
  
  ### `API`
  -Para enviar y obtener datos se uso axios.
  
  -Decidi obtener los datos del Firebase en la vista3 (ArmaPlan) mediante el uso del get porque queria usar la data que habia enviado.
  
  -Lo que se hizo fue enviar los datos y obtener el id de estos mediante el uso del response, luego los alamacene en una variable global (Creada por useContext de react hooks).
  
  -Para obtener datos use useEffect que reemplaza al uso de lifecicles y se obtuvo la data que se requeria ( plate, carYear y carBrand) haciendo uso de los ids guardados en las variables locales.
  
  *Para obtener los datos pude simplemente guardar los states de plate, carYear y carBrand atraves de useContext y no habria necesidad de usar el metodo get. Sin embargo, como se explica lineas arriba fue con la intencion de usar los datos almacenados en el firebase.
  
 ## Para levantar el proyecto:
 1- Primero se clona el repositorio con `git clone https://github.com/LorenaGRB/seguro-vehicular-tracking.git`
 
 2- Entrar a la carpeta donde se clono el repositorio y colocar en el terminal `npm install` para que instalen todas las dependencias.
 
 3- Luego escribir `npm start` para ver el proyecto en tu local host.
 
### Para poder ver la interaccion entre los states y los componentes se recomienda descargarse la extencion para google Chrome 'React developer tools' y luego en la barra de herramientas seleccionar 'components'
