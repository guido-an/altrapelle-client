import React, { useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import CartContextProvider from '../contexts/CartContext';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/Layout/Layout';
import CookieBanner from '../components/utils/CookieBanner';
import { AnimatePresence } from 'framer-motion';

import * as fbq from '../lib/FacebookPixel';

const GlobalStyle = createGlobalStyle`
   html, body {
     margin: 0 auto;
     padding: 0;
     font-family: 'Poppins';
     scroll-behavior: smooth;
     overflow-x: hidden;
     overscroll-behavior: none;

   }

   p {
     color: #595b62
   }
   a {
     text-decoration: none;
     color: #595b62;
     font-weight: 500
   }
   a:hover {
     color: #153d6d;
   }
 
`;

const theme = {
  colors: {
    blue: '#153d6d',
    lightBlue: '#60bfc2',
    yellow: '#ffc900',
    backgroundGrey: '#ebebed',
    greyText: '#595b62',
  },
  mobileContainer: `${20}px`,
  desktopContainer: '10%',
  boxShadow: '0 4px 14px 0 rgb(0 0 0 / 39%)',
  boxShadowLight: '0 2px 7px 0 rgb(0 0 0 / 39%)',
};

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    fbq.pageview();
    const handleRouteChange = () => {
      fbq.pageview();
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      <CartContextProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Layout>
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              // handles scroll to top only after previous page has unmounted
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
        <CookieBanner />
      </CartContextProvider>
    </>
  );
}

export default App;
