import React, { useEffect } from 'react';
import Layout from './main';
import Fonts from './Fonts';
import { AnimatePresence } from 'framer-motion';
import Chakra from './chakra';
import { useLocation } from 'react-router-dom';
//import Payhip from './components/payhip';

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
      
      <Layout path={location.pathname}>
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
