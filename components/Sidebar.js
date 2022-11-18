import { useContext } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Navigation from './Navigation';
import LeftSidebarButton from './LeftSidebarButton';
import AppContext from "../components/AppContext";
import Logo from "./Logo";

const SidebarExpanded = () => {
  return (
    <div className="ycSidebar sidebarExpanded">
      <LeftSidebarButton title="Principal" expanded={true} url="/"/>
      <LeftSidebarButton title="Shorts" expanded={true} url="/"/>
      <LeftSidebarButton title="Suscripciones" expanded={true} url="/"/>
      <LeftSidebarButton title="Library" expanded={true} url="/"/>
      <LeftSidebarButton title="History" expanded={true} url="/"/>
      <LeftSidebarButton title="Watch later" expanded={true} url="/"/>
    </div>
  );
};


const Sidebar = () => {

  const context = useContext(AppContext);



  return (
    <>
      {
        context.modalSidebarEnable === false && context.displaySidebar === context.SIDEBAR_COMPRESSED ? 
        <div className="ycSidebar sidebarCompressed">
          <LeftSidebarButton title="Principal" url="/"/>
          <LeftSidebarButton title="Shorts" url="/"/>
          <LeftSidebarButton title="Suscripciones" url="/"/>
          <LeftSidebarButton title="Biblioteca" url="/"/>
        </div>
      :
        context.displaySidebar == context.SIDEBAR_DISPLAY ?
          <SidebarExpanded/>
          :
          ''
      }

      {
        context.modalSidebarEnable === true ?
        <>
          <div id="ycSidebarModalContainer" onClick={handleSidebarModal}>
            <div className="ycSidebarModalContent">
              <Logo/>
              <SidebarExpanded/>
            </div>
          </div>
        </>
        :
        ''
      }    
    </>
  )
};

const handleSidebarModal = () =>{
  let sidebar = document.getElementById('ycSidebarModalContainer');
  sidebar.style.display = 'none';
};

export default Sidebar;