import Photo from '@assets/fotos/technology.jpg'

const Taskflow = () => {
    const steps = [
        { icon: '', title: 'Landing Page', description: 'When accessing the page you arrive at the Landing page' },
        { icon: '', title: 'Log in / Sign up', description: 'If you do not have an account you must go to Login, and if you have Sign up' },
        { icon: '', title: 'Learn', description: 'Once you have an account you can access the learning lessons according to your level.' },
        { icon: '', title: 'Play', description: 'You can also access games to practice your knowledge while playing against someone else.' },
        { icon: '', title: 'Repeat', description: 'Repeat the learning lessons and games as many times as you like.' },
        { icon: '', title: 'End', description: '' },
    ];

    return (
        <section className="text-gray-600 body-font mx-[3%] mb-[20%]">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#EEEEEE]">Taskflow</h2>
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap w-full">
                    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex relative pb-10">
                              {index !== steps.length -1 && (
                                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                </div>
                              )}
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#35575A] inline-flex items-center justify-center text-white relative z-10">
                                    {step.icon}
                                </div>
                                <div className="flex-grow pl-4">
                                    <h2 className="font-medium title-font text-lg text-[#76ABAE] mb-1 tracking-wider">{step.title}</h2>
                                    <p className="leading-relaxed text-[#EEEEEE]">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <img className="lg:w-3/5 md:w-1/4 object-cover object-center rounded-lg md:mt-0 mt-12 p-10" src={Photo} alt="step" />
                </div>
            </div>
        </section>
    );
}

export default Taskflow;
