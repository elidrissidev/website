import { Html, Head, Main, NextScript } from 'next/document'

function MyDocument() {
  return (
    <Html lang="en" className="h-full">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Public+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="h-full bg-white text-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
