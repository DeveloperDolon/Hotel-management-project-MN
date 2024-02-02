import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
        <div className="bg-none z-30 relative lg:px-0 md:px-5 sm:px-3 px-2">
           <nav className="flex justify-between max-w-7xl mx-auto py-5">
            <div>
                <img className="md:w-32 w-20 border-2 rounded-lg border-white p-2 bg-[#0210267F]" src={logo} alt="" />
            </div>

            <ul className={`md:flex hidden md:gap-10 sm:gap-7 gap-5 text-white items-center md:text-base text-xs`}>
                {/* <li><NavLink>Find Room</NavLink></li> */}
                <li>
                    <NavLink to={"/package"}>Package</NavLink>
                </li>
                <li>
                    <NavLink to={"/dining"}>Dining</NavLink>
                </li>
                <li>
                    <NavLink to={"/gallery"}>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to={"/contact-us"}>Contact Us </NavLink>
                </li>
                <li className="ml-4"><button className="md:px-3 px-2 font-medium rounded-lg md:py-[7px] md:text-base sm:text-sm text-xs py-1 bg-blue-500 text-white">Login</button></li>
            </ul>
           </nav>
        </div>
    );
};

export default NavBar;