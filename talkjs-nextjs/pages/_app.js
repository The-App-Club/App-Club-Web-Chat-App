import { useState, useEffect } from 'react';
import '@/styles/globals.css';
import '@/styles/globals.scss';

function App({ Component, pageProps }) {
  useEffect(() => {
    require(`@/plugins/detectDeviceType.js`);
    require(`@/plugins/detectResize.js`);
  }, []);
  return <Component {...pageProps} />;
}

export default App;
