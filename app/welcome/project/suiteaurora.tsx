import { motion } from "framer-motion";

const experience = {
  title: "Suite Aurora",
  period: "2021 - Aujourd'hui",
  entreprise: "PG Solutions / Harris Computer",
  description: `Projet d'envergure mené par PG Solutions, cette initiative vise à offrir une suite financière complète et moderne aux municipalités du Québec.
  
  Mes équipes assurent la réécriture des solutions existantes pour plusieurs grandes villes, avec un focus actuel sur les modules Paie & RH, tout en préparant activement les prochaines phases du programme. À ce jour, quatre projets majeurs s'appuient sur Aurora, dont le plus récent intègre un module innovant de lecture de factures basé sur l'intelligence artificielle. L'ensemble repose sur une architecture SaaS robuste, pensée pour l'évolutivité.
  
  Fort de l'expérience métier capitalisée au sein de l'organisation, ce projet s'impose comme le futur produit phare du secteur municipal québécois, renforçant les liens entre PG Solutions et ses partenaires pour répondre aux défis émergents du 21e siècle.
`,
  roles: [
    "Coordonnateur",
    "Scrum Master",
    "Gestionnaire de projet",
    "Facilitateur d'équipe",
    "Préparateur de projets additionnels"
  ],
};


export default function suiteaurora() {
  return (
    <motion.div
      className="p-4 bg-white border border-gray-200 rounded-2xl shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Titre centré */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-blue-800">{experience.title}</h2>
        <p className="text-gray-600 text-sm">{experience.period}</p>
      </div>

      {/* Grid asymétrique en desktop */}
      <div className="flex flex-col md:flex-row md:gap-8">
        {/* Colonne gauche */}
        <div className="md:w-2/5 space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Entreprise</h3>
            <p className="text-gray-700">{experience.entreprise}</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md md:mt-10">
            <h3 className="font-semibold">Rôles</h3>
            <ul className="list-disc pl-5 text-gray-700">
              {experience.roles.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Colonne droite avec décalage */}
        <div className="md:w-3/5 mt-6 md:mt-16">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md h-full">
            <h3 className="font-semibold">Description</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {experience.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}