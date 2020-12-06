import React, { Fragment } from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Button } from 'primereact/button';
// For CSS
import './login.css';
// For components
import ReactResponsiveCarousel from './components/reactResponsiveCarousel';

function Login() {
    const renderLoginButton = () => {
        return (
            <div className="contentBodyBlock box475 flexCol">
                <h2 className="puhchLine">Login</h2>
                <div className="loginBtn">
                    <Button label="Login with SSO" />
                </div>
            </div>
        )
    }
    const renderLogo = () => {
        return (
            <div className="brandingBlock">
                <div className="brandingLogo">
                    <img className="invertWhite" src={`/images/logos/pfizer_rgb_neg@2x.png`} alt="Company Logo" />
                </div>
                <div className="brandingName">
                    <h2>Virtual Twin</h2>
                </div>
            </div>
        )
    }
    return(
        <Fragment>
        <div className="homeWrapper">
            <div className="homeContainer hideInMob">
                <div className="homeCol2 loginPortLeft">
                    {renderLogo()} 
                    {renderLoginButton()}
                </div>
                <div className="homeCol2 bannerPort ">
                    <ReactResponsiveCarousel/>
                </div>
            </div>
            {/***** FOR MOBILE ****/}
            <div className="homeContainer responsiveLogin flexCol">
                <div className="homeCol2 loginPortLeft">
                    {renderLogo()}
                </div>
                <div className="homeCol2 bannerPort ">
                    <ReactResponsiveCarousel/>
                </div>
                {renderLoginButton()}
            </div>
        </div>
        </Fragment>
    )
}

export default Login;