import { motion } from "framer-motion";

const experience = {
  title: "Logiciel GIDOC",
  period: "2020 - Aujourd’hui",
  entreprise: "PG Solutions / Harris Computer",
  description: `Solution puissante de génération documentaire à haut volume, cet outil est idéal pour produire des documents complexes comme les comptes de taxes municipaux. 
  
  Conçu pour s'intégrer de façon transparente à l'ensemble des logiciels PG Solutions, notamment Aurora, il prend en charge la production de documents essentiels tels que les talons de paie et les relevés fiscaux. 
  
  Son moteur multithread offre de bonne performance, combinant souplesse d'utilisation et réduction significative des temps d'exécution. Actuellement basé sur FastReport, son architecture modulaire a été pensée dès le départ pour offrir une liberté totale : il est prêt à accueillir, remplacer ou combiner tout autre générateur de rapports, selon les besoins de l'organisation.
`,
  roles: [
    "Analyste développeur de solutions",
    "Mentor GIDOC & Fastreport",
    "Mentor en programmation parallèle",
    "Formateur et facilitateur d'intégration"
  ],
};

export default function gidoc() {
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