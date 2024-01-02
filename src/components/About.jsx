import { useState } from 'react'
import bannerImage from '../assets/WhatsApp Image 2024-01-02 at 12.13.53_a813eb69.jpg'
const About = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState({
        image:bannerImage,
        title1: "Graduated In B.tech| ECE | 2023",
        title2: "From Future Institue Of Engineering And Management",
        desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta perferendis sequi adipisci consequuntur, ab, corrupti omnis molestiae ducimus impedit quasi nisi similique ea beatae ipsam consequatur libero maiores eligendi laborum!`,
        actionButton:{
            title:"Read More..",
            link:"/readmore"
        }
    })
    return (
        <>
            <div className="main-container bg-gray-100 py-16">
                <h1 className="text-5xl pb-16 font-bold underline text-center">About Me</h1>
                <div className="flex items-center ">
                    <div className="w-full flex justify-center">
                        <img className='w-6/12 rounded-full
                    ' src={data.image} alt="Sayan Das" />
                    </div>
                    <div className="w-full flex justify-center">
                        <div className='space-y-5 w-2/3 '>
                            <h1 className='text-5xl  font-semibold'>{data.title1} </h1>
                            <h3 className='text-2xl'>{data.title2} </h3>
                            <p>{data.desc}</p>
                            <button href={data.actionButton.link} className=' cursor-pointer bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'>{data.actionButton.title}</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default About