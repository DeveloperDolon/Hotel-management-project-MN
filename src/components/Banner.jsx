import NavBar from "./NavBar";
import bannerImg from "../assets/banner-img.png";


const Banner = () => {
    return (
        <div className="">
            <div className="w-full min-h-screen bg-cover relative" style={{
                background: `url("${bannerImg}")`
            }}>
                <div className="overlay"></div>

                <NavBar></NavBar>
                
                <div className="max-w-7xl mx-auto relative h-[calc(100vh-116px)] grid md:grid-cols-2 grid-cols-1 items-center lg:px-0 md:px-5 sm:px-3 px-2">
                    <h1 style={{lineHeight: "60px"}} className="md:text-5xl leading-7 sm:text-4xl text-2xl font-bold text-white">
                        Find Most <br />
                        Luxurious Hotels Across the Globe.
                    </h1>

                    <div>
                        <form>
                            <div>
                                <label htmlFor=""> Find a room
                                    <select name="rooms-select" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label htmlFor="">Check In
                                    <input type="date" name="check-in" id="" />
                                </label>
                                <label htmlFor="">Check Out
                                    <input type="date" name="check-out" id="" />
                                </label>
                            </div>

                            <div>
                                <label htmlFor="">
                                    <select name="guest-count" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label htmlFor=""> Pay when check in?
                                    <input type="radio" />
                                </label>
                            </div>

                            <div>
                                <button type="submit">Check In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;