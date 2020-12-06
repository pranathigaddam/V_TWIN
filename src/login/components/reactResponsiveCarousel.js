import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ReactResponsiveCarousel () {
    return (
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
    )
}

export default ReactResponsiveCarousel;