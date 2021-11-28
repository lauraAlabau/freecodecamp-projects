import React, { useState, useRef, useEffect } from "react";


import NavbarLinks from "./NavbarLinks";
import NavbarSocial from "./NavbarSocial";
import NavbarToogle from "./NavbarToogle";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <NavbarToogle toggleLinks={toggleLinks}/>
        <NavbarLinks linksContainerRef={linksContainerRef} linksRef={linksRef}/>
        <NavbarSocial />
      </div>
    </nav>
  );
};

export default Navbar;
