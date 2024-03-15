import React, { useState } from 'react';
import Title from '../layouts/Title';
import Skills from './Skills';
import Education from './Education';

const Resume = () => {
  const [educationData, setEducationData] = useState(false);
  const [skillData, setSkillData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="+5 années d'expérience" des="Parcours professionnel" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2">
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
            }}
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Expertise professionnelle
          </li>
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
            }}
            className={`${
              educationData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Formations
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}

      {educationData && (
        <p className="text-center mt-4">
          Pour obtenir davantage d'informations sur mon CV, n'hésitez pas à m'envoyer un e-mail <a href="mailto:andrynante26@gmail.com" className="text-blue-500">ici</a> ...
        </p>
      )}
    </section>
  );
}

export default Resume;
