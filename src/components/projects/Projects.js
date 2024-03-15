import React from 'react'
import Title from '../layouts/Title'
import { lme, tsenaonline, acimmo, appacimmo, mesic, centic } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Explorez mes projets professionnels pour découvrir mes réalisations et compétences."
          des="Mes projets"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="PAIEMENT EN LIGNE"
          des=" Site web pour LME Location : agence spécialisée dans la location de voitures à la Réunion. Les réservations et le paiement d'acompte s'effectuent directement sur le site web. "
          src={lme}
        />
        <ProjectsCard
          title="Site E-commerce"
          des="Site web de vente en ligne de divers articles neufs à Antananarivo avec système de paiement intégré par carte bancaire ou Paypal."
          src={tsenaonline}
        />
        <ProjectsCard
          title="SITE DE LOCATION DE VOITURES"
          des="Plateforme en ligne permettant de réserver des voitures de l'agence ACIMMO à Antananarivo."
          src={acimmo}
        />
        <ProjectsCard
          title="S.I GESTION DE LOCATION"
          des=" Application web pour la gestion complète d'une agence de location de voitures, incluant la gestion des véhicules, des chauffeurs, du carburant, des trajets effectués, des missions, etc."
          src={appacimmo}
        />
        <ProjectsCard
          title="SITE VITRINE"
          des="Site internet dédié à la société FP MESIC, qui se focalise sur la vente en ligne de FUNHOL : éthanol combustible (énergie alternative au charbon et au gaz) ainsi que de réchauds à éthanol."
          src={mesic}
        />
        <ProjectsCard
          title="BIBLIOTHEQUE EN LIGNE"
          des=" Plateforme en ligne permettant aux étudiants de CenTIC-Mada de consulter des ouvrages en ligne. "
          src={centic}
        />
      </div>
    </section>
  );
}

export default Projects