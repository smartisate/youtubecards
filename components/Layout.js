import Head from 'next/head';
import Link from 'next/link';
import Navigation from './Navigation';
import LeftSidebarButton from './LeftSidebarButton';
import Sidebar from './Sidebar';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Layout = (props) => {

  const [displayCompressed, setDisplayCompressed] = useState(true);

  const handleDisplaySidebar = (e) => {
    setDisplayCompressed( ! displayCompressed );
    console.log('click in button hamburger');
  };

  return (
    <>
      <Head>
        <title>Youtube Cards</title>        
      </Head>

      <div>
        <Navigation handleDisplaySidebar={handleDisplaySidebar}/>
        <div id="sidebarAndSectionsContainer">
          <Sidebar displayCompressed={displayCompressed}/>
          <div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
};

export default Layout;