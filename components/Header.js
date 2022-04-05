import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'
import Layout from './Layout';
import Router from 'next/dist/server/router';


const Header = ({guitarra}) => {

  const router = useRouter()
  console.log(guitarra);
  return (
    <header className={styles.header}>
        <div className="contenedor">
  <div className={styles.barra}>
  <div>
                <Link href="/">
                  <a>
    <Image priority="true" width={400} height={100} src='/img/logo.svg' alt="image/logo" />
    </a>
    </Link>
            </div>
            <nav className={styles.navegacion}>
        <Link href='/'>Inicio</Link>
        <Link href='/nosotros'>Nosotros</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/tienda'>Tienda</Link>
        <Link href='/carrito'>
          <a>
            <Image layout='fixed' width={30} height={25} alt='imagen Carrito' src='/img/carrito.png'/>
          </a>
        </Link>

            </nav>
  </div>
  {guitarra && (
    <div className={styles.modelo}>
    <h2>Modelo {guitarra.nombre}</h2>
    <p className={styles.resumen}>{guitarra.descripcion}</p>
    <p className={styles.precio}>$ {guitarra.precio}</p>
        <Link href={`/guitarras/${guitarra.url}`}
            >
            <a className={styles.enlace}>
              Ver Producto
            </a>
        </Link>
    </div>
  )}
        </div>

{router.pathname === '/' && (
  <div className={styles.guitarra}>
  <Image layout='fixed' width={500} height={1200}  src='/img/header_guitarra.png' alt="imagen header guitarra" />

  </div>
)}
    </header>
  )
}



export default Header