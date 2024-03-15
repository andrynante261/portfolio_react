import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Arnaud RAKOTOMALALA</h3>
        <p className="text-lg font-normal text-gray-400">
          Développeur web fullstack
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Spécialiste du web, de l'UX Design et du marketing digital, je vous propose des expériences en ligne uniques et des stratégies digitales efficaces.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Téléphone: <span className="text-lightText">+261 34 39 577 22</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          E-mail: <span className="text-lightText">andrynante26@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Retrouvez-moi sur :</h2>
        <div className="flex gap-4">

          <a href="https://www.linkedin.com/in/andrynante261/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
                <FaLinkedinIn />
            </span>
          </a>

          <a href="https://www.facebook.com/skybee261" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>

          <a href="https://twitter.com/Skybee261" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft