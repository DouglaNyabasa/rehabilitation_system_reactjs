import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AdminContext } from "../context/AdminContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const Login = () => {
  const [state, setState] = useState("Admin");
  const { setAToken } = useContext(AdminContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Admin credentials
    const adminEmail = "philanimangezi@admin.com";
    const adminPassword = "123456";

    // Check for admin credentials
    if (state === 'Admin') {
      if (email === adminEmail && password === adminPassword) {
        // Simulate a successful login
        const token = "your_generated_token"; // Replace with actual token if needed
        localStorage.setItem('aToken', token);
        setAToken(token);
        toast.success("Login successful!"); // Success toast

        // Navigate to admin dashboard
        navigate('/dashboard'); // Use navigate to route to the dashboard
      } else {
        toast.error("Invalid email or password"); // Error toast for invalid credentials
      }
    } else {
      // Handle doctor login if needed
      toast.error("Doctor login not implemented");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg text-[#5E5E5E] ">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-[#DADADA] rounded w-full p-2 mt-2"
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-[#DADADA] rounded w-full p-2 mt-2"
          />
        </div>
        <button 
          type="submit" // Ensure this button submits the form
          className="bg-primary mt-5 text-base w-full py-2 rounded-md text-white"
        >
          Login
        </button>
        {
          state === 'Admin'
            ? <p>Doctor Login? <span onClick={() => setState('Doctor')} className="text-primary underline cursor-pointer">{" "}Click Here</span></p>
            : <p>Admin Login? <span onClick={() => setState('Admin')} className="text-primary underline cursor-pointer">{" "}Click Here</span></p>
        }
      </div>
    </form>
  );
};

// Make sure to wrap your app in ToastContainer in your main file (e.g., App.js)
import { ToastContainer } from 'react-toastify';



export default Login;
