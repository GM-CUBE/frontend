import PageTemplate from "@assets/PageTemplate";
import PythonLogo from '@assets/logos/python-logo-only.svg'
import About from "./components/About ";
import Team from "./components/Team";
import Tecnologies from "./components/Tecnologies";

const Home = () => {
    return (
        <PageTemplate>
           <div className="min-h-screen">
                <section className="text-gray-600 body-font mt-[10%] mx-5 mb-[27%]">
                    <div className="container my-auto mx-auto flex md:flex-row flex-col items-center justify-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0  items-center">
                            <img className="object-cover object-center rounded w-[45%]" alt="python logo" src={PythonLogo}/>
                        </div>

                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#f6c90e]">Code, Compete, Conquer: 
                                <br className="hidden lg:inline-block "/> Python mastery awaits!
                            </h1>

                            <p className="mb-8 leading-relaxed text-lg w-[75%] text-[#EEEEEE]">
                                Improve  your Python coding skills by competing in real-time! Exciting challenges, direct competition, and constant improvement await you. 
                                Ready for the challenge?
                            </p>

                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-[#76ABAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#35575A] rounded text-lg">
                                    Start coding
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-9 h-7 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                
                        </div>
                    </div>
                </section>
                
                <About />
                <Tecnologies />
                <Team />
                
            </div>
        </PageTemplate>
    );
}

export default Home;