import React from 'react'
import Head from 'next/head'

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
        <title>guitarLA - {pagina}</title>
        <meta name ="description" content="Sitio Web para venta de guitarras" />
        </Head>
        {children}
    </div>
  )
}

export default Layout