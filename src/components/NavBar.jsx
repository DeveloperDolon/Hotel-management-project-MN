import logo from "../assets/logo.png";

const NavBar = () => {

    return (
        <div>
           <nav className="flex justify-between max-w-7xl mx-auto border-t">
            <div>
                <img src={logo} alt="" />
            </div>

            <ul className="flex gap-2">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li><button>aslfj</button></li>
            </ul>
           </nav>
        </div>
    );
};

export default NavBar;