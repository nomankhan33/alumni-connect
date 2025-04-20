import './App.css';
import{BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from './pages/Home';
import {QueryClient, QueryClientProvider} from 'react-query'
import Login2 from './pages/Login2';
import LandingPage from './pages/LandingPage';
import AlumniDirectory from './pages/AlumniDirectory';
import Events from './pages/Events';
import Otp from './pages/OTP';
import EditProfile from './pages/EditProfile';
import ViewProfile from './pages/ViewProfile';

function App() {
  const queryClient=new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
    <BrowserRouter>
        <Routes>
       
          <Route path="/login" element={<Login2 />}></Route>
          <Route path='/otp' element={<Otp />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/alumni-directory" element={<AlumniDirectory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/editprofile" element={<EditProfile/>}></Route>
          <Route path="/view/:username" element={<ViewProfile/>}></Route>
          <Route path="/" element={<LandingPage />}></Route>
          {/* <Route path="/register" element={<Register/>}></Route> */}
          {/* <Route path="/login" element={<Login />}></Route> */}
          {/* <Route path="/add" element={<Share />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  );
}

export default App;