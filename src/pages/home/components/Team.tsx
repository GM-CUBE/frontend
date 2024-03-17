import iñigo from '@assets/fotos/Iñigo.jpg';
import juanPablo from '@assets/fotos/JP.jpeg'

const Team = () => {
     const teamMembers = [
          { name: 'CARLOS ANDRÉS CANCINO ESCOBAR', imageUrl: 'https://dummyimage.com/302x302'},
          { name: 'JUAN PABLO GÓMEZ HARO CABRERA', imageUrl: juanPablo},
          { name: 'IÑIGO QUINTANA DELGAILLO', imageUrl: iñigo}
     ];

     return (
          <section className="text-gray-600 body-font m-[3%]">
               <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#EEEEEE] ">Working Team</h2>
               <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                    {teamMembers.map((member, index) => (
                         <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                              <div className="h-full text-center">
                                   <img alt="testimonial" className="w-24 h-24 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200" src={member.imageUrl} />
                                   <br />
                                   <span className="inline-block h-1 w-10 rounded bg-[#f6c90e] mb-4" />
                                   <h2 className="text-[#76ABAE] font-medium title-font tracking-wider">{member.name}</h2>
                              </div>
                         </div>
                         ))}
                    </div>
               </div>
          </section>
     );
}

export default Team;
