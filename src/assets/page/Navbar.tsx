import { useNavigate } from "react-router-dom";
import { router } from "router";

const NavBar = () => {

     const navigate = useNavigate()

    return(
         <header className="text-gray-600 body-font h-24">
              <div className="container mx-auto flex flex-wrap pt-5 flex-col md:flex-row items-center">
                   <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-3xl text-[#f6c90e]">Tailblocks</span>
                   </a>
                   <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center text-[#EEEEEE]">
                        <a className="mr-5 hover:text-gray-500 text-2xl"
                        onClick={() => {navigate('/')}}>Home</a>
                        <a className="mr-5 hover:text-gray-500 text-2xl">Learn</a>
                        <a className="mr-5 hover:text-gray-500 text-2xl">Play</a>
                   </nav>

                   <button className="inline-flex items-center text-white bg-[#76ABAE] border-0 py-1 px-5 focus:outline-none hover:bg-[#35575A] rounded mt-4 md:mt-0 mr-2 text-xl"
                   onClick={() => {navigate('/login')}}>
                        Log in
                   </button>

                   <button className="inline-flex items-center bg-[#EEEEEE] border-0 py-1 px-3 focus:outline-none hover:bg-[#7A7A7A] hover:text-[#EEEEEE] rounded mt-4 md:mt-0 text-xl"
                   onClick={() => {navigate('/signup')}}>
                        Sign up
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                             <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                   </button>

              </div>
         </header>

    );
}

export default NavBar;
