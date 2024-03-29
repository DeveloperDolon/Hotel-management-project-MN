import { Link } from "react-router-dom";
import "./style.css";
import { CiLock } from "react-icons/ci";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useState } from "react";

const LoginPage = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen lg:px-0 md:px-5 sm:px-3 px-2 bg-[#F1F2F4]">
            <div className="max-w-2xl block mx-auto flex-1 md:p-8 rounded-lg shadow-slate-300 shadow-lg  p-5 md:pb-4 pb-3 bg-white my-20">

                <div className="flex justify-center items-center">
                    <h1 className="md:text-3xl text-xl font-bold border-b-2 border-black py-3 pt-1">Login With</h1>
                </div>

                <div>
                    <p className="md:text-base text-sm text-center pt-4">
                        Login fast with Facebook or Google
                    </p>

                    <div className="flex justify-center items-center gap-5 mt-3">

                        <button>
                            <svg className="md:w-[52px] w-[45px] md:h-[52px] h-[45px] rounded-full" width="55" height="60" viewBox="0 0 55 60" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <rect width="55" height="60" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_50_616" transform="matrix(0.00785543 0 0 0.00720081 -0.00480291 0.0391481)" />
                                    </pattern>
                                    <image id="image0_50_616" width="128" height="128" xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </button>

                        <button>
                            <svg className="md:w-12 w-10 md:h-12 h-10" xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                        </button>
                    </div>

                    <p className="border-black text-center pt-2 border-b w-fit mx-auto">
                        OR
                    </p>
                </div>

                <form className="mt-5">
                    <label htmlFor=""> <span className="md:text-base relative text-sm font-medium block pb-1">Email*</span>
                        <div className="relative">
                            <input className="w-full border md:py-3 py-2  md:px-4 px-3 rounded-lg md:text-base text-sm" type="email" name="" id="" placeholder="Email" />
                        </div>
                    </label>
                    <br />
                    <label className="block md:mt-4 sm:mt-3 mt-2" htmlFor=""> <span className="md:text-base text-sm font-medium block pb-1">Password*</span>
                        <div className="relative">
                            <input className="w-full border md:py-3 py-2 md:px-10 px-8 rounded-lg md:text-base text-sm md:pl-12 pl-10" placeholder="Type your password" type={show ? "text" : "password"} />
                            <CiLock className="absolute md:text-2xl left-3 text-lg top-[27%] "></CiLock>
                            <div className="absolute right-5 top-[27%]">
                                <IoEye onClick={() => setShow(!show)} className={`md:text-2xl text-lg ${show ? "" : "hidden"}`}></IoEye>
                                <IoEyeOff onClick={() => setShow(!show)} className={`md:text-2xl text-lg ${show ? "hidden" : ""}`}></IoEyeOff>
                            </div>
                        </div>
                    </label>

                    <div className="flex justify-between items-center py-4 px-3">
                        <label htmlFor="" className="md:text-sm text-xs flex items-center gap-2" id="remembr-check" >
                            <input className="accent-[#F15614] md:w-5 md:h-5 w-4 h-4" type="checkbox" name="" id="" /> Remember me.
                        </label>

                        <a className="block md:text-sm text-xs underline font-medium">
                            Forget password?
                        </a>
                    </div>

                    <button className="block w-full bg-[#F15614] md:text-xl md:mt-5 mt-3 sm:text-lg text-base font-semibold text-white py-2 rounded-lg">Login</button>
                </form>

                <div>
                    <p className="md:text-lg text-base text-center py-2 mt-4">Not a member? <Link to={"/sign-up"} className="text-blue-400">Sing Up Now</Link></p>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;