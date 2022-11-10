import Head from 'next/head';
import Link from 'next/link';
import Navigation from './Navigation';
import LeftSidebarButton from './LeftSidebarButton';
import {useState, useEffect} from 'react';

const Sidebar = (props) => {

  const [displayCompressed, setDisplayCompressed] = useState(true);

  useEffect( () => {
    console.log("Inicia monitoreo a click");

    const detectarClick = () => {
      setDisplayCompressed( ! displayCompressed );
    }
    const element = document.getElementById('btnHamburger');

    console.log('add click at mount state');
    element.addEventListener("click", detectarClick);
    return () => {
      console.log('remove click at unmount state');
      element.removeEventListener("click", detectarClick);
    }

  },[displayCompressed]);


  return (
    <>
      {
        displayCompressed ? 
        <div id='sidebar' class="sidebarCompressed">
          <LeftSidebarButton title="Principal" url="/"/>
          <LeftSidebarButton title="Shorts" url="/"/>
          <LeftSidebarButton title="Suscripciones" url="/"/>
          <LeftSidebarButton title="Biblioteca" url="/"/>
        </div>
      :
        <div id='sidebar' class="sidebarExpanded">
          <LeftSidebarButton title="Principal" expanded={true} url="/"/>
          <LeftSidebarButton title="Shorts" expanded={true} url="/"/>
          <LeftSidebarButton title="Suscripciones" expanded={true} url="/"/>
          <LeftSidebarButton title="Library" expanded={true} url="/"/>
          <LeftSidebarButton title="History" expanded={true} url="/"/>
          <LeftSidebarButton title="Watch later" expanded={true} url="/"/>
      </div>
      }
    </>
  )
};

export default Sidebar;