import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo1.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import userImg from "../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";
import { assets } from "../assets/assets_frontend/assets";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/aiChatbot",
    display: "AI Chatbot",
  },
  {
    path: "/aboutUs",
    display: "About US",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  
 
];

const Header = () => {

    const handleNavigate = () => {
      // Open the admin dashboard in a new tab
      window.open('http://localhost:5174/', '_blank');
    };
  
 
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
 
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };
  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });
    const toggleMenu =()=> menuRef.current.classList.toggle('show__menu')
  return (
    <header className="header flex items-center " ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="" className="h-20"/>
          </div>
        {/* ========================Menu============ */}

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-6 font-[600] "
                        : "text-textColor text-[16px] leading-7 font-[500]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-s-full ">
                  <img src={userImg} alt="" />
                </figure>
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs ">
        <img
          src={assets.logo1}
          alt=""
          className="w-36 sm:w-40 cursor-pointer "
        />
        <p onClick={handleNavigate} className=" cursor-pointer border px-2.5 py-0.5 rounded-full text-gray-600 border-gray-500  ">
          Admin
        </p>
      </div>

            <div className="">
              {
                // <div className="flex items-center gap-2 cursor-pointer group relative">
                //   <img className="w-9 rounded-full " src={assets.profile_pic} alt="" />
                //   <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                //   <div className="absolute top-0 right-0 pt-14 text-base font-medium z-20 hidden group-hover:block text-gray-600  ">
                //     <div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4">
                //       <p onClick={()=> navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                //       <p onClick={()=> navigate('/user-dashboard')} className="hover:text-black cursor-pointer">My Dashboard</p>
                //       <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                //     </div>
                //   </div>
                // </div>

                 <button onClick={()=> navigate('/login')} className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Log In
              </button>
              }
            </div>
           
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
