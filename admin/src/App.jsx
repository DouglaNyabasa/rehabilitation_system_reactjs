
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Admin/Dashboard";



function App() {
  // const {aToken} = useContext(AppContext)
  return  (
    <div>
     
      <ToastContainer />
       {/* <Login/> */}
      <Dashboard/>

      {/* <Layout/> */}
      
    </div> 
   
  ) 
  //  :<><Login/> <ToastContainer/> </>
}

export default App;