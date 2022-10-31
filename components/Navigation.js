import Link from 'next/link';
import Search from './Search';
import User from './User';

import Image from 'next/image';

const Navigation = () => {
  return (
    <div className="ycNavigationContainer">        
      <div className="ycHamburderLogoCantainer">
        <button className="ycHamburgerIconContainer">
          <i className="bi bi-menu-down ycHamburgerMenu"></i>
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