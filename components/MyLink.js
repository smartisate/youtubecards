import { useContext } from "react";
import Link from 'next/link';
import SidebarToggleContext from "./context/SidebarToggleContext";

const MyLink = ( {href, children} ) => {

  const {handleDisplaySidebar} = useContext(SidebarToggleContext);
  
  return (
    <>
      <Link href={href}>
        <a onClick={handleDisplaySidebar}>
          {children}
        </a>
      </Link>
    </>
  );
};

export default MyLink;