import React from "react";
import { fomartDate } from "../../utils/fomartDate";

const DoctorsAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className=" text-irisBlueColor font-bold text-[24px] leading-9 ">
          Takudzwa Ruvengo
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
          iusto numquam fugit temporibus adipisci, vel quia, ipsam obcaecati
          consequatur quaerat impedit sunt officiis, amet provident nulla minima
          necessitatibus veritatis at?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {fomartDate("11-08-2009")} - {fomartDate("9-08-2015")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
              Bachelors Midlands State University, Gweru
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
             Gweru General Hospital
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {fomartDate("3-04-2010")} - {fomartDate("7-14-2015")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD University of Zimbabwe , Harare
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
            Parirenyatwa Hospital, Avondale Harare
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] font-semibold leading-6">
              {fomartDate("3-04-2019")} - {fomartDate("7-14-2024")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Senior Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Parirenyatwa Hospital, Avondale Harare
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] font-semibold leading-6">
              {fomartDate("3-04-2019")} - {fomartDate("7-14-2024")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Senior Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Baines Clinic, Avenues Harare
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorsAbout;
