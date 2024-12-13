import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Développeur web fullstack", "UX Designer", "Spécialiste en marketing digital"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 30,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Je suis <span className="text-designColor capitalize  @apply text-[#00fdff]">Arnaud</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#00fdff"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          En tant que spécialiste chevronné du web, de l’UX Design et du marketing digital,
          je mets mon expertise à votre service pour concevoir des expériences en ligne uniques et des stratégies digitales efficaces.
          Contactez-moi pour explorer comment je peux vous accompagner vers la réussite en ligne.        
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Retrouvez-moi sur 
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Technologies utilisées : 
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner
