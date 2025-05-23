
import * as dotenv from 'dotenv';
dotenv.config();
const MAIL_SETTINGS = {
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
   user: process.env.EMAIL,
   pass: process.env.EMAIL_PASSWORD,
  },
};
  
    
  import * as nodemailer from 'nodemailer';
  const transporter = nodemailer.createTransport(MAIL_SETTINGS);
  
  export const sendMail = async (params) => {
    try {
      let info = await transporter.sendMail({
        from: MAIL_SETTINGS.auth.user,
        to: params.to, 
        subject: 'OTP Verification - CONNECT JAMIA',
        html: `
        <div
          class="container"
          style="max-width: 90%; margin: auto; padding-top: 20px"
        >
          <h2>Welcome to CONNECT JAMIA.</h2>
          <h4>You are officially In ✔</h4>
          <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
          <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${params.OTP}</h1>
     </div>
      `,
      });
      return info;
    } catch (error) {
      console.log(error);
      return false;
    }
  };