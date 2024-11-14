
import './App.css'
import Layout from './layout/Layout'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const initialOptions = {
    clientId: "AQ5PfQMPm7CK6EbIbCYExmER3vqc_mbKMOos8NcMqtOXSDzppY09xXzmT12EpNDmpTAcOjbzKxwbegLu",
    currency: "USD",
    intent: "capture",
};


  return (
    <PayPalScriptProvider options={initialOptions}>
      {/* <PayPalButtons/> */}
     <ToastContainer/>
    <Layout/>
    </PayPalScriptProvider>
  )
}

export default App
