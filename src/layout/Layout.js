import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next.js Starter App</title>
        <meta name='description' content='Next.js App' />
      </Head>
      <NavBar />
      <main className='container'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
