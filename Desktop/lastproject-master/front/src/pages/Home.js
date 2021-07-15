import React, { useState } from 'react'
import './Feed.css'
import './Home.css'
import { SliderImg } from './SliderImg'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'; 
import Cards from './Cards'
import './Cards.css';
import Footer from './Footer';
import { Carousel } from 'antd';


const Home = () => {

    return (
      <div>
      <Carousel autoplay>
{SliderImg.map(el=><img  className="slider" key={el.image} src={el.image} />)}
    </Carousel>
       
      
        <Cards/>
        <Footer />
        </div> 
    )
}

export default Home
