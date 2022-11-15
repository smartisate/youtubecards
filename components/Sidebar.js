import { useContext } from "react";
import Head from 'next/head';
import Link from 'next/link';
import Navigation from './Navigation';
import LeftSidebarButton from './LeftSidebarButton';
import SidebarToogleContext from "./context/SidebarToggleContext";

const Sidebar = () => {

  const {displayCompressed} = useContext(SidebarToogleContext);

  return (
    <>
      <div>
      {
        displayCompressed ? 
        <div id='sidebar' className="sidebarCompressed">
          <LeftSidebarButton title="Principal" url="/"/>
          <LeftSidebarButton title="Shorts" url="/"/>
          <LeftSidebarButton title="Suscripciones" url="/"/>
          <LeftSidebarButton title="Biblioteca" url="/"/>
        </div>
      :
        <div id='sidebar' className="sidebarExpanded">
          <LeftSidebarButton title="Principal" expanded={true} url="/"/>
          <LeftSidebarButton title="Shorts" expanded={true} url="/"/>
          <LeftSidebarButton title="Suscripciones" expanded={true} url="/"/>
          <LeftSidebarButton title="Library" expanded={true} url="/"/>
          <LeftSidebarButton title="History" expanded={true} url="/"/>
          <LeftSidebarButton title="Watch later" expanded={true} url="/"/>
      </div>
      }
    </div>
    </>
  )
};

export default Sidebar;