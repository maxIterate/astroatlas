'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter()

    return (
        <Image 
        alt="Logo"
        className="md:block cursor-pointer"
        height={100}
        width={100}
        src="/images/logo.png"
        />
    )
}

export default Logo;



/*
"useClient":
"useClient" no es un término o función específica en React o Next.js. Sin embargo, asumiendo que te refieres a usar un cliente para hacer solicitudes de datos a una API o servidor, esto implica que el código se ejecuta en el lado del cliente, generalmente en el navegador web. En este enfoque, el cliente (navegador) realiza solicitudes a un servidor para obtener datos o recursos necesarios para renderizar la interfaz de usuario.

Componentes de servidor por defecto de Next.js (server components):
Next.js es un framework de React que ofrece capacidades avanzadas de renderizado en el lado del servidor (SSR, por sus siglas en inglés) y renderizado en el lado del cliente (CSR, por sus siglas en inglés). Por defecto, Next.js utiliza el renderizado en el lado del servidor (SSR) para generar y enviar al cliente una versión completa de la página ya renderizada, incluyendo los datos iniciales.
*/