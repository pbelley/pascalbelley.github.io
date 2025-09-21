import { motion } from "framer-motion";
import { School, GraduationCap, HomeIcon, File, Briefcase, Book } from "lucide-react";
import { useEffect, useState } from "react";
import BannerAndNavigation from "~/components/ui/navigation";

const schools = [
    {
        name: "Scrum.org",
        degree: "Certificat PSM 1 – 2024",
        description: "Certificat de scrum master professionnel.",
        image: "/psm.svg",
    },
    {
        name: "Université de Bretagne Occidentale (UBO) - France",
        name2: "Université du Québec à Chicoutimi (UQAC) - Québec",
        degree: "Master en Informatique - 2018",
        description: "Master en Informatique expérimental, parcours à l'UQAC orienté sur l'intelligence artificielle",
        image: "/logoUBO.png",
        image2: "/logoUQAC.png",
    },
    {
        name: "Université de Polynésie Française - Tahiti",
        name2: "Université de Bretagne Occidentale (UBO) - France",
        degree: "Licence en informatique - 2016",
        description: "Licence en informatique général, équivalent au Baccalauréat.",
        image: "/logoUPF.png",
        image2: "/logoUBO.png",
    },
    {
        name: "Lycée Marie-Madelaine Fourcade - France",
        degree: "Bacalaureat électrotechnique - 2000",
        description: "Bacalaureat électrotechnique général, équivalent au DEC.",
        image: "/mmf.png",
    },
    
    
];



export default function Education() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6 pt-[9rem]">
            <BannerAndNavigation/>

            {/* Contenu principal (avec padding compensé) */}
            <div className="space-y-6 max-w-4xl mx-auto">
                {schools.map((school, index) => (
                    <motion.div
                        key={index}
                        className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 p-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                    >
                        <div className="md:flex">
                            {/* Zone d'image / logo à gauche */}
                            <div className="md:w-32 bg-gray-100 p-2 flex flex-col items-center justify-center gap-4">
                                <img
                                    src={school.image}
                                    alt={school.name}
                                    className="w-[80px] h-[80px] object-contain"
                                />
                                {school.image2 && (
                                    <img
                                        src={school.image2}
                                        alt={school.name2}
                                        className="w-[80px] h-[80px] object-contain"
                                    />
                                )}
                            </div>

                            {/* Informations à droite */}
                            <div className="p-4 flex-1">
                                {/* Titre et diplôme */}
                                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                    <GraduationCap className="w-5 h-7 text-green-600" />
                                    {school.degree}
                                </h2>

                                {/* Première école */}
                                <div className="flex items-center gap-3">
                                    <School className="w-6 h-12 text-blue-600" />
                                    <h3 className="text-lg">{school.name}</h3>
                                </div>

                                {/* Deuxième école, si disponible */}
                                {school.name2 && (
                                    <div className="flex items-center gap-3 mt-2">
                                        <School className="w-6 h-12 text-blue-600" />
                                        <h3 className="text-lg">{school.name2}</h3>
                                    </div>
                                )}

                                <div className="flex items-center gap-3">
                                    <p className="mt-4 text-gray-700">
                                        {school.description}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}