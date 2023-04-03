import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next.js Starter App</title>
        <meta name='description' content='Next.js App' />
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
