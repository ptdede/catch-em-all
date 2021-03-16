import Document, { Html, Head, Main, NextScript } from 'next/document'

const fontLink = "https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300;400&display=swap"
class MyDocument extends Document {
  render() {
    return (
      <Html
        lang="en"
      >
        <Head>
          <link
            rel="preconnect" 
            href="https://fonts.gstatic.com"
          />
          <link
            rel="preload"
            as="style"
            href={fontLink}
          />
          <link
            rel="stylesheet"
            href={fontLink}
            media="print"
            onLoad={function () {
              this.media='all'
            }}
          />
          <link
            href={fontLink}
            rel="stylesheet"
          />
          <noscript>
            <link
              rel="stylesheet"
              href={fontLink}
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument