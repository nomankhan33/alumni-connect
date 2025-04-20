import React, { useEffect, useState, useContext } from 'react'
import './OTP.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../src/context/authContext";

const Otp = () => {

    const [inputs, setInputs] = useState("");
    const [seconds, setSeconds] = useState(59);
    const [minute, setMinute] = useState(4);

    var timer = minute+seconds;

    const location = useLocation();

    useEffect(() => {
      let timer = setInterval(() => {

        if(seconds > 0 || minute > 0)
          setSeconds(seconds-1);

        if(seconds===0 && minute>0){
          setMinute(minute-1);
          setSeconds(59);
        }

      }, 1000);

      return () => clearInterval(timer);
    });

    const handleonChange= (event)=>{
        // console.log();
        var elmnt = event.target;
        var next = elmnt.getAttribute("data-next");
        var prev = elmnt.getAttribute("data-previous");
        if((event.keyCode === 8 || event.keyCode === 37) & prev != null) {
            document.getElementById(event.target.name).value = '';
            elmnt.form.elements[prev].focus();
            setInputs(inputs.replace(/.$/, ''));
            // console.log( event.target.form.elements[prev]);
            // console.log("fdel");
        } else if(((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 96 && event.keyCode <= 105) || event.keyCode === 39)&& next != null) {
            document.getElementById(event.target.name).value = elmnt.value;
            setInputs(inputs.concat(elmnt.value));
            // elmnt.value ='';
            elmnt.form.elements[next].focus();
            // console.log( event.target.id);
        } else if(prev === null) {
          setInputs(inputs.replace(/.$/, ''));
        } else if(next === null && inputs.length < 6) {
          setInputs(inputs.concat(elmnt.value));
        }
    }

      const [err, setErr] = useState(null);

      const navigate = useNavigate()

      const { otpVerification, resendOTP } = useContext(AuthContext);

      console.log(location.state.username)
      const handleOtp = async (e) => {
        e.preventDefault()
        try {
          var data = {
            username: location.state.username,
            otp: inputs,
          } 
          await otpVerification(data);
          navigate("/home")
        } catch (err) {
          setErr(err.response.data)
          // console.log(err.response.data);
        }
      };

      const sendOtp = async (e) => {
        e.preventDefault()
        try {
          var data = {
            username: location.state.username,
          } 
          setMinute(4);
          setSeconds(59);
          document.getElementById("resend-info").className = 'activated';
          await resendOTP(data);
          // navigate("/otp",{state: data})
        } catch (err) {
          setErr(err.response.data)
          // console.log(err.response.data);
        }
      };

      if(timer === 0){
        document.getElementById("resend-info").className = 'deactivated';
      } 

    return (
        <div>
            <section id="section">
                <div class="containerOTP">
                    <div class="user otpBx">
                        <div class="formBx">

                            <form method="get" class="digit-group"  maxLength="1" data-group-name="digits" data-autosubmit="true" autocomplete="off">
                            <h2>Enter Otp</h2>
                            <p className={err===null?'show-error deactivated' : 'show-error activated'}>Invalid OTP</p>
                                <input type="text" id="digit-1" maxLength="1" name="digit-1"  onKeyUp={handleonChange} data-next="digit-2" />
                                <input type="text" id="digit-2"  maxLength="1" name="digit-2"  onKeyUp={handleonChange} data-next="digit-3" data-previous="digit-1" />
                                <input type="text" id="digit-3"  maxLength="1" name="digit-3" onKeyUp={handleonChange} data-next="digit-4" data-previous="digit-2" />
                                <span class="splitter">&ndash;</span>
                                <input type="text" id="digit-4"  maxLength="1" name="digit-4" onKeyUp={handleonChange} data-next="digit-5" data-previous="digit-3" />
                                <input type="text" id="digit-5"  maxLength="1" name="digit-5" onKeyUp={handleonChange} data-next="digit-6" data-previous="digit-4" />
                                <input type="text" id="digit-6"  maxLength="1" name="digit-6" onKeyUp={handleonChange} data-previous="digit-5" />
                                <p>Time remaining: {minute<10? "0"+minute : minute}:{seconds<10? "0"+seconds : seconds}</p>
                                <div className='otpSubmitButton'>
                                <input type="submit" className = "submitbtn" name="" value="Submit" onClick={handleOtp}/>
                                <input type="submit" name="" value="Re-Send OTP" className={timer>0? "deactivated" : "activated"} onClick={sendOtp} />
                                </div>
                                <p id='resend-info' className='deactivated'> OTP has been sent. Please check your email.</p>
                            </form>
                          </div>
                        <div class="imgBx"><img src="https://img.freepik.com/free-vector/new-message-concept-illustration_114360-666.jpg?w=1000&t=st=1682011633~exp=1682012233~hmac=334f29c7f7a0a926d9604196f2d41b68dfb01b59cc43bd47718e33313adaae6d" alt="" /></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Otp;