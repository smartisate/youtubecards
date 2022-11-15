import Link from 'next/link';
import Search from './Search';
import User from './User';

import Image from 'next/image';

const Navigation = ( {handleDisplaySidebar} ) => {
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

const myFunction =() =>{
  var element = document.getElementById("sideBarLeftExpanded");
  element.classList.toggle("sideBarLeftExpandedDisplay");
  console.log("click on hamburger button");
}

export default Navigation;