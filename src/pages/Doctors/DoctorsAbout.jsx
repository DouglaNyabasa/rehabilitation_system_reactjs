import React from "react";
import { assets } from "../../assets/assets_frontend/assets";
import { fomartDate } from "../../utils/fomartDate";

const DoctorsAbout = () => {
  return (
    <div className="ml-16">
      <div className=" text-center text-2xl pt-10 text-gray-500">
        <p>
          About <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          src={assets.about_image}
          className="w-full md:max-w-[360px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
          <p>
            Welcome to Better Health Assistance, your trusted partner in managing your
            healthcare needs conveniently and efficiently, At Better Health
            Assistance we understand the challenges that people face when trying
            to find platforms to recover from various addictions such as drug
            abuse.{" "}
          </p>
          <p>
            We provide a platform that enables patients to apply for
            appointments.Weather you are booking first appointment or managing
            ongoing care,@ Better Health Assistance is here to give you full
            support for your recovery
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our Vision @ Better Health Assistance is to create a seamless
            healthcare for everyone. We aim to bridge the Gap between patients
            and Rehabilitation facilities in Zimbabwe.Making easy to get help
            when you need it.{" "}
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold "> CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="hover:bg-primaryColor hover:text-white transition-all duration-300 text-gray-600 cursor-pointer border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] ">
          <b>EFFICIENCY :</b>
          <p>Streamlined appointment that Fit well with your busy life style</p>
        </div>
        <div  className="hover:bg-primaryColor hover:text-white transition-all duration-300 text-gray-600 cursor-pointer border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] ">
          <b>CONVENIENCE :</b>
          <p>Access to a network of trusted healthcare professionals in your area</p>
        </div>
        <div  className="hover:bg-primaryColor hover:text-white transition-all duration-300 text-gray-600 cursor-pointer border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] ">
          <b>PERSONALIZATION</b>
          <p>Tailored healthcare system that helps you to stay on top of your game </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorsAbout;
