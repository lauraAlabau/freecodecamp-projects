import React from 'react'
import { links } from "../../data";

const NavbarLinks = ({linksContainerRef, linksRef}) => {
    return (
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
    )
}

export default NavbarLinks
