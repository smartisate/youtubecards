import "../styles/globals.css";
import "../styles/sidebar.css";

import AppContext from "../components/AppContext";
import { useState } from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  
  const [displaySidebarCompressed, setDisplaySidebarCompressed] = useState(false);

  const [modalSidebarEnable, setModalSidebarEnable] = useState(false);


  return (
    <AppContext.Provider
      value={{
        displaySidebarCompressed,
        setDisplaySidebarCompressed,
       
        modalSidebarEnable,
        setModalSidebarEnable,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
