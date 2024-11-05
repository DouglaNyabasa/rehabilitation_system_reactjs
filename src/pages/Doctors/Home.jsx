import React from "react";
import featureImg from "../../assets/images/feature-img.png";
import { Link } from "react-router-dom";
import heroImg01 from "../../assets/images/hero-img01.png";
import heroImg02 from "../../assets/images/hero-img02.png";
import heroImg03 from "../../assets/images/hero-img03.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import icon01 from "../../assets/images/icon01.png";
import { BsArrowRight } from "react-icons/bs";
import About from "../../components/About";
import ServicesList from "../../components/ServicesList";
import Video3 from "../../assets/video1.mp4";
import DoctorsList from "../../components/DoctorsList"
import faqImg from "../../assets/images/faq-img.png";
import FaqList from "../Faq/FaqList";
import Testimonials from "../../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[33px] leading-[46px] text-headingColor font-[750] md:text-[55px] md:leading-[70px]">
                  We help our <span className="text-yellowColor">patients</span>{" "}
                  recover and live a{" "}
                  <span className="text-yellowColor">healthy</span> , longer
                  drug free life.
                </h1>
                <p className="text__para">
                  For 12 years in a row, ZBC news and World Health Report has
                  recognized us as one of the best Drug rehabilitation hospital
                  in Zimbabwe and SADC with a positive recovery rate of 92%
                </p>
                <button className="btn">Request Appointment</button>
              </div>
              {/* ================hero section============== */}

              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor"
                  >
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor"
                  >
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>
                <div>
                  <h2
                    className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
              text-headingColor"
                  >
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ================hero section============== */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg02} alt="" />
                <img className="w-full" src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============end of hero section============== */}
      <section>
        <div className="container">
          <div className="lg:w-[600px] mx-auto">
            <h2 className="heading text-center">
              Providing the best{" "}
              <span className="text-yellowColor">rehabilitation</span> services.
            </h2>
            <p className="text__para text-center">
              World class care for everyone. Our rehabilitation system offers
              unmatched expert health care from qualified Doctors and Physicians
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-center text-headingColor font-[700]">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor mt-4 text-center font-[300]">
                  Our Program offers unmatched expert health care
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:border-none hover:bg-primaryColor"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-center text-headingColor font-[700]">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor mt-4 text-center font-[300]">
                  Our Program offers unmatched expert health care
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:border-none hover:bg-primaryColor"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-center text-headingColor font-[700]">
                  Get Your Recovery Plan
                </h2>
                <p className="text-[16px] leading-7 text-textColor mt-4 text-center font-[300]">
                  Our Program offers unmatched expert health care
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:border-none hover:bg-primaryColor"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============about section============== */}
      <About />

      {/* =============end of about section============== */}

      {/* =============services section============== */}
      <section>
        <div className="container">
          <div className="xl:w-[600px] mx-auto">
            <h2 className="heading text-center ">
              Our <span className="text-yellowColor">Rehabilitation</span>{" "}
              Services and Programmes
            </h2>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* =============end of services section============== */}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            <div className="relative z-10 xl:w-[800px] flex justify-end mt-[50px] lg:mt-0 w-3/4">
              <video
                autoPlay
                loop
                muted
                className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4 "
              >
                <source src={Video3} type="video/mp4" />
                Your browser does not support the video tags.
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* =============our great doctor============== */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Our <span className="text-yellowColor">Best</span> Team Of Doctors
            </h2>
            <p className="text__para text-center">
              World class care for everyone. Our health System offers unmatched
              expert rehabilitation care Doctors
            </p>
          </div>
          <DoctorsList />
        </div>
      </section>

      {/* =============faq section============== */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions asked by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* =============end of faq section============== */}

      {/* ============= testimonials section============== */}
      <section>
        <div className="container">
          <div className="xl:w-[500px] mx-auto">
            <h2 className="heading text-center">
              What Our <span className="text-yellowColor">Patients</span> Say
              About Us
            </h2>
            <p className="text__para text-center">
              World class care for everyone. Our health System offers unmatched
              expert rehabilitation care Doctors
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
      {/* =============end of testimonials============== */}
    </>
  );
};

export default Home;
