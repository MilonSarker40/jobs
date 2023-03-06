import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import Layout from '../components/Layout/Layout';

import MainApp from '../components/MainApp/MainApp';



export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <MainApp Component={Component} pageProps={pageProps} /> */}
    </Layout>
  );
}
