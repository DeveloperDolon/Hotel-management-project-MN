import { Link } from "react-router-dom";


const SingUp = () => {
    return (
        <div className="flex items-center justify-center min-h-screen lg:px-0 md:px-5 sm:px-3 px-2 bg-[#F1F2F4]">
            <div className="max-w-2xl block mx-auto flex-1 md:p-8 rounded-lg shadow-slate-300 shadow-lg  p-5 bg-white my-20">
                <div className="flex justify-center items-center">
                    <h1 className="md:text-3xl text-xl font-bold border-b-2 border-black py-3 pt-1">Sing Up</h1>
                </div>

                <form className="mt-6">
                    <label htmlFor=""> <span className="md:text-base relative text-sm font-medium block pb-1">Name*</span>
                        <div className="relative">
                            <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="email" name="" id="" placeholder="Email" />
                        </div>
                    </label>
                    <br />
                    <label htmlFor=""> <span className="md:text-base relative text-sm font-medium block pb-1">Contact Number*</span>
                        <div className="relative">
                            <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="email" name="" id="" placeholder="Email" />
                        </div>
                    </label>
                    <br />
                    <label htmlFor=""> <span className="md:text-base relative text-sm font-medium block pb-1">Gender*</span>
                        <div className="relative">
                            <select className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm text-gray-600" name="" id="">
                                <option disabled={true} selected className="" value="">Gender</option>
                                <option value=""></option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                    </label>
                    <br />
                    <label htmlFor=""> <span className="md:text-base relative text-sm font-medium block pb-1">Email*</span>
                        <div className="relative">
                            <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="email" name="" id="" placeholder="Email" />
                        </div>
                    </label>
                    <br />
                    <label htmlFor=""> <span className="md:text-base relative text-sm font-medium block pb-1">Image Upload*</span>
                        <div className="relative">
                            <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="file" name="" id="" placeholder="" />
                        </div>
                    </label>
                    <br />
                    <label htmlFor=""> <span className="md:text-base relative text-sm font-medium block pb-1">Location*</span>
                        <div className="relative flex justify-between md:gap-4 sm:gap-3 gap-2">
                            <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="text" name="" id="" placeholder="Road number" /> 

                            <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="text" name="" id="" placeholder="Area" />

                             <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="text" name="" id="" placeholder="City" />
                        </div>
                    </label>
                    <br />
                    <label htmlFor=""> <span className="md:text-base relative text-sm font-medium block pb-1">Password*</span>
                        <div className="relative">
                            <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="password" name="" id="" placeholder="Password" />
                        </div>
                    </label>
                    <br />
                    <label htmlFor=""> <span className="md:text-base relative text-sm font-medium block pb-1">Re-enter password*</span>
                        <div className="relative">
                            <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="password" name="" id="" placeholder="Re-enter password" />
                        </div>
                    </label>
                    <br />

                    <div>
                        <Link className="md:text-sm text-xs text-[#F15614] block pb-2 underline">Read our policy</Link>

                        <label htmlFor="" className="md:text-sm text-xs flex items-center gap-2" id="remembr-check" >
                            <input className="accent-[#F15614] md:w-4 md:h-4 w-3 h-3" type="checkbox" name="" id="" /> I agree with the <Link className="text-[#F15614] underline">Terms and Condition</Link>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SingUp;