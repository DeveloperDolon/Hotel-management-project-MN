import NavBar from "./NavBar";
import bannerImg from "../assets/banner-img.png";
import { useForm } from "react-hook-form";
import "./style.css";


const Banner = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

    return (
        <div className="">
            <div className="w-full min-h-screen bg-cover relative overflow-hidden box-border md:pb-0 pb-9" style={{
                background: `url("${bannerImg}")`
            }}>
                <div className="overlay"></div>

                <NavBar></NavBar>
                
                <div className="max-w-7xl mx-auto relative md:h-[calc(100vh-116px)] h-auto grid md:grid-cols-2 grid-cols-1 items-center lg:px-0 md:px-5 sm:px-3 px-2">
                    <h1 className="md:text-5xl sm:text-4xl md:leading-[60px] leading-[35px] text-2xl font-bold text-white md:py-0 sm:py-5 py-3">
                        Find Most <br />
                        Luxurious Hotels Across the Globe.
                    </h1>

                    <div className="md:w-[400px] w-full overflow-hidden mx-auto md:mt-0 sm:mt-10 mt-6">
                        <form style={{  boxShadow: "inset 0px .5px 20px 0px rgba(255, 255, 255, 1)"}} className="backdrop-blur-sm rounded-xl shadow-white py-5 px-6 space-y-5">
                            <div>
                                <label htmlFor=""> <span className="pb-1 block text-white">Find a room</span>
                                    <select {...register("room-name", { required: true })} className="w-full md:text-base text-sm md:py-3 py-2 md:px-5 px-3 bg-white rounded-lg" name="rooms-select" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </label>
                            </div>

                            <div className="flex justify-between gap-5">
                                <label htmlFor=""><span className="pb-1 block text-white">Check In</span>
                                    <input {...register("check-in", { required: true })} className="md:text-base text-sm md:py-3 py-2 bg-white md:px-3 px-2 rounded-lg" type="date" name="check-in" id="" />
                                </label>
                                <label htmlFor=""><span className="pb-1 block text-white">Check Out</span>
                                    <input className="md:text-base text-sm md:py-3 py-2 md:px-3 px-2 bg-white rounded-lg" {...register("check-out", { required: true })} type="date" name="check-out" id="" />
                                </label>
                            </div>

                            <div>
                                <label htmlFor="">
                                    <select className="md:text-base text-sm md:py-3 py-2 bg-white w-full md:px-5 px-3 rounded-lg" {...register("guest count", { required: true })} name="guest-count" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </label>
                            </div>

                            <div>
                                <label id="check-box" className="text-white md:text-base text-sm font-light flex items-center" htmlFor="">
                                    <input type="checkbox" className="mr-3 md:w-5 w-3 md:h-5 h-3 accent-[#FDC463]" />
                                    Pay when check in?
                                </label>
                            </div>

                            <div className="mt-5">
                                <button type="submit" className="md:text-xl text-lg font-bold w-full rounded-lg py-3 bg-[#FDC463] text-black">Search Room</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;