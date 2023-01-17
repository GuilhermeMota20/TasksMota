import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        </Head>

        <body className='bg-slate-200'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
