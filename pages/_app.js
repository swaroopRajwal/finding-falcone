import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import AppWrapper from "../components/AppWrapper";
import store from "../lib/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
}

export default MyApp;
