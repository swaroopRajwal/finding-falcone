import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import AppWrapper from "../components/AppWrapper";
import store from "../lib/redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    window.addEventListener('resize', () => setScreenSize(window.innerWidth))
  })
  return (
    <Provider store={store}>
      <AppWrapper>
        <NextSeo
          title='Finding Falcone | Geektrust challenge'
          description='Evil King Shan has conquered Planet Falicornia. Queen Al Falcone somehow escaped Falicornia. Help King Shan find her. Select Planets to search the Queen and corresponding Vehicles. '
        />
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
