import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {openCloseFunc} from "../redux/features/toggleBar/toggleBarSlice.js";
import {useSelector, useDispatch} from "react-redux";

const NavBar = () => {
    const navItems = <>
        <li className="hover:bg-gray-200">
            <NavLink to={"/package"}>Package</NavLink>
        </li>
        <li className="hover:bg-gray-200">
            <NavLink to={"/dining"}>Dining</NavLink>
        </li>
        <li className="hover:bg-gray-200">
            <NavLink to={"/gallery"}>Gallery</NavLink>
        </li>
        <li className="hover:bg-gray-200">
            <NavLink to={"/contact-us"}>Contact Us </NavLink>
        </li>
    </>;

    const {isOpen} = useSelector((state) => state.isOpen);
    const dispatch = useDispatch();

    return (
        <div className="bg-none z-30 relative lg:px-0 md:px-5 sm:px-3 px-2 max-w-7xl mx-auto">
            <nav className="flex justify-between max-w-7xl mx-auto items-center py-5">
                <div>
                    <img className="md:w-32 w-20 border-2 rounded-lg border-white p-2 bg-[#0210267F]" src={logo} alt="" />
                </div>

                <div className="text-white sm:text-3xl text-xl md:hidden block relative">
                    <button onClick={() => dispatch(openCloseFunc())}><FaBars></FaBars></button>

                    <div className={`sm:text-base absolute overflow-hidden sm:top-8 top-6 right-1 text-sm bg-white p-6 rounded-lg text-black duration-300 transition-all ${isOpen ? "h-auto w-auto p-6" : "h-0 w-0 p-0"}`}>
                        <ul className="list-none space-y-2 text-nowrap">
                            {navItems}
                        </ul>
                    </div>
                </div>

                <ul className={`md:flex hidden md:gap-10 sm:gap-7 gap-5 text-white items-center md:text-base text-xs`}>
                    {/* <li><NavLink>Find Room</NavLink></li> */}
                    {navItems}
                    <li className="ml-4">
                        <button className="md:px-3 px-2 font-medium rounded-lg md:py-[7px] md:text-base sm:text-sm text-xs py-1 bg-blue-500 text-white">Login</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;