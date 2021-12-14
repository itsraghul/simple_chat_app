import '../styles/auth.css';
import '../styles/chats.css';
import '../styles/index.css';
import { ContextProvider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
