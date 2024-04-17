import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';
import { LanguageProvider } from '../components/Context/Language';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <LanguageProvider>
      <FaustProvider pageProps={pageProps}>
        <Component {...pageProps} key={router.asPath} />
      </FaustProvider>
    </LanguageProvider>
  );
}
