
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
import img1 from "../images/img1.png"

const Carous = () =>  {
    return (
        <>

            <div className="mt-5">

                    <Carousel autoPlay={true} infiniteLoop={true} interval='30000' emulateTouch={true}>
                        <div className="">
                        <img src="https://img.freepik.com/free-vector/indian-raksha-bandhan-sale-banner-design_1017-20025.jpg?w=1380&t=st=1687287173~exp=1687287773~hmac=f125a0dcdff0e2721b22265587875ec583ada3d7d16b1d90287802a1917b35b2
                        " alt="" className=""/>
                        </div>
                        <div>
                           <img src="https://img.freepik.com/premium-vector/summer-poster-banner-template-with-pink-flamingo-pool-float-summer-element_139523-924.jpg?w=1380" alt="" className=""/>
                        </div>
                        <div>
                        <img src="https://img.freepik.com/free-vector/hand-drawn-fashion-collection-twitch-banner_23-2149985384.jpg?w=1380&t=st=1687287009~exp=1687287609~hmac=6b464e1373f0b75189f646d438efb599deac517318cd1f8cac7aed35f5c519ee" alt="" className=""/>
                        </div>
                        <div>
                        <img src="https://img.freepik.com/free-vector/gradient-boutique-twitch-banner_23-2149334951.jpg?w=1380&t=st=1687287086~exp=1687287686~hmac=c0f5f1a99e0652468fe43f59eb6ffbdd38b10acab5214d3409f2ec428d45f125" alt="" className=""/>
                        </div>
                    </Carousel>

                    </div>
        </>
    )
}
export default Carous;
 
