import logo from "../assets/logo.png";

const NavBar = () => {

    return (
        <div className="bg-none z-30 relative">
           <nav className="flex justify-between max-w-7xl mx-auto py-5">
            <div>
                <img className="md:w-32 w-20 border-2 rounded-lg border-white p-2 bg-[#0210267F]" src={logo} alt="" />
            </div>

            <ul className="flex gap-10 text-white items-center">
                <li>Find Room</li>
                <li>Package</li>
                <li>Dining</li>
                <li>Gallery</li>
                <li>Contact Us</li>
                <li className="ml-4"><button className="px-3 rounded-lg py-[7px] bg-blue-500 text-white">Login</button></li>
            </ul>
           </nav>
        </div>
    );
};

export default NavBar;