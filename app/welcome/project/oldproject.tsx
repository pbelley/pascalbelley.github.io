import { motion } from "framer-motion";

const experience = {
    title: "Anciens postes",
    period: "2001 - 2012",
    description: `Expérience variée incluant un rôle de militaire dans la Marine Nationale Française 
                          (sous-marinier puis chef de section), ainsi qu’un poste de manager en restauration rapide 
                          avec gestion du personnel, des stocks et de la comptabilité. Expérience en électricité et 
                          mécanique automobile.`,
    roles: [
        "Chef d’équipe et formateur",
        "Gestion RH et de magasin",
        "Relation client et recommandations",
        "Coordination des travaux",
        "Répartition des tâches aux équipes"
    ],
};

export default function oldproject() {
    return (
        <motion.div
            className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 p-4 scroll-mt-98"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-xl font-bold text-blue-800 mb-2">{experience.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{experience.period}</p>
            <p className="text-gray-700">{experience.description}</p>
            <ul className="mt-3 text-gray-700 list-disc pl-5">
                {experience.roles.map((role, i) => (
                    <li key={i}>{role}</li>
                ))}
            </ul>
        </motion.div>
    );
}