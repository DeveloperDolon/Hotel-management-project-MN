import NavBar from "../components/NavBar";
import bannerImg from "../assets/banner-img.png";

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
                
            </section>
        </div>
    );
};

export default MainLayout;