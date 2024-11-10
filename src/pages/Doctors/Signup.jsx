import React, { useState } from "react";
import avatar from "../../assets/images/doctor-img01.png";
import signupImg from "../../assets/images/signup.gif";
import { Link } from "react-router-dom";

const Signup = () => {

  const [selectedFile, setSelectedFile] = useState(null)
 const [previewURL, setPreviewURL] = useState("")
  const [formData, setFormData] = useState({
    email: "",
    fullName:"",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
    username: " "

  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  }

  const handleFileInputChange = async(event)=>{
    const file = event.target.files[0]
    console.log(file)
  }

const submitHandler =async event=>{
  event.preventDetail()
}

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className="w-full rounded-l-lg" />
            </figure>
          </div>
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10 ">
              Create an <span className="text-primaryColor">Account</span>
            </h3>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  className="w-full py-3 pr-4 border-b border=[#0066ff51] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                  required
                  type="text"
                  placeholder="Full name"
                  name="Full Name"
                  value={FormData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full py-3 pr-4 border-b border=[#0066ff51] focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                  required
                  type="text"
                  placeholder="User name"
                  name="alias"
                  value={FormData.username}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-5">
                <input
                  className="w-full py-3 pr-4 border-b border-red-700 focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                  required
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={FormData.email}
                  onChange={handleInputChange}
                />
              </div>
              <h4 className="text-red-600"> email is required </h4>
              <div className="mb-5">
                <input
                  className="w-full py-3 pr-4 border-b border-red-800 focus:outline-none focus:border-b-primaryColor text-[18px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer"
                  required
                  type="Password"
                  placeholder="Password"
                  name="Password"
                  value={FormData.password}
                  onChange={handleInputChange}
                />
              </div>
              <h4 className="text-red-600"> password is required </h4>
              <div className="mb-5 items-center justify-between">
                <label className="text-headingColor font-bold text-[16px] leading-7 ">
                  Are you a:
                  <select
                    name="role"
                    value={FormData.role}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7  px-4 py-3 focus:outline-none"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className="text-headingColor font-bold text-[16px] leading-7  ">
                  Gender:
                  <select
                    name="gender"
                    value={FormData.gender}
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7  px-4 py-3 focus:outline-none"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange={handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0"
                  />

                  <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center px-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer">
                    Upload Photo</label>
                </div>
              </div>
              <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor px-4 py-3 rounded-lg text-white text-[18px] leading-[30px]"
            >
              Sign Up
            </button>
          </div>
          <p className="mt-5 text-textColor text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primaryColor font-medium ml-1">
              Login
            </Link>
          </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
