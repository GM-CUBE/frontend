import { useState, useEffect } from "react";
import PageTemplate from "@assets/PageTemplate";
import { useAPI } from "hooks/useAPI";
import { useSessionContext } from "hooks/useSessionContext";
import { useParams } from "react-router-dom";



const Learn = () => {
     const { get } = useAPI();
     const [paragraph, setParagraph] = useState<any[]>([]); 
     const [example, setExample] = useState<any[]>([]); 
     
     const context = useSessionContext()

     const level_id = useParams()
     
     console.log(level_id.level_id);
     

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const user = context.user
                    if (user !== null){
                         const response = await get(`lesson/${user.id}`, context.token);
                         const newParagraph = response.paragraph; 
                         setParagraph(newParagraph);
                         
                         const newExample = response.example; 
                         setExample(newExample);
                    }
               } 
               catch (error) {
                    console.error('Error al obtener los datos:', error);
               }
          };
          
          fetchData();
     }, []); 

     return (
          <PageTemplate>
               <div className="m-[3%]">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#EEEEEE] text-center">Exercise</h1>
                    <div>
                         {paragraph.map((sentence, index) => {
                              if (level_id.level_id == sentence.level_id){
                                   
                                   return(
                                        <div key={index} className="">
                                             <p className="text-[#EEEEEE]">{sentence.information}</p>
                                             <p className="text-[#76ABAE]">{example[index].information}</p>
                                        </div>
                                   )
                              }
                         })}
                    </div>
               </div>    
          </PageTemplate>
     );
}

export default Learn;
