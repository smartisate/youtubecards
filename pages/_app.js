import "../styles/globals.css";
import "../styles/sidebar.css";

import AppContext from "../components/AppContext";
import { useState } from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  
  const SIDEBAR_DISPLAY = 1;
  const SIDEBAR_COMPRESSED = 2;
  
  const [displaySidebar, setDisplaySidebar] = useState(SIDEBAR_COMPRESSED);

  const [modalSidebarEnable, setModalSidebarEnable] = useState(false);


  return (
    <AppContext.Provider
      value={{
        displaySidebar,
        setDisplaySidebar,
       
        modalSidebarEnable,
        setModalSidebarEnable,

        SIDEBAR_DISPLAY,
        SIDEBAR_COMPRESSED
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
