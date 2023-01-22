import React from 'react';
import '../styles/globals.css'
import { TaskProvider } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  );
}

export default MyApp;