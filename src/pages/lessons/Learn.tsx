import { useState, useEffect } from "react";
import PageTemplate from "@assets/PageTemplate";
import { useAPI } from "hooks/useAPI";
import { Link } from "react-router-dom";

const Learn = () => {
     const { get } = useAPI();
     const [data, setData] = useState<any[]>([]); 

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await get('levels');
                    const newData = response.levels; 
                    setData(newData); // Actualizar el estado local con los nuevos datos
                    console.log(newData);
               } 
               catch (error) {
                    console.error('Error al obtener los datos:', error);
               }
          };
          
          fetchData();
     }, []); 

     return (
          <PageTemplate>
               <div className="body-font">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#EEEEEE] text-center">Learn activities</h1> 
                    <div className="container px-5 py-20 mx-auto">
                         <div className="flex flex-wrap -m-4">
                              {data.map((lesson, index) => (
                                   <div key={index} className="p-5 lg:w-1/3">
                                        <div className="h-full bg-[#EEEEEE] bg-opacity-60 py-6 pb-16 rounded-xl overflow-hidden text-center relative">
                                             <h1 className="title-font sm:text-2xl text-xl text-gray-900 mb-3 font-bold">{lesson.name}</h1>
                                             <Link to="/exercise" className="text-[#222831] inline-flex items-center font-bold">Learn More
                                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                       <path d="M5 12h14"></path>
                                                       <path d="M12 5l7 7-7 7"></path>
                                                  </svg>
                                             </Link>
                                             <div className="text-center leading-none absolute bottom-0 left-0 w-full py-6 text-[#F6C90E] text-base">
                                                  <span className=" mr-3 inline-flex items-center pr-3 border-r-2">
                                                      {lesson.minimumPrestige}
                                                  </span>
                                                  <span>
                                                       {lesson.maximumPrestige}
                                                  </span>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>     
          </PageTemplate>
     );
}

export default Learn;
