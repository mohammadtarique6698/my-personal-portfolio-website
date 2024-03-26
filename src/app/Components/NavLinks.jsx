//import Link from "next/link";
import {Link} from "react-scroll"
const NavLinks = ({ target, title }) => {
  return (
    <Link
      to={target}
      smooth={true}
      duration={500}
      spy={true}
      offset={-50}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLinks;
