import { useState } from "react";

const Services = () => {
    // eslint-disable-next-line no-unused-vars
    const [service , setService ] = useState([
        {
            id:1,
            title:"Web Development",
            desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
            pariatur commodi sunt nulla hic animi cumque voluptatum inventore
            consequatur.`,
            actionButton:{
                title:"Check",
                link:""
            }
        },
        {
            id:1,
            title:"React Projects",
            desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
            pariatur commodi sunt nulla hic animi cumque voluptatum inventore
            consequatur.`,
            actionButton:{
                title:"Check",
                link:""
            }

        }
    ])
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Projects
        </h1>
        <div className="service-container space-x-4 px-5 flex mt-12">
          <div className="services hover:bg-gray-100 bg-slate-200 text-center shadow-lg rounded-xl  space-y-4 p-2">
          <i className="mt-3 text-5xl fa-brands fa-aws"></i>
            <h1 className="text-4xl ">{service[0].title}</h1>
            <p>
              {service[0].desc}
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">
            {service[0].actionButton.title}
            </button>
          </div>
          <div className=" bg-slate-200 text-center shadow-lg rounded-xl space-y-4 p-2  hover:bg-gray-100">
          <i className="mt-3 text-5xl fa-brands fa-react"></i>
            <h1 className="text-4xl ">{service[1].title}</h1>
            <p>
              {service[1].desc}
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">
            {service[1].actionButton.title}
            </button>
          </div>
          <div className=" bg-slate-200 text-center shadow-lg rounded-xl space-y-4 p-2  hover:bg-gray-100">
          <i className="mt-3 text-5xl fa-brands fa-laravel"></i>
            <h1 className="text-4xl ">Backend Projects</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
              pariatur commodi sunt nulla hic animi cumque voluptatum inventore
              consequatur.
            </p>
            <button className="px-3 py-2 bg-orange-500 rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Services;
