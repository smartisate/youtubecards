import Link from 'next/link';
import Search from './Search';
import User from './User';

import Image from 'next/image';

const Navigation = () => {
  return (
    <div className="d-flex justify-content-between ycNavigationContainer">

        <Link href="/">
          <a id="ycLogoLink">
            <div className='d-flex justify-content-center ycLogoContainer'>
              <div className='ycLogoContent'>
                <Image src='/logo.svg' width={90} height={20}/>
              </div>
              <div className='ycLogoPartCountry'>BO</div>
            </div>
          </a>
        </Link>

        <Search/>

        <User/>
    </div>
  );
}

export default Navigation;