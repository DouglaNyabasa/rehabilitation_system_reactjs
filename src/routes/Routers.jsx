
import Home from '../pages/Doctors/Home'
import Login from '../pages/Doctors/Login'
import Contacts from '../pages/Doctors/Contact'
import Signup from '../pages/Doctors/Signup'
import {Routes,Route} from 'react-router-dom'
import Service from '../pages/Doctors/Service'
import Profile from '../pages/MyProfile/Profile'
import MyAppointment from '../pages/MyProfile/MyAppointment'
import Appointment from '../pages/MyProfile/Appointment'
import AIchatbot from '../components/AIchatbot'
import NewsAndUpdates from '../components/NewsAndUpdate'




const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/aiChatbot' element={<AIchatbot/>} />
      <Route path='/appointment/:docId' element={<Appointment/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/contact' element={<Contacts/>} />
      <Route path='/newsArticle' element={<NewsAndUpdates/>} />
      <Route path='/my-profile' element={<Profile/>} />
      <Route path='/my-appointment' element={<MyAppointment/>} />

 
    </Routes>
  )
}

export default Routers
