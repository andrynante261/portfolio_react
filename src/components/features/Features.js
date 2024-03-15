import React from 'react'
import { MdDeveloperMode } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { MdImportantDevices } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { SiGooglesearchconsole, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-5 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Découvrez mes services pour propulser votre présence en ligne et maximiser votre succès sur le web."
          des="Services"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Dev Applications web"
          des="Développement d'applications web sur mesure pour répondre à vos besoins spécifiques."
          icon={<MdDeveloperMode />}              
        />
        <Card
          title="Web Design"
          des="Conception de sites web attrayants et fonctionnels pour une expérience utilisateur optimale."
          icon={<SiAntdesign />}
        />
        <Card
          title="Optimisation SEO"
          des="Amélioration de la visibilité de votre site web dans les moteurs de recherche pour attirer plus de trafic organique."
          icon={<SiGooglesearchconsole />}
        />
        <Card
          title="Gestion communauté"
          des="Interaction et engagement avec votre communauté en ligne pour renforcer votre présence sur les réseaux sociaux."
          icon={<TbSocial />}
        />
        <Card
          title="Marketing digital"
          des="Stratégies personnalisées pour promouvoir votre marque en ligne et atteindre vos objectifs marketing."
          icon={<FaGlobe />}
        />
        <Card
          title="Site E-commerce"
          des="Création de boutiques en ligne performantes pour faciliter vos ventes et offrir une expérience d'achat fluide."
          icon={<MdImportantDevices  />}

        />
      </div>
    </section>
  );
}

export default Features