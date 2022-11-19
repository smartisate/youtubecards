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

const SidebarCompressed = () => {
  return (
    <div className="ycSidebar sidebarCompressed">
      <LeftSidebarButton title="Principal" url="/"/>
      <LeftSidebarButton title="Shorts" url="/"/>
      <LeftSidebarButton title="Suscripciones" url="/"/>
      <LeftSidebarButton title="Library" url="/"/>
      <LeftSidebarButton title="History" url="/"/>
      <LeftSidebarButton title="Watch later" url="/"/>
    </div>
  );
};

const SidebarModal = () => {
  return (
    <div id="ycSidebarModalContainer" onClick={handleSidebarModal}>
        <div className="ycSidebarModalContent">
          <Logo/>
        <SidebarExpanded/>
      </div>
    </div>
  );
};

const Sidebar = () => {

  const context = useContext(AppContext);

  if(context.modalSidebarEnable === false){
    if(context.displaySidebarCompressed === true){
      return (<SidebarCompressed/>);
    }
    else{
      return (<SidebarExpanded/>);
    }
  }
  else {

    if(context.displaySidebarCompressed === true){
      return (<>
        <SidebarCompressed/>
        <SidebarModal/>
      </>);
    }
    else{
      return (<>
      <SidebarExpanded/>
      <SidebarModal/>
      </>);
    }
  }
};

const handleSidebarModal = () =>{
  let sidebar = document.getElementById('ycSidebarModalContainer');
  sidebar.style.display = 'none';
};

export default Sidebar;