import logo from '../assets/Wallet.png' ; 
import { Link } from 'react-router';

function Navbar(){
    return(
        <>
        <div className = "w-[100vw] flex flex-row h-[10vh]">
            <div className = "w-[100vw] flex flex-row items-center justify-between">
                <Link to = '/' className = "flex flex-row gap-5 items-center">
                    <img src = {logo} alt=""  className = "h-[60px] ml-5 transition delay-150 duration-500 ease-in-out hover:rotate-y-[180deg] "/>

                    <h1 className = "text-3xl text-[#0D00FF] font-extrabold">FinSync</h1>
                </Link>

                <div className = "flex flex-row gap-[30px] mr-[8vw]">
                    <Link to = "/" className = "text-[#0D00FF] text-[16px] font-bold transition duration-240 ease-in-out hover:text-[#EBE9FC]">Home</Link>
                    <Link to = "/account" className = "text-[#0D00FF] text-[16px] font-bold transition duration-240 ease-in-out hover:text-[#EBE9FC]">Account</Link>
                    <Link to = "/about" className = "text-[#0D00FF] text-[16px] font-bold transition duration-240 ease-in-out hover:text-[#EBE9FC]">About</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar ; 