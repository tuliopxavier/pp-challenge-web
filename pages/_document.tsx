import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head lang='pt-br'>
        <meta name="description" content="Pedido Pago - Web Challenge"/>
        <meta name="keywords" content="Pedido Pago, HTML, CSS, Typescript, Next, React, Emotion, Axios"/>
        <meta name="author" content="Túlio Pereira Xavier"/>
        
        {/* Fav Icon */}
        <link rel="shortcut icon" href='/assets/Logo.svg' />
        
        {/* Poppins Font Family Import */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap' rel='stylesheet' />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
