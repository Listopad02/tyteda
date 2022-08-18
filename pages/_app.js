// import App from 'next/app'
import { Provider } from "react-redux";
import { useEffect } from "react";
import store from "../redux/store";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //DEV ONLI!!!
    window.store = store;
    <script src="https://unpkg.com/react-id-swiper@4.0.0/lib/react-id-swiper.min.js"></script>;
  });
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
