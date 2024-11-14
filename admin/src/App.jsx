import { useContext } from "react";
import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "../../src/context/AppContext";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Admin/Dashboard'
import AllAppointment from "./pages/Admin/AllAppointment";
import DoctorList from "./pages/Admin/DoctorList";
import AddDoctor from "./pages/Admin/AddDoctor";




function App() {

  // const {aToken} = useContext(AppContext)
  return  (
  

    
    <div>
      {/* <Login/> */}
      <ToastContainer />
      <Navbar />
     
      <div className="flex items-start ">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<></>}/>
          <Route path="/admin-dashboard" element={<Dashboard/>}/>
          <Route path="/all-appointments" element={<AllAppointment/>}/>
          <Route path="/add-doctor" element={<AddDoctor/>}/>
          <Route path="/doctor-list" element={<DoctorList/>}/>
        </Routes>
      </div>
    </div>

  );
}

export default App;


// function App() {
//   // const {aToken} = useContext(AppContext)
//   return aToken ? (
//     <div>
//       {/* <Login/> */}
//       <ToastContainer />
//       <Navbar />
//       <div></div>
//     </div> 
   
//   )  :<><Login/> <ToastContainer/> </>
// }

// export default App;