import { motion } from "framer-motion";

const experience = {
  title: "SFM",
  period: "2020 - Aujourd'hui",
  entreprise: "PG Solutions / Harris Computer",
  description: `Suite logicielle incontournable pour la gestion financière des municipalités québécoises, elle regroupe des modules complets couvrant les finances, les comptes fournisseurs, la paie et la taxation.
  
  Forte de plus de 30 ans d'évolution, sa richesse fonctionnelle et sa complexité en ont fait un véritable terrain d'apprentissage pour plusieurs générations de développeurs. Son noyau initial, bâti en Visual Basic, a évolué jusqu'à la version 6, avant de s'ouvrir à des modules complémentaires en VB.NET. 
  
  Grâce à une interopérabilité renforcée au cours de la dernière décennie, cette architecture client-serveur a su s'adapter aux nouveaux standards. Malgré une interface qui trahit son âge, la solution demeure une référence, notamment grâce à son architecture métier robuste, aujourd'hui réutilisée au cœur d'Aurora.`,
  roles: [
    "Scrum Master & leader d'équipe",
    "Lien avec la direction et objectifs de l'équipe",
    "Analyste et développeur en R&D"
  ],
};

export default function SFM() {
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
