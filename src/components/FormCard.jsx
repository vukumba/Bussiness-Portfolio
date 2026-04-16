import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const FormCard = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_hvav99v', 'template_ev4ry77', form.current, {
                publicKey: 'dmrL9QnhnR5F-UXSZ',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (

        <form ref={form} onSubmit={sendEmail} className=' justify-center shadow-2xl shadow-blue-950 rounded  border-t-8 border-blue-900 place-self-center place-items-start rounded-2xl   p-4 md:w-[60%] w-[85%] my-16  grid '>

            <div className="flex flex-col w-full place-items-start my-2">
                <label className='text-xl text-gray-500'>Name</label>
                <input type="text" autoCapitalize='sentences' name="user_name" className='w-full p-2 rounded   border border-blue-800 border-2 rounded-md' /></div>

            <div className="flex flex-col w-full place-items-start my-2">     
                 <label className='text-xl text-gray-500'>Email</label>
                <input type="email" name="user_email" className='p-2  border w-full border-blue-800 border-2 rounded-md' /></div>


            <div className="flex w-full flex-col place-items-start my-2">
                <label className='text-xl text-gray-500'>Subject</label>
                <input type="text" name="subject" className='p-2  border rounded-md w-full border-blue-800 border-2' /></div>
            <div className="flex flex-col w-full place-items-start my-2">
                <label className='text-xl text-gray-500'>Message</label>

                <textarea placeholder='Type your enquiry' name="message" className='p-2 border h-auto  w-full border-blue-800 border-2 rounded-md' /></div>

            <div className="flex place-items-center justify-center w-full my-2">   <input type="submit" value="Send" className='text-2xl bg-red-400 w-full md:px-25 px-10 text-white  py-2   border rounded rounded-xl' /></div>



        </form>
    );
};