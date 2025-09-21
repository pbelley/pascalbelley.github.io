import { Card, CardContent } from "app/components/ui/card";
import { Badge } from "app/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, HomeIcon, Briefcase, School, Book } from "lucide-react";
import { motion } from "framer-motion";
import BannerAndNavigation from "~/components/ui/navigation";


export default function CVLeopoldBossoStyled() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-white to-blue-50 space-y-8 ">
        <div className="print:hidden pt-[5rem]"/>
        <BannerAndNavigation />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-white to-blue-50 space-y-8">

            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-extrabold text-blue-900">Léopold Bosso</h1>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-blue-700">
                <span className="flex items-center gap-2"><Phone size={16} /> (581) 669-1018</span>
                <a href="mailto:leopold.bosso@outlook.com">
                  <span className="flex items-center gap-2"><Mail size={16} /> leopold.bosso@outlook.com</span>
                </a>
                <a href="https://linkedin.com/in/lbosso">
                  <span className="flex items-center gap-2"><Linkedin size={16} /> linkedin.com/in/lbosso</span>
                </a>
                <span className="flex items-center gap-2"><MapPin size={16} /> Lévis, QC</span>
              </div>
            </div>

            {/* Profil */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6 space-y-2">
                <h2 className="text-2xl font-semibold text-blue-800">Profil professionnel</h2>
                <p className="text-gray-700">
                  Professionnel passionné par la gestion de projet, le développement personnel et les ressources humaines, avec plus de 4 ans d'expérience. Compétent en coordination, analyse et mentorat, prêt à relever de nouveaux défis dans un nouveau poste technique ou organisationnelle. Je maitrise facilement de nouveaux concepts et intègre facilement les différents aspects et approches nécessaires à un nouveau poste. Je suis disponible pour relever tous les défis qui me seront proposés.
                </p>
              </CardContent>
            </Card>


            {/* Compétences */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Compétences clés</h2>
                <div className="flex flex-wrap gap-3">
                  {['Gestion d\'équipes', 'Gestion de projet','Mentorat', 'Suite Office','Scrum', 'Kanban', 'DevOps',  'C#, C, C++, SQL, HTML/CSS', 'FastReport',  'TI', 'Français', 'Anglais'].map(skill => (
                    <Badge key={skill} variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expérience */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-blue-800">Expérience professionnelle</h2>

                <div>
                  <h3 className="text-lg font-bold">PG Solutions – Québec, QC</h3>
                  <p className="italic">Coordonnateur, Scrum Master R&D | 2022 – aujourd’hui</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Gestion de projets : Aurora, GIDOC, SFM</li>
                    <li>Animation Scrum, coordination agile</li>
                    <li>Implémentation de modules IA, RH, paie</li>
                  </ul>
                  <p className="italic mt-2">Scrum Master & Analyste Développeur R&D | 2020 – 2022</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Développement logiciel, mentorat</li>
                    <li>Intégration FastReport, support équipe</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">APN Global – Québec, QC</h3>
                  <p className="italic">Analyste Développeur R&D | 2018 – 2020</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Développement de META 4.0</li>
                    <li>Maintenance, support client, rapports</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Expériences antérieures – France | 2001 – 2012</h3>
                  <p className="font-bold text-gray-700">Marine Nationale</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Électricien naval </li>
                    <li>Électricien sous marinier sur sous marin nucléaire</li>
                    <li>Chef de section (gestion de personnel et mentorat)</li>
                    <li>Planification et préparation des stocks</li>
                  </ul>
                  <p className="font-bold text-gray-700">Adjoint électricien Norauto (centre auto)</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Mécanique de base</li>
                    <li>Électricien auto</li>
                  </ul>
                  <p className="font-bold text-gray-700">Manager - McDonald's </p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Gestion de restaurant</li>
                    <li>Gestion des stocks</li>
                    <li>Gestion de personnel et planification</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Formation */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">Formation académique</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Certificat PSM1 - Scrum.org | 2024</li>
                  <li>Maîtrise en Informatique - UBO & UQAC | 2018</li>
                  <li>Licence (Baccalauréat) - Lycée Faa'a & UBO | 2016</li>
                  <li>Baccalauréat électrotechnique (France) - Lycée Gardanne | 2000</li>
                </ul>
              </CardContent>
            </Card>

            {/* PROJETS MARQUANTS */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-blue-800">Projets marquants</h2>
                <div>
                  <h3 className="text-lg font-bold">Suite Aurora</h3>
                  <p className="italic">Réécriture de logiciels financiers pour plusieurs villes,
                    intégration RH et paie, coordination d’équipe et facilitation Agile</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold">GIDOC</h3>
                  <p className="italic">Générateur de documents automatisés,
                    utilisé dans les modules de paie de la suite Aurora et les logiciels légataire</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold">SFM</h3>
                  <p className="italic">Logiciel légataire de gestion financière pour municipalités,
                    maintien et migration vers Aurora</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold">META 4.0 </h3>
                  <p className="italic">Outil de gestion de production pour l’industrie aérospatiale</p>
                </div>
              </CardContent>
            </Card>

            {/* Centres d’intérêt */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">Centres d’intérêt</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Technologies et innovation</li>
                  <li>Littérature, cinéma, jeux vidéo</li>
                  <li>Vie de famille et interactions sociales</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
  );
}

