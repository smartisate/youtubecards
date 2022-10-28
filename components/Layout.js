import Head from 'next/head';
import Link from 'next/link';
import Navigation from './Navigation';
import LeftSidebarButton from './LeftSidebarButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Youtube Cards</title>        
      </Head>
      <Navigation/>
      <div className='d-flex'>
        <div className='d-flex justify-content-center'>
            <div className='d-flex flex-column'>
              <LeftSidebarButton title="Principal" url="/"/>
              <LeftSidebarButton title="Shorts" url="/"/>
              <LeftSidebarButton title="Suscripciones" url="/"/>
              <LeftSidebarButton title="Biblioteca" url="/"/>
            </div>        
        </div>
        <div>
          {props.children}
        </div>
      </div>  
    </>
  )
};

export default Layout;