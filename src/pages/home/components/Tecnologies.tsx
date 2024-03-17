import PythonLogo from '@assets/logos/python-logo-only.svg'
import ReactLogo from '@assets/logos/react.svg'
import FlaskLogo from '@assets/logos/flask.svg'
import PostgresqlLogo from '@assets/logos/postgresql.svg'
import ViteLogo from '@assets/logos/vite.svg'
import DockerLogo from '@assets/logos/docker.svg'
import TailwindLogo from '@assets/logos/tailwind.svg'
import TSLogo from '@assets/logos/typescript.svg'
import FontawesomeLogo from '@assets/logos/font-awesome.svg'

const Tecnologies = () => {
     const technologies = [
          { name: 'Docker', imageUrl: DockerLogo },
          { name: 'Flask', imageUrl: FlaskLogo },
          { name: 'Fontawesome icons', imageUrl: FontawesomeLogo },
          { name: 'PostgreSQL', imageUrl: PostgresqlLogo },
          { name: 'Python', imageUrl: PythonLogo },
          { name: 'React', imageUrl: ReactLogo },
          { name: 'Vite', imageUrl: ViteLogo },
          { name: 'Tailwind', imageUrl: TailwindLogo },
          { name: 'TypeScript', imageUrl: TSLogo },
     ];
 
     return (
          <div className="text-gray-600 body-font mx-[3%] mb-[20%]">
               <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#EEEEEE]">Tecnologies</h2>
               <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                    {technologies.map((tech, index) => (
                         <div key={index} className="p-4 sm:w-1/4 w-1/2">
                              <img alt="testimonial" className="w-20 h-20 mb-8  inline-block" src={tech.imageUrl} />
                              <p className="leading-relaxed text-[#76ABAE] font-bold">{tech.name}</p>
                         </div>
                    ))}
                    </div>
               </div>
          </div>
     );
 }


export default Tecnologies