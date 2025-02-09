import Navbar from "./Navbar";
import video from '../assets/Video.mp4'
import { Link } from "react-router";


function Home(){
    return(
        <>
        <div className = "bg-black h-[100vh] scrollbar-thumb-blue-600 scrollbar-track-gray-800">
            <Navbar />
            <div className = "flex flex-row w-[100vw]">
                <div className = "w-[50%] h-[80vh] flex flex-col pl-50 gap-10 justify-center" id = "left">
                    <h1 className = "text-[#0D00FF] text-7xl font-extrabold"><Link to = "/about">FinSync</Link></h1>

                    <p className = "text-[#EBE9FC] text-2xl font-[500]"><span className = "text-[#2ABE10]">Secure</span>. <span className = "text-[#]">Track</span>. <span className = "text-[#C20010]">Manage</span>. </p>

                    <p className = "text-[#EBE9FC] font-[700] text-[24px]">Your <span className = "text-[#C20010]">Money</span>, Your <span className = "text-[#2ABE10]">Control</span>.</p>

                    <div className = "flex-row">

                        <Link to = "/account"><button className = "bg-[#0D00FF] text-white p-2 px-4 mr-20 rounded-[5px] font-[500] cursor-pointer hover:bg-white hover:text-[#0D00FF] transition-all ease-in-out duration-450">Go to the account</button></Link>


                        <Link to = "/about"><button className = "bg-white text-[#0D00FF] p-2 px-4 mr-20 rounded-[5px] font-[500] cursor-pointer hover:bg-[#0D00FF] hover:text-white transition-all ease-in-out duration-450">About Us</button></Link>
                    </div>
                </div>

                <div className = "w-[50%] h-[80vh] flex justify-center items-center" id = "right">
                    <video className = "h-90 rounded-[20px]" autoPlay loop muted>
                        <source src = {video}/>
                    </video>
                </div>
            </div>
            <div className ="h-auto">
                <p className = "text-gray-600 text-center text-[14px] mt-[20px]">Designed and developed by Pratyush Nayak</p>
            </div>
        </div>
        </>
    )
}

export default Home ; 