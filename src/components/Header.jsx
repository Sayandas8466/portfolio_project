import { useState } from "react";

const Header = () => {

     const [brandName , setBrandName ]=useState('Sayan Das');
     const [menuLinks , setMenuLinks]=useState([
        {
            title:'Home',
            link:'/home',
            id:1
        },
        {
            title:'About',
            link:'/about',
            id:2
        },
        {
            title:'Skills',
            link:'/skills',
            id:3
        },
        {
            title:'Portfolio',
            link:'/portfolio',
            id:4
        },
        {
            title:'Contact',
            link:'/contact',
            id:1
        },
     ])
     const [hireButton , setHireButton] = useState({
        title:'Hire me',
        link: '/link'
     })

  return (
    <>
      <div className="h-20 main flex justify-between items-center px-16 bg-gray-300">
        <div className="">
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <div className="space-x-6">
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
            {link.title}
          </a>
          ))}
          {/* <a href="/about" className="hover:text-orange-600">
            About
          </a>
          <a href="/skills" className="hover:text-orange-600">
            Skills
          </a>
          <a href="/portfolio" className="hover:text-orange-600">
            Portfolio
          </a>
          <a href="/contact" className="hover:text-orange-600">
            Contact
          </a> */}
        </div>
        <div className="">
          <a href={hireButton.link} className="px-4 text-xl bg-orange-500 rounded-full py-1">{hireButton.title}</a>
        </div>
      </div>
    </>
  );
};

export default Header;
