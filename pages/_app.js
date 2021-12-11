import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import AppWrapper from "../components/AppWrapper";
import store from "../lib/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize(window.innerWidth))
  })
  return (
    <Provider store={store}>
      <AppWrapper>
        <Toaster
          position={`${screenSize < 700 ? 'top-right' : 'top-center'}`}
          toastOptions={{
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
        <NavBar/>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
}

export default MyApp;
