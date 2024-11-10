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
    path: "/newsArticle",
    display: "News And Articles",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
 
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

            <div className="">
              {
                token ? <div className="flex items-center gap-2 cursor-pointer group relative">
                  <img className="w-9 rounded-full " src={assets.profile_pic} alt="" />
                  <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                  <div className="absolute top-0 right-0 pt-14 text-base font-medium z-20 hidden group-hover:block text-gray-600  ">
                    <div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4">
                      <p onClick={()=> navigate('my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                      <p onClick={()=> navigate('my-appointment')} className="hover:text-black cursor-pointer">My Appointments</p>
                      <p onClick={()=>setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                    </div>
                  </div>
                </div>
                : <button onClick={()=> navigate('/login')} className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Create Account
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
