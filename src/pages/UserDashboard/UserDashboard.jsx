import React from "react";
import UserSidebar from "./UserSidebar";
import { Route, Routes } from "react-router-dom";
import YouTubeVideos from "./Youtube/YoutubeVideo";

import NewsAndUpdates from "../../components/NewsAndUpdate";
import AIchatbot from "../../components/AIchatbot";

const UserDashboard = () => {
  return (
    <div>
      <div className="flex items-start ">
        <UserSidebar />

        <Routes>
          <Route path="/youtube" element={<YouTubeVideos />} />
          <Route path="/newsArticle" element={<NewsAndUpdates />} />
          <Route path="/aiChatbot" element={<AIchatbot />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;