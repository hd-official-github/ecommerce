import { Carousel } from 'antd';
import Image from 'next/image';
import pic1 from "../public/1.png"
import pic2 from "../public/2.png"
import pic3 from "../public/3.png"
import pic4 from "../public/4.png"
import pic5 from "../public/5.png"
import pic1_m from "../public/1-m.png"
import pic2_m from "../public/2-m.png"
import pic3_m from "../public/3-m.png"
import pic4_m from "../public/4-m.png"
import pic5_m from "../public/5-m.png"
import { useEffect, useRef, useState } from 'react';
const contentStyle = {
    margin: 0,
    height: '',
    color: '#fff',
    // lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const SliderLayout = () => {
    // var ww = useRef([window.innerWidth, window.innerHeight]);
    const [windowSize, setwindowSize] = useState([])
    useEffect(() => {

        // setwindowSize(ww)
        // console.log(window.innerWidth)
        setwindowSize(window.innerWidth)
    }, [])


    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };
    return (
        <Carousel autoplay>
            <div style={contentStyle}>
                <Image src={windowSize > 400 ? pic1 : pic1_m} width={windowSize} height={windowSize > 400 ? 650 : 375} quality="100"/>

            </div>
            <div style={contentStyle}>
                <Image src={windowSize > 400 ? pic2 : pic2_m} width={windowSize} height={windowSize > 400 ? 650 : 375} quality="100"/>

            </div>
            <div style={contentStyle}>
                <Image src={windowSize > 400 ? pic3 : pic3_m} width={windowSize} height={windowSize > 400 ? 650 : 375} quality="100"/>
            </div>
            <div style={contentStyle}>
                <Image src={windowSize > 400 ? pic4 : pic4_m} width={windowSize} height={windowSize > 400 ? 650 : 375} quality="100"/>
            </div>
            <div style={contentStyle}>
                <Image src={windowSize > 400 ? pic5 : pic5_m} width={windowSize} height={windowSize > 400 ? 650 : 375} quality="100"/>
            </div>
        </Carousel>
    );
};
export default SliderLayout;