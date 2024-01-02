import { useEffect, useRef } from 'react'
import bannerImage from '../assets/WhatsApp Image 2023-12-30 at 09.34.55_8da654b8.jpg'
import bannerBackground from '../assets/banner_wallpaper.svg'
import Typed from 'typed.js'
const Banner = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FullStack Developer", "Frontend Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  },[])
  return (
    <div style={
      {
        backgroundImage:`url(${bannerBackground})`,
        backgroundSize:'cover',
      }
    } className="main-container h-full flex items-center">
      <div className="text-white w-full 
      " style={{display:"flex" ,justifyContent:'center'}} >
        <div className='w-2/3 space-y-3 ms-10'>
          <h3 className='text-3xl font-semibold'>Hi, I am </h3>
          <h1 className='text-5xl font-bold'>Sayan  Das</h1>
          <h2 className='text-3xl'>I am <span className='font-bold' ref={el}>Fullstack Developer</span> </h2>
          <p className=''>Lorem ipsum, also known as lipsum, is a dummy text that is used in web design, typography, and printing. It is also known as placeholder or filler text. The text is used to emphasize design elements over content.
          </p> 
          <div className='icons-container flex space-x-5'>
            <a className='hover:bg-orange-700 cursor-pointer px-2 py-1 w-13 h-13 rounded-full bg-gray-700 flex justify-center'>
            <i className="fa-brands text-4xl fa-facebook"></i>
            </a>
            <a className='hover:bg-orange-700 cursor-pointer px-2 py-1 w-13 h-13 rounded-full bg-gray-700 flex justify-center'>
            <i className="fa-brands text-4xl fa-instagram"></i>
            </a>
            <a className='hover:bg-orange-700 cursor-pointer px-2 py-1 w-13 h-13 rounded-full bg-gray-700 flex justify-center'>
            <i className="fa-brands text-4xl fa-linkedin"></i>
            </a>
            <a className='hover:bg-orange-700 cursor-pointer px-2 py-1 w-13 h-13 rounded-full bg-gray-700 flex justify-center'>
            <i className="fa-brands text-4xl fa-github"></i>
            </a>
          
  
          </div> 
          <br/>
          <a className='text-xl px-3 py-2 bg-orange-500 rounded-full shadow-lg ' href="/contact">Contact Me </a>
        </div>
      </div>
       
      <div className='w-full py-2 flex justify-center '>
        <img className='rounded-full w-5/12' src={bannerImage} alt='' />
      </div>
    </div>
  )
}

export default Banner;