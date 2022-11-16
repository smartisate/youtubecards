import { useContext } from "react";
import Link from 'next/link';
import Search from './Search';
import User from './User';
import SidebarToggleContext from "./context/SidebarToggleContext";

import Image from 'next/image';

const Navigation = () => {

  const {handleDisplaySidebar} = useContext(SidebarToggleContext);

  return (
    <div className="ycNavigationContainer">        
      <div className="ycHamburderLogoCantainer">
        <button id="btnHamburger" className="ycHamburgerIconContainer" onClick={handleDisplaySidebar}>
          <img src='/hamburger_icon.png' layout={'fixed'} height={20} className="hamburger"/>
        </button>
        <div className="ycLogoContainer">
          <Link href="/">
            <a className="ycLogoLink">
              <div className='ycLogoContent'>
                <img src='/logo.svg' layout={'fixed'} width={90} height={20} className="ycLogoImage"/>
              </div>
              <div className='ycLogoPartCountry'>BO</div>
            </a>
          </Link>
        </div>
      </div>
      <Search/>
      <User/>
    </div>
  );
}

export default Navigation;