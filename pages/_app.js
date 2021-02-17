import { I18nextProvider } from "./context/i18n";

function MyApp({ Component, pageProps }) {
  return (
    <I18nextProvider>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default MyApp;
