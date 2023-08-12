import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignUp';
import NavBar from './Components/NavBar';
import ImageGallery from './User/ImageGallery';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import TourPackage from './User/TourPackage';
import Iteninary from './User/Iteninary';
import AgentPost from './Components/AgentPost';
import FeedBack from './User/FeedBack';
import Booking from './User/BookingPage';
import AdminPost from './AgentDashboard/AdminPost';
import BookingPage from './User/BookingPage';
import Demo from './Components/AccomadationPost';
import AdminAccept from './AgentDashboard/AdminAccept';
import Invoice from './Components/MyBooking';
import UserSigninPage from './User/UserSigninPage';
import UserLogin from './User/UserLogin';
import Home from './Components/Home';
import AgentLogin from './Components/AgentLogin';
import AgentSignin from './Components/AgentSignin';
import NumberAgency from './AdminDashboard/NumberAgency';
import AgentAddPackage from './Components/AgentAddPackage';
import NumberOFeedback from './AdminDashboard/NumberOFeedback';

import AgentDashboard from './AgentDashboard/AgentDashboard';
import ModalContainer from './User/SuccussfullBooking';
import AdminSignin from './Admin/AdminLogin';
import Spinner from './User/Spinner';
import AdminDecline from './AgentDashboard/AdminDecline';



function App() {

  const isUserAuthenticated = () => {
    const token = localStorage.getItem('Token');
    if(token){
      return true;
    } // Change this logic based on how you handle authentication
    return false;
  };
  
  return (
    <>
    
    <Router>


<Routes>
<Route path="/" element={<UserLogin />} />
          <Route path="/imagegallery" element={isUserAuthenticated() ? <ImageGallery /> : <Navigate to="/userlogin" />} />
          <Route path="/TourPackage" element={isUserAuthenticated() ? <TourPackage /> : <Navigate to="/userlogin" />} />
          <Route path="/Iteninary" element={isUserAuthenticated() ? <Iteninary /> : <Navigate to="/userlogin" />} />
          <Route path="/Booking" element={isUserAuthenticated() ? <Booking /> : <Navigate to="/userlogin" />} />
          <Route path="/FeedBack" element={isUserAuthenticated() ? <FeedBack /> : <Navigate to="/userlogin" />} />
          <Route path="/userlogin" element={<UserLogin />} />
<Route path="/agentlogin" element={<AgentLogin/>} />
<Route path="/Home" element={<Home/>} />

<Route path="/AgentSignin" element={<AgentSignin/>} />
<Route path="/AdminDashboard" element={<AdminDashboard/>} />
<Route path="/NumberAgency" element={<NumberAgency/>} />
<Route path="/AdminAccept" element={<AdminAccept/>} />
<Route path="/AgentPost" element={<AgentPost/>} />
<Route path="/numberofdaysforpackage" element={<Demo/>} />
<Route path="/UserSigninPage" element={<UserSigninPage/>} />
<Route path="/AgentAddPackage" element={<AgentAddPackage/>} />
<Route path="/NumberOFeedback" element={<NumberOFeedback/>} />

<Route path="/AgentDashboard" element={<AgentDashboard/>}/>
<Route path="/AdminPost" element={<AdminPost/>}/>
<Route path="/ModalContainer" element={<ModalContainer/>}/>

<Route path="/adminlogin" element={<AdminSignin/>}/>
<Route path="/AdminDecline" element={<AdminDecline/>}/>
<Route path="/Spinner" element={<Spinner/>}/>


</Routes>
</Router>
  

    </>
     );
}

export default App;
