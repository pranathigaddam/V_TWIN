import React from "react";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/vela-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './login.css';
import { Button } from 'primereact/button';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import CarouselDemo from './carousel';

function Login() {
    return(
        <>
        <div className="homeWrapper">
            <div className="homeContainer hideInMob">
                <div className="homeCol2 loginPortLeft">
                    <div className="brandingBlock">
                        <div className="brandingLogo">
                            <img className="invertWhite" src={`/images/logos/pfizer_rgb_neg@2x.png`} alt="Company Logo" />
                        </div>
                    
                        <div className="brandingName">
                            <h2>Virtual Twin</h2>
                        </div>
                    </div>
                    <div className="contentBodyBlock box475 flexCol">
                        <h2 className="puhchLine">Login</h2>
                        
                        <div className="loginBtn">
                            <Button label="Login with SSO" />
                        </div>
                    </div>
               
                </div>
                <div className="homeCol2 bannerPort ">
                    <Carousel showArrows={false} 
                        showThumbs={false} 
                        width="100%" 
                        dynamicHeight={true} 
                        interval="3000"
                        infiniteLoop={true}
                        autoPlay={true}
                        stopOnHover={false} showStatus={false}>
                        <div className="bannerImg">
                            <img src="images/banners/banner1.png" alt="banner" />
                        </div>
                        <div className="bannerImg">
                            <img src="images/banners/banner2.png" alt="banner" />
                        </div>
                        <div className="bannerImg">
                            <img src="images/banners/banner3-edited.png" alt="banner" />
                            {/* <div className="bottmTxt">
                                <p>View dollhouse and 2D floor plan</p>
                                <small>View the full plant floor planning in both 2nd and 3rd <br/>dollhouse view.</small>
                            </div> */}
                        </div>
                    </Carousel>
                </div>
            </div>

            {/***** FOR MOBILE ****/}
            <div className="homeContainer responsiveLogin flexCol">
                <div className="homeCol2 loginPortLeft">
                    <div className="brandingBlock">
                        <div className="brandingLogo">
                            <img className="invertWhite" src={`/images/logos/pfizer_rgb_neg@2x.png`} alt="Company Logo" />
                        </div>
                    
                        <div className="brandingName">
                            <h2>Virtual Twin</h2>
                        </div>
                    </div>
                </div>
                <div className="homeCol2 bannerPort ">
                    <Carousel showArrows={false} 
                        showThumbs={false} 
                        width="100%" 
                        dynamicHeight={true} 
                        interval="3000"
                        infiniteLoop={true}
                        autoPlay={true}
                        stopOnHover={false} showStatus={false}>
                        <div className="bannerImg">
                            <img src="images/banners/banner1.png" alt="banner" />
                        </div>
                        <div className="bannerImg">
                            <img src="images/banners/banner2.png" alt="banner" />
                        </div>
                        <div className="bannerImg">
                            <img src="images/banners/banner3-edited.png" alt="banner" />
                            {/* <div className="bottmTxt">
                                <p>View dollhouse and 2D floor plan</p>
                                <small>View the full plant floor planning in both 2nd and 3rd <br/>dollhouse view.</small>
                            </div> */}
                        </div>
                    </Carousel>
                </div>
                <div className="contentBodyBlock box475 flexCol">
                        <h2 className="puhchLine">Login</h2>
                        
                        <div className="loginBtn">
                            <Button label="Login with SSO" />
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Login;