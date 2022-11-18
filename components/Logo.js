import { useContext } from "react";
import Link from "next/link";
import Search from "./Search";
import User from "./User";

import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/router";
import AppContext from "../components/AppContext";

const Logo = () => {

  const context = useContext(AppContext);

  return (
  <div className="ycHamburderLogoCantainer">
    <button
      id="btnHamburger"
      className="ycHamburgerIconContainer"
      onClick={(event) => {
        
        if(context.displaySidebar === context.SIDEBAR_DISPLAY){              
          context.setDisplaySidebar(context.SIDEBAR_COMPRESSED);
        }
        else{
          context.setDisplaySidebar(context.SIDEBAR_DISPLAY);
        }

        
        console.log("DISPLAY_SIDEBAR =", context.displaySidebar);
      }}
    >
      <img
        src="/hamburger_icon.png"
        layout={"fixed"}
        height={20}
        className="hamburger"
      />
    </button>
    <div className="ycLogoContainer">
      <Link href="/">
        <a className="ycLogoLink">
          <div className="ycLogoContent">
            <img
              src="/logo.svg"
              layout={"fixed"}
              width={90}
              height={20}
              className="ycLogoImage"
            />
          </div>
          <div className="ycLogoPartCountry">BO</div>
        </a>
      </Link>
    </div>
  </div>
  );
};

export default Logo;
