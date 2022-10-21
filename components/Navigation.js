import Link from 'next/link';
import Search from './Search';
import User from './User';

import Image from 'next/image';

const Navigation = () => {
  return (
    <div className="d-flex justify-content-between">

        <Link href="/">
          <a id="yc-logo-link">
            <div className='d-flex justify-content-center yc-logo-items'>
              <div className='yc-logo-container'>
                <Image src='/logo.svg' width={90} height={20}/>
              </div>
              <div className='yc-logo-part-country'>BO</div>
            </div>
          </a>
        </Link>

        <Search/>

        <User/>
    </div>
  );
}

export default Navigation;