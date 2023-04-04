import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Layout from '@/layout/Layout'
import '../styles/scss/theme.scss'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
