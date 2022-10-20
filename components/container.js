import Head from 'next/head';
import Link from 'next/link';
import Navigation from './navigation';

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Youtube Cards</title>        
      </Head>
      <Navigation/>
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  )
};

export default Container;