import React from "react";
import NavLinks from "./NavLinks";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col items-center py-4">
      {links.map((ele, index) => (
        <li key={index}>
          <NavLinks target={ele.target} title={ele.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;


// import React from "react";
// import NavLink from "./NavLinks";

// const MenuOverlay = ({ links, href }) => {
//   return (
//     <ul className="flex flex-col items-center py-4">
//       {links.map((ele, index) => (
//         <li key={index}>
//           <NavLink href={ele.href} title={ele.title} />
//         </li>
//       ))}
//       {/* <a href={href} target="_blank" rel="noopener noreferrer">
//         <button className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
//           Certification Drive
//         </button>
//       </a> */}
//     </ul>
//   );
// };

// export default MenuOverlay;
