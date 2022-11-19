import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='flex mt-6 2xl:p-10 items-center justify-center flex-row 2xl:gap-y-2'>
      <a
        className='text-xs md:text-base 2xl:text-3xl font-light text-white'
        href='https://github.com/IsaacMagno'
        target='_blank'
        rel='noreferrer noopener'
      >
        <AiOutlineGithub className='inline mr-2' />
      </a>
      <a
        className='text-xs md:text-base 2xl:text-3xl font-light text-white'
        href='https://www.linkedin.com/in/isaacmagno/'
        target='_blank'
        rel='noreferrer noopener'
      >
        <AiOutlineLinkedin className='inline mr-2' />
      </a>
      <a
        className='text-xs md:text-base 2xl:text-3xl font-light text-white'
        href='https://wa.me/5519997050228'
        target='_blank'
        rel='noreferrer noopener'
      >
        <AiOutlineWhatsApp className='inline mr-2' />
      </a>
      <a
        className='text-xs md:text-base 2xl:text-3xl font-light text-white'
        href='mailto:isaacmagno98@gmail.com'
        target='_blank'
        rel='noreferrer noopener'
      >
        <MdAlternateEmail className='inline mr-2' />
      </a>
    </div>
  );
};

export default Contact;
