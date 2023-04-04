import Head from 'next/head'

const MetaTags = ({name, description, image, url}) => {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{name}</title>
      <meta name='title' content={name} />
      <meta name='description' content={description} />
      {/* Open Graph / Facebook */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={name} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      {/* Twitter */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={name} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
    </Head>
  )
}

export default MetaTags

MetaTags.defaultProps = {
  name: 'Next.js Starter App',
  description:
    'This is a Next.js starter app, with customizable Bootstrap CSS, vercel analytics and more',
  image:
    'https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png',
  url: 'https://nextjs-starter-bootstrap.vercel.app//',
}
