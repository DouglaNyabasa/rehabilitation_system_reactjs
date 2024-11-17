import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets_frontend/assets.js";

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
            <img src={assets.info_icon} alt="" />
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
            <img src={assets.menu_icon} alt="" />
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
            <img src={assets.people_icon} alt="" />
            <p>AI Chat Bot</p>
          </NavLink>
        </ul>
      }
    </div>
  );
};

export default UserSidebar;
