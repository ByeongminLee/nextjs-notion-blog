import { ThemeProvider } from 'next-themes';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || null} defaultTheme="system">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
