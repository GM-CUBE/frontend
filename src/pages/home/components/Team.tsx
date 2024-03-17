import iñigo from '@assets/fotos/Iñigo.jpg';

const Team = () => {
    const teamMembers = [
        { name: 'CARLOS ANDRÉS CANCINO ESCOBAR', imageUrl: 'https://dummyimage.com/302x302' },
        { name: 'JUAN PABLO GÓMEZ HARO CABRERA', imageUrl: 'https://dummyimage.com/300x300' },
        { name: 'IÑIGO QUINTANA DELGAILLO', imageUrl: iñigo }
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
                                <a className="ml-3 text-[#EEEEEE]">
                                   <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                   </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
