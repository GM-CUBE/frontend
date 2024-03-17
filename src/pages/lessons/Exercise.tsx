import { useState, useEffect } from "react";
import PageTemplate from "@assets/PageTemplate";
import { useAPI } from "hooks/useAPI";

const Learn = () => {
     const { get } = useAPI();
     const [data, setData] = useState<any[]>([]); 

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const response = await get('lesson/1');
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
               <div>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#EEEEEE] text-center">Exercise</h1>
               </div>    
          </PageTemplate>
     );
}

export default Learn;
