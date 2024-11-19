import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets_frontend/assets.js";
import robot from '../../assets/assets_frontend/robot-head.png'
import news from '../../assets/assets_frontend/world-news.png'
import youtube from '../../assets/assets_frontend/youtube.png'

const UserSidebar = () => {
  return (
    <div className="min-h-screen bg-white border border-r">
      {
        <ul className="text-[#515151] mt-5">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
            to={"/user-dashboard"}
          >
            <img src={assets.home_icon} alt="" />
            <p>User Dashboard</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
            to={"/newsArticle"}
          >
            <img src={news} alt="" className="h-10 rounded-full" />
            <p>News And Articles </p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
            to={"/youtube"}
          >
            <img src={youtube} alt="" className="h-10 rounded-full" />
            <p>Youtube Lessons</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2F3FF] border-r-4 border-primary" : ""
              }`
            }
            to={"/aiChatbot"}
          >
            <img src={robot} alt="" className="h-10 rounded-full" />
            <p>AI Chat Bot</p>
          </NavLink>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`} to={'/topDoctors'}>
                <img src={assets.arrow_icon} alt="" />
                <p>Book Appointments</p>
            </NavLink>
            <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary':''}`} to={'/my-profile'}>
                <img src={assets.profile_pic} className='h-12 rounded-full' alt="" />
                <p>Profile</p>
            </NavLink>
        </ul>
      }
    </div>
  );
};

export default UserSidebar;
