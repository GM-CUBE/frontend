import PageTemplate from "@assets/PageTemplate";

const Learn = () => {

     const lessons = [
          {category: 'BRONCE', title: 'Print', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'},
          {category: 'BRONCE', title: 'Variables', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'},
          {category: 'Gold', title: 'Graphs', description: 'Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.'},
     ]

     return (
          <PageTemplate>
               <div className="text-gray-600 body-font">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#EEEEEE] text-center">Learn activities</h1> 
                    <div className="container px-5 py-20 mx-auto">
                         <div className="flex flex-wrap -m-4">
                              {lessons.map((activity, index) => (
                                   <div key={index}className="p-3 lg:w-1/3">
                                        <div className="h-full bg-[#EEEEEE] bg-opacity-60 px-8 pt-12 pb-16 rounded-xl overflow-hidden text-center relative">
                                             <h2 className="tracking-widest text-sm title-font font-medium mb-1">{activity.category}</h2>
                                             <h1 className="title-font sm:text-2xl text-xl text-gray-900 mb-3 font-bold">{activity.title}</h1>
                                             <p className="leading-relaxed mb-3">{activity.description}</p>
                                             <a href='' className="text-[#222831] inline-flex items-center">Learn More
                                                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                  <path d="M5 12h14"></path>
                                                  <path d="M12 5l7 7-7 7"></path>
                                             </svg>
                                        </a>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>     
          </PageTemplate>
     )

}

export default Learn