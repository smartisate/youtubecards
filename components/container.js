import Head from 'next/head';
import Link from 'next/link';
import Navigation from './navigation';

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Youtube Cards</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>
      </Head>
      <Navigation/>
      <div className="container-fluid">
        {props.children}
      </div>
    </div>
  )
};

export default Container;