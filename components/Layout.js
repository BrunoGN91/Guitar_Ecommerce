import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout = ({children, pagina, guitarra}) => {
  return (
    <div>
        <Head>
        <title>guitarLA - {pagina}</title>
        <meta name ="description" content="Sitio Web para venta de guitarras" />
        </Head>
         <Header
         guitarra={guitarra}
         />
        {children}
    <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}
export default Layout