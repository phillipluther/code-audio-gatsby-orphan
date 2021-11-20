import { AppProps } from 'next/app';
import '@fontsource/lora';
import '@fontsource/lora/600.css';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
