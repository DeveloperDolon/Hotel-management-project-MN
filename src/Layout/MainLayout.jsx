
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="">

            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MainLayout;