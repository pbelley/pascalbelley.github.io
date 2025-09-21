import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BannerAndNavigation from "~/components/ui/navigation";
import { Book, School, File } from "lucide-react";

const experiences = [
    {
        name: "PG Solutions – Québec, QC",
        role: "Coordonnateur, Scrum Master R&D",
        date: "2022 – aujourd’hui'hui",
        image: "https://pgsolutions.com/wp-content/themes/understrap-child/images/logo.svg",
        description: "Responsable de la gestion des systèmes d'information, amélioration des processus internes, accompagnement des équipes.",
        responsabilities: ["Gestion de projets : Aurora, GIDOC, SFM", "Animation Scrum, coordination agile", "Implémentation de modules IA, RH, paie", "Gestion RH : suivi, repartition, recrutement"],
    },
    {
        name: "PG Solutions – Québec, QC",
        role: "Scrum Master & Analyste Développeur R&D",
        date: "2020 – 2022",
        image: "https://pgsolutions.com/wp-content/themes/understrap-child/images/logo.svg",
        description: "Responsable de la gestion des systèmes d'information, amélioration des processus internes, accompagnement des équipes.",
        responsabilities: ["Développement logiciel, mentorat", "Intégration FastReport", "support équipe"],
    },
    {
        name: "APN Global – Québec, QC",
        role: "Analyste Développeur R&D",
        date: "2018 – 2020",
        image: "https://apnglobal.ca/wp-content/uploads/APN-logo-bolder.svg",
        description: "Responsable de la gestion des systèmes d'information, amélioration des processus internes, accompagnement des équipes.",
        responsabilities: ["Développement logiciel", "Rapports, Maintenance", "Support client"],
    },
    {
        name: "Retour aux études - Tahiti - Polynésie française",
        role: "Étudiant",
        date: "2012 – 2018",
        image: "https://cdn.tahitiheritage.pf/wp-content/uploads/2015/01/embleme-polynesie-franc%CC%A7aise-1.jpg",
        description: null,
        responsabilities: [],
    },
    {
        name: "Norauto - Martigues, France",
        role: "Mécanicien, électricien auto et responsable adjoint aux 2 roues",
        date: "2008 – 2012",
        image: "https://norauto-guyane.fr//wp-content/uploads/2018/04/logo_norauto.png",
        description: "Mécanicien automobile, installateur électrique et audio, entretien des 2 roues.",
        responsabilities: ["Entretien mécanique courant", "Remplacement de vitre", "audio, alarme et système électrique complexe", "maintenance complète et carrosserie des 2 roues", "Support client"],
    },
    {
        name: "McDonald's – Vitrolles, France",
        role: "Manager de restaurant",
        date: "2008 – 2008",
        image: "/mcdonald.png",
        description: "Responsable de la gestion d'un restaurant, respect des processus et reglementation alimentaire, accompagnement des équipes.",
        responsabilities: ["Gestion des stock", "Commande produit et inventaire", "Gestion RH : suivi, repartition", "Service à la clientèle"],
    },
    {
        name: "Marine nationale – Brest, France",
        role: "Sous-officier Électricien, chef d'équipe",
        date: "2001 – 2008",
        image: "/MarineNationale.svg",
        description: "Électricien sous-officier dans les forces armées française, chef d'équipe et formateur en école de formation.",
        responsabilities: ["Électricité naval en sous marin", "Gestion de stock", "Gestion du personnel", "Formation initial militaire "],
    },
];



export default function Workexperience() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

    const toggleExpansion = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index) // Fermer la carte
                : [...prev, index]               // Ouvrir la carte
        );
    };


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="max-w-4xl mx-auto p-6 pt-[9rem]">
            <BannerAndNavigation />
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        layout
                        transition={{ layout: { duration: 0.2, ease: "easeInOut" } }}
                        className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 print:break-inside-avoid"
                    >
                        <div className="md:flex">
                            <img src={exp.image} alt={exp.name} className="w-full md:w-48 max-h-40 object-contain flex-shrink-0 bg-gray-100" />
                            <div className="p-4 flex-1">
                                <h2 className="text-xl font-bold text-gray-800">{exp.name}</h2>
                                <p className="text-gray-600">{exp.role}</p>
                                <p className="text-sm text-gray-500">{exp.date}</p>

                                {expandedIndexes.includes(index) && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="mt-4 text-gray-700"
                                    >
                                        {exp.description}
                                        {exp.responsabilities && (
                                            <ul className="list-disc list-inside pl-6 text-gray-600">
                                                {exp.responsabilities.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </motion.p>
                                )}
                                {(exp.description || exp.responsabilities?.length > 0) && (
                                    <button
                                        className="mt-4 text-blue-600 hover:underline"
                                        onClick={() => toggleExpansion(index)}
                                    >
                                        {expandedIndexes.includes(index) ? "Réduire" : "En savoir plus"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
