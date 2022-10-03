import '../styles/global.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <link href="/favicon.ico" rel="shortcut icon" />
        <title>Machine Learning 🤖 Genetic Algorithm 🧬</title>
        <meta
          content="Machine Learning 🤖 using a Genetic Algorithm 🧬 We will follow a set of ants that have to find their way to a juicy lemon 🍋 while avoiding viruses 🦠"
          name="description"
        />

        <meta
          content="https://genetic-algorithm-v2.vercel.app"
          property="og:url"
        />
        <meta content="website" property="og:type" />
        <meta
          content="Machine Learning 🤖 using a Genetic Algorithm 🧬 We will follow a set of ants that have to find their way to a juicy lemon 🍋 while avoiding viruses 🦠"
          property="og:title"
        />
        <meta
          content="Machine Learning 🤖 using a Genetic Algorithm 🧬 We will follow a set of ants that have to find their way to a juicy lemon 🍋 while avoiding viruses 🦠"
          property="og:description"
        />
        <meta
          content="https://repository-images.githubusercontent.com/542117000/004792eb-647d-49f1-9423-2ff5313551e4"
          property="og:image"
        />

        <meta content="summary_large_image" name="twitter:card" />
        <meta content="vercel.app" property="twitter:domain" />
        <meta
          content="https://genetic-algorithm-v2.vercel.app"
          property="twitter:url"
        />
        <meta
          content="Machine Learning 🤖 using a Genetic Algorithm 🧬 We will follow a set of ants that have to find their way to a juicy lemon 🍋 while avoiding viruses 🦠"
          name="twitter:title"
        />
        <meta
          content="Machine Learning 🤖 using a Genetic Algorithm 🧬 We will follow a set of ants that have to find their way to a juicy lemon 🍋 while avoiding viruses 🦠"
          name="twitter:description"
        />
        <meta
          content="https://repository-images.githubusercontent.com/542117000/004792eb-647d-49f1-9423-2ff5313551e4"
          name="twitter:image"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
