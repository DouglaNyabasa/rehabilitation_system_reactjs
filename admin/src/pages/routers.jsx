import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import AdminDashboard from "./Admin/AdminDashboard";
import AllAppointment from "./Admin/AllAppointment";
import AddDoctor from "./Admin/AddDoctor";
import DoctorList from "./Admin/DoctorList";
import Dashboard from "./Admin/Dashboard";
import Home from "../../../src/pages/Doctors/Home";

const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} /> */}

      {/* User routes */}
      <Route path="/admin-dashboard" element={<Dashboard />} />
      {/* <Route path="/admin-dashboard" element={<AdminDashboard/>}/> */}

      <Route path="/all-appointments" element={<AllAppointment />} />
      <Route path="/add-doctor" element={<AddDoctor />} />
      <Route path="/doctor-list" element={<DoctorList />} />
    </Routes>
  );
};

export default Routers;
