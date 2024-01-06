import React from "react";
import NavLink from "./NavLinks";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((ele, index) => (
        <li key={index}>
          <NavLink href={ele.href} title={ele.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
