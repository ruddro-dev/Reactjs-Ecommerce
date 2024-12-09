import React from 'react';
import Title from "../components/Title.jsx";
import {assets} from "../assets/assets.js";
import NewsletterBox from "../components/NewsletterBox.jsx";

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'}/>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img}/>
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Forever was born out of a passion for innovation and a desire to revolution.</p>
                    <p>Since the beginning we have been creating an outstanding sort of collections.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Our mission is always to serve the best out of the options in the area that can be absolutely amazing to showcase.</p>
                </div>
            </div>
            <div className='text-4xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US?'}/>
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance</b>
                    <p>We confirm that we can serve the best quality of the products here and that will be for all sorts
                        of individuals.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience: </b>
                    <p>With our friendly interface anyone can buy and sell here and we welcome everyone here.</p>
                </div>
            </div>
            <NewsletterBox/>
        </div>
    );
};

export default About;