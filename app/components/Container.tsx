// Marcar como ClientComponent, es algo que debemos hacer cuando trabajamos con la carpeta app, porque cada componente o página que creamos dentro de la carpeta app es ServerComponent por default, y puede haber problemas de hydration sí mezclas o juntas imports de tipo Client con Server.

'use client';

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return (
        <div
        className="
        max-w-[2520px]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
        
        "
        >
            {children}
        </div>
    );
}

export default Container;


/*
--------------------------------------------------------------------------------------------------
### REACT.FC
React.FC: FC significa "Functional Component" (Componente Funcional). Es una abreviatura de React.FunctionComponent y es una forma de declarar un componente funcional en React.

### COMPONENTE FUNCIONAL
Un componente funcional en React es una forma de definir y crear componentes utilizando funciones en lugar de clases. Antes de la introducción de los "Hooks" en React 16.8, los componentes se solían crear principalmente como clases mediante la extensión de la clase React.Component.
Con la llegada de los Hooks, se introdujo una nueva forma de crear componentes llamados componentes funcionales. Un componente funcional es simplemente una función de JavaScript que devuelve JSX (JavaScript XML), que es una sintaxis similar a HTML utilizada por React para definir la estructura y el contenido de los componentes.
--------------------------------------------------------------------------------------------------
<ContainerProps>: Esta es una sintaxis genérica en TypeScript que especifica que el componente "Container" aceptará propiedades de tipo ContainerProps. La interfaz ContainerProps que se definió previamente se utiliza aquí para indicar qué propiedades se pueden pasar al componente.
--------------------------------------------------------------------------------------------------

#INTERFACE CONTAINERPROPS
Interfaz ContainerProps:
La interfaz ContainerProps define una única propiedad llamada children, que se espera que sea de tipo React.ReactNode. Esta interfaz se utiliza para especificar las propiedades que pueden ser pasadas al componente "Container". En este caso, se utiliza para indicar que el componente "Container" puede recibir contenido anidado como propiedad.
La línea de código 5 está declarando un componente funcional de React llamado "Container" que aceptará las propiedades definidas en la interfaz ContainerProps. Esto permite que el componente "Container" reciba y utilice las propiedades especificadas cuando se utiliza en otros componentes o en el código JSX/TSX.

### REACT.REACTNODE
El tipo React.ReactNode es un tipo en TypeScript que se utiliza para representar cualquier tipo de contenido válido en JSX/TSX. Es una unión de tipos que puede contener elementos JSX, fragmentos, texto, arreglos de nodos, expresiones JSX y otros tipos de datos que pueden ser renderizados por React.

### INTERFACE
El propósito principal de utilizar React.ReactNode es proporcionar un tipo genérico que pueda aceptar cualquier tipo de contenido que se pueda renderizar en un componente de React. Al utilizar React.ReactNode como tipo de una propiedad en un componente, estás permitiendo que esa propiedad pueda recibir cualquier contenido válido en JSX/TSX.

En TypeScript, una interfaz es una forma de definir una estructura o contrato para un objeto. Proporciona un conjunto de propiedades y métodos que se esperan en un objeto que implementa la interfaz.

Al utilizar la palabra clave interface, puedes definir una interfaz y especificar las propiedades y métodos que deben tener los objetos que implementen esa interfaz.

### CONTRATO 
Un contrato para un objeto se refiere a un conjunto de reglas o requisitos que se deben cumplir para que un objeto sea considerado válido y cumpla con ciertas expectativas.

En este sentido, un contrato establece la estructura y el comportamiento esperado de un objeto. Establece las propiedades que deben estar presentes en el objeto, los tipos de datos de esas propiedades y los métodos que deben ser implementados, junto con sus argumentos y tipos de retorno.

El contrato es una forma de definir las reglas y restricciones que rigen la interacción con un objeto. Cuando un objeto implementa un contrato, se compromete a cumplir con todas las especificaciones establecidas en el contrato.
--------------------------------------------------------------------------------------------------

Componente funcional "Container":
El código define un componente funcional llamado "Container" utilizando la sintaxis de una función de componente. La función acepta un objeto de desestructuración con las propiedades definidas en la interfaz ContainerProps, en este caso, solo children. Dentro de la función, se devuelve JSX que define la estructura del componente.

El componente "Container" renderiza un <div> y utiliza la sintaxis de llaves ({}) para incluir el valor de la propiedad children dentro del <div>. Esto permite que el contenido anidado pasado al componente "Container" se muestre dentro del elemento <div> cuando se renderiza el componente.

Exportación del componente "Container":
La última línea export default Container; exporta el componente "Container" para que pueda ser importado y utilizado en otros archivos.

En resumen, el código define un componente funcional llamado "Container" que acepta un contenido anidado a través de la propiedad children. Al utilizar este componente en otros lugares del código, los desarrolladores pueden pasar contenido anidado como propiedades y ese contenido se mostrará dentro de un <div> cuando se renderice el componente "Container".
*/



