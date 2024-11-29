import React, { useEffect } from 'react';
import Layout from '../components/main';
import Fonts from '../components/Fonts';
import { AnimatePresence } from 'framer-motion';
import Chakra from '../components/chakra';
import { useLocation } from 'react-router-dom';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function Website({ Component, pageProps }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]); 

  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      
      <Layout path={location.pathname} key={location.pathname}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={location.pathname} />
        </AnimatePresence>
        
      </Layout>
    </Chakra>
  );
}

export default Website;
