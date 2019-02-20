import React,{Component} from 'react'
import Slider from "react-slick";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css'


class AdBanner extends Component{
render(){
  return (
          <Carousel className='adbanner' showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div>
                    <img  src="/mbp.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img  src="/iphone.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img  src="/ipad.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        );
      }
    } 

export default AdBanner;