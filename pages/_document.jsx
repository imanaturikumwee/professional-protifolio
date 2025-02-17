import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ie.together</title>
        <meta name="description" content="ie.together is a community of developers, designers, and creators who are passionate about building and creating things together." />
        <link rel="icon" href="/ie.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}