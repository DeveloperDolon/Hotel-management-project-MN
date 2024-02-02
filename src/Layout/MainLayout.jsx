import NavBar from "../components/NavBar";
import bannerImg from "../assets/banner-img.png";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="">
            <div  className="w-full min-h-screen bg-cover relative" style={{
            background: `url("${bannerImg}")`
            }}>
                <div className="overlay"></div>
                <NavBar></NavBar>            
            </div>


            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayout;