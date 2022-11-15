import {createContext, useState } from "react";

const SidebarToggleContext = createContext();

const initialDisplayCompressed = true;

const SidebarToggleProvider = ( {children} ) => {
  const [displayCompressed, setDisplayCompressed] = useState(initialDisplayCompressed);

  const handleDisplaySidebar = (e) => {
    setDisplayCompressed( ! displayCompressed );
    console.log('click in button hamburger');
  };

  const data = {displayCompressed, handleDisplaySidebar};

  return <SidebarToggleContext.Provider value={data}>
    {children}
  </SidebarToggleContext.Provider> 
};

export {SidebarToggleProvider};
export default SidebarToggleContext;