import React from "react";
import './login.css';
import contentImage from '../assets/images/imgcontentlogin.svg';
import googleIcon from '../assets/images/google.svg';

function Login() {

    const UserOrDoc = () => {
        if (window.location.pathname === "/user-login") {
            return "ورود کاربران";
        }
        if (window.location.pathname === "/doctor-login") {
            return "ورود پزشکان";
        }
    }

    return (
        <div id="background-container">
            <div id="content-container">
                <div id="picLogo">
                    <img src={contentImage} alt="Content Logo" />
                </div>
                
                <div id="login-main">
                    <p id="title"><b>{UserOrDoc()}</b></p>
                    <p id="mobile-text">برای ورود لطفا شماره موبایل خود را وارد کنید.</p>
                    <input type="text" placeholder="09121234567" dir="ltr" id="number-input"/>
                    <input type="button" value="ارسال کد تایید" id="submit-btn"/>
                    <button id="google-btn">
                        ورود با گوگل
                        <img src={googleIcon} alt="Google Icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
