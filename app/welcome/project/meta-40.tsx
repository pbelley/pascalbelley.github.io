import { motion } from "framer-motion";

const experience = {
    title: "META 4.0",
    period: "2018 - 2020",
    entreprise: "PG Solutions / Harris Computer",
    description: `Développé spécifiquement pour le secteur manufacturier aérospatial, ce logiciel optimisait la saisie des données de production en temps réel. Il couvrait l'ensemble du processus de fabrication, depuis le découpage des matières premières jusqu'au contrôle final des pièces. 
    
    Conçu comme une preuve de concept en architecture client-serveur, il a été déployé avec succès entre les équipes de Québec et de Californie. 
    
    Les entrepreneurs à l'origine du projet ont figuré parmi les pionniers de l'industrie 4.0 au Québec, contribuant activement à la transformation numérique du secteur manufacturier. Cette solution a été remplacée ultérieurement par une version commercialisable.
`,
    roles: [
        "Analyste et développeur R&D",
        "Support client",
        "Maintenance et correction de bugs",
        "Gestion des rapports"
    ],
};

export default function meta40() {
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