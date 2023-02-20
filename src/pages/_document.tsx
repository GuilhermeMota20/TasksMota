import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
          {/* <meta name="primary-color" content="rgb(219 39 119)" /> */}
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>

        <body className='bg-slate-200 select-none'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
