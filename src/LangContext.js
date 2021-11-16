import React from "react";

export const lang = {
    eng: {
        navProjects: "Projects",
        developer: "Web developer",
        desc: `I'm a <em>Full Stack</em> web developer who enjoys providing the best user experience possible.
        I especially like <em>creating tools</em> whether it is for other devs or regular users. Currently learning (mostly)
        Javascript & PHP stacks at <em>Web@cademie by Epitech</em>, in Paris.`,
        timelineDescWac: "Web development",
        timelineHeaderFac: "University Paris 1 Panthéon-Sorbonne",
        timelineDescFac: "Philosophy & History",
        timelineHeaderCondo: "Condorcet High School | Paris",
        timelineDescCondo: "Baccalauréat Général : Literature - mention 'Good'",
        education: "Education",
        expHeaderBabysitting: "Baby-sittings",
        expDescBabysitting: "Multiple baby-sittings, some ponctually, some weekly, with children of all ages. Help with homework",
        expHeaderIcom: "Intern - I-com",
        expDescIcom: "Job shadowing with a Webmaster : search engine optimization (SEO), Google Analytics, HTML",
        expHeaderTheater : "Comedian - Grand Théâtre de Dijon",
        expDescTheater: `Playing the role of Michel Morin, in the world premiere of "L'Opéra de la Lune", written by Prévert and directed by Damien Caille-Perret`,
        expHeaderISG: "Instructor in web development - ISG",
        expDescISG: "Tutoring ISG (Business school) students in the making of a website, using HTML, CSS & JQuery for the API calls. 1 week.",
    },
    fr: {
        navProjects: "Projets",
        developer: "Développeur web",
        desc: `Je suis un développeur web <em>Full Stack</em>, qui cherche à offrir la meilleure expérience utilisateur possible. 
        J'aime particulièrement <em>créer des outils</em> ou services, que ce soit pour d'autres devs ou pour des utilisateurs. 
        J'apprends actuellement le Javascript et le PHP à la <em>Web@cadémie by Epitech</em>, à Paris.`,
        timelineDescWac: "Développement Web",
        timelineHeaderFac: "University Paris 1 Panthéon-Sorbonne",
        timelineDescFac: "Philosophie & Histoire",
        timelineHeaderCondo: "Lycée Condorcet | Paris",
        timelineDescCondo: "Baccalauréat Général : Littéraire - Bien",
        education: "Formation",
        expHeaderBabysitting: "Babysittings",
        expDescBabysitting: "Multiples gardes d'enfants, régulières et ponctuelles, avec des enfants de tous âges, et aide aux devoirs",
        expHeaderIcom: "Stagiaire - I-com",
        expDescIcom: "Stage d'observation auprès d'un Webmaster : référencement (SEO), Google Analytics, HTML",
        expHeaderTheater : "Comédien - Grand Théâtre de Dijon",
        expDescTheater: `Interprétation du rôle de Michel Morin, dans la première mondiale de "l'Opéra de Lune", de Prévert et mis en scène par Damien Caille-Perret`,
        expHeaderISG: "Assistant de formation en développement web - ISG",
        expDescISG: "Tutorat pour l'ISG (Ecole de commerce) pour la création d'un site web, réalisé en HTML, CSS et JQuery pour les calls API. 1 semaine",
    },
}
export const LangContext = React.createContext(lang.eng);