import { useState } from "react";
import {logo,menu,close} from "../assets";
import {navLinks} from "../constants";

const Navbar = () => {

  const [toggle,setToggle] = useState(false);
  const [active,setActive] = useState("home");

  return (
    <nav className="flex justify-between items-center py-6">
      <img className="w-[118px] h-8" src={logo} alt="hoobank" />

      {/* mobile */}
      <div className="sm:hidden">
        <img className="w-7 h-7 cursor-pointer" src={toggle ? close : menu} onClick={() => setToggle(t => !t)} alt="menu" />
        <ul className={`${toggle ? "block" : "hidden"}  absolute top-20 right-4 min-w-[140px] space-y-4 p-6 rounded-lg bg-black-gradient sidebar`}>
          {navLinks.map(navLink => (
            <li className={`${active === navLink.id ? "text-white" : "text-dimWhite"}`} key={navLink.id}>
              <a onClick={() => setActive(navLink.id)} href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* desktop */}
      <ul className="hidden sm:flex gap-14">
          {navLinks.map(navLink => (
            <li className={`${active === navLink.id ? "text-white" : "text-dimWhite"}`} key={navLink.id}>
              <a onClick={() => setActive(navLink.id)} href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Navbar