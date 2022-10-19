import Link from 'next/link';
import Search from './search';
import User from './user';

const Navigation = () => {
  return (
    <div className="d-flex justify-content-between">
        <div>
          <Link href="/">
            <a>
              <i className="bi-youtube" style={{ fontSize: 30 }} />          
              youtube
            </a>
          </Link>
        </div>        
        <Search/>
        <User/>
    </div>
  );
}

export default Navigation;