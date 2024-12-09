import React from 'react';
import Title from "../components/Title.jsx";
import {assets} from "../assets/assets.js";

const Contact = () => {
    return (
        <div className='px-4 sm:px-10'>
            <div className='text-center text-2xl pt-10 border-t'>
                <Title text1={'CONTACT'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
                {/* Left Side - Image */}
                <img className='w-full md:max-w-[480px] rounded-lg' src={assets.contact_img} alt="Contact Us" />

                {/* Right Side - Contact Form */}
                <div className='flex flex-col justify-center items-start gap-6 w-full'>
                    <h2 className='text-lg font-semibold'>Get in Touch</h2>
                    <form className='flex flex-col gap-4 w-full'>
                        {/* Name Input */}
                        <div className='flex flex-col sm:flex-row gap-4'>
                            <input
                                type='text'
                                className='flex-1 px-3 py-2 border border-gray-300 rounded'
                                placeholder='First Name'
                                required
                            />
                            <input
                                type='text'
                                className='flex-1 px-3 py-2 border border-gray-300 rounded'
                                placeholder='Last Name'
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <input
                            type='email'
                            className='w-full px-3 py-2 border border-gray-300 rounded'
                            placeholder='Email Address'
                            required
                        />

                        {/* Subject Input */}
                        <input
                            type='text'
                            className='w-full px-3 py-2 border border-gray-300 rounded'
                            placeholder='Subject'
                            required
                        />

                        {/* Message Textarea */}
                        <textarea
                            className='w-full px-3 py-2 border border-gray-300 rounded resize-none'
                            rows='5'
                            placeholder='Your Message'
                            required
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            className='px-6 py-2 bg-black text-white font-medium rounded hover:bg-gray-700 transition'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
