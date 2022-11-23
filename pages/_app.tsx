import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/main.css";
import type { AppProps } from "next/app";
import { TerminalContextProvider } from "react-terminal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TerminalContextProvider>
        <Component {...pageProps} />;
      </TerminalContextProvider>
    </>
  );
}

export default MyApp;
