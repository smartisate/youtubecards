import Head from 'next/head';
import Link from 'next/link';
import Navigation from './Navigation';
import LeftSidebarButton from './LeftSidebarButton';
import Sidebar from './Sidebar';
import {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Layout = (props) => {
  
  return (
    <>
      <Head>
        <title>Youtube Cards</title>
      </Head>

      <div>
        <Navigation/>
        <div id="sidebarAndSectionsContainer">
          <Sidebar/>
          <div>
            {props.children}
          </div>
        </div>
      </div>
    </>
  )
};

export default Layout;