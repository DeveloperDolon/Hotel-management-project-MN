import NavBar from "./NavBar";
import bannerImg from "../assets/banner-img.png";
import { useForm } from "react-hook-form";
import "./style.css";


const Banner = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (e) =>{
        console.log(e)
      }

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
                        <form onSubmit={handleSubmit(onSubmit)} style={{  boxShadow: "inset 0px .5px 20px 0px rgba(255, 255, 255, 1)"}} className="backdrop-blur-sm rounded-xl shadow-white py-5 px-6 space-y-5">
                            <div>
                                <label htmlFor=""> <span className="pb-1 block text-white">Find a room</span>
                                    <select {...register("room_name", { required: true })} className="w-full md:text-base text-sm md:py-3 py-2 md:px-5 px-3 bg-white rounded-lg" name="rooms-select" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    {errors.room_name && <span className="md:text-sm text-xs text-red-500">This field is required</span>}
                                </label>
                            </div>

                            <div className="flex justify-between gap-5">
                                <label htmlFor=""><span className="pb-1 block text-white md:text-sm text-xs">Check In</span>
                                    <input {...register("check_in", { required: true })} className="md:text-base text-sm md:py-3 py-2 bg-white md:px-3 px-2 rounded-lg" type="date" name="check-in" id="" />
                                    <br />
                                    {errors.check_in && <span className=" text-red-500 md:text-sm text-xs">This field is required</span>}
                                </label>
                                <label htmlFor=""><span className="pb-1 block text-white md:text-sm text-xs">Check Out</span>
                                    <input className="md:text-base text-sm md:py-3 py-2 md:px-3 px-2 bg-white rounded-lg" {...register("check_out", { required: true })} type="date" name="check-out" id="" />
                                    <br />
                                    {errors.check_out && <span className="md:text-sm text-xs text-red-500">This field is required</span>}
                                </label>
                            </div>

                            <div>
                                <label htmlFor="">
                                    <select className="md:text-base text-sm md:py-3 py-2 bg-white w-full md:px-5 px-3 rounded-lg" {...register("guest_count", { required: true })} name="guest-count" id="">
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                    {errors.guest_count && <span className=" md:text-sm text-xs text-red-500">This field is required</span>}
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