import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post(`${API_URL}/api/auth/login`, inputs, {
      withCredentials: true,
    })
    setCurrentUser(res.data)
  };

  const register = async (inputs) => {
    const res = await axios.post(`${API_URL}/api/auth/register`, inputs, {
      withCredentials: true,
    })
    setCurrentUser(res.data);
    console.log(` ${inputs} final data ${res.data}`);
  };

  const otpVerification = async (data) => {
    const res = await axios.post(`${API_URL}/api/auth/otpVerification`, data, {
      withCredentials: true,
    })
    setCurrentUser(res.data);
  }

  const resendOTP = async (data) => {
    const res = await axios.post(`${API_URL}/api/auth/resendOTP`, data, {
      withCredentials: true,
    })
    setCurrentUser(res.data);
  }

  const editProfile = async (inputs) => {
    const res = await axios.post(`${API_URL}/api/auth/editprofile`, inputs, {
      withCredentials: true,
    })
    console.log(res.data);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, register, otpVerification, resendOTP, editProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
