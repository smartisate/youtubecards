import Head from 'next/head';
import Link from 'next/link';
import Navigation from './Navigation';
import LeftSidebar from './LefSidebar';

const Container = (props) => {
  return (
    <>
      <Head>
        <title>Youtube Cards</title>        
      </Head>
      <Navigation/>
        

      
        
      <div className='d-flex justify-content-center'>
        
          <LeftSidebar/>

          <div className="">
              {props.children}
          </div>  
        
      </div>
    </>
  )
};

export default Container;