import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { School, Book, File, Briefcase, Home, ChevronDown } from "lucide-react";

const linkedPages = [
  { icon: Home, link: "", titlePage: "Accueil" },
  { icon: School, link: "education", titlePage: "Études" },
  { icon: Briefcase, link: "workexperience", titlePage: "Expériences" },
  {
    icon: Book,
    link: "folio",
    titlePage: "Projets",
    subPages: [
      { link: "folio/suiteaurora", titlePage: "Suite Aurora" },
      { link: "folio/gidoc", titlePage: "Gidoc" },
      { link: "folio/sfm", titlePage: "SFM" },
      { link: "folio/meta-40", titlePage: "Meta 4.0" },
    ],
  },
  { icon: File, link: "cvlbgraph", titlePage: "CV" },
];

const BannerAndNavigation: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const activeItemRef = useRef<HTMLDivElement | null>(null);
  let timeoutId: ReturnType<typeof setTimeout>;

  // 🔹 Recentre l'élément actif en mobile
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    }
  }, [location.pathname]);

  return (
    <div className="print:hidden fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50">
      <nav className="mt-2 bg-gray-100 shadow-xl shadow-gray-500/30 px-6 py-3 rounded-xl flex justify-center items-center">
        <div className="relative w-full">
          <div className="md:overflow-visible overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 whitespace-nowrap px-2 md:justify-center min-w-max">
              {linkedPages.map((page) => {
                const isOpen = hoveredItem === page.titlePage;
                const hasSub = !!page.subPages;
                const isActive = page.link !== "" && location.pathname.startsWith(`/${page.link}`);

                return (
                  <div
                    key={page.titlePage}
                    className="relative"
                    ref={isActive ? activeItemRef : null} // Recentre l'élément actif sur mobile
                    onMouseEnter={() => { clearTimeout(timeoutId); hasSub && setHoveredItem(page.titlePage) }}
                    onMouseLeave={(e) => {
                      timeoutId = setTimeout(() => {
                        setHoveredItem(null);
                      }, 150);
                      if (!(e.relatedTarget as Node)?.contains(e.currentTarget)) {
                        setHoveredItem(null);
                      }
                    }}
                  >
                    <Link
                      to={`/${page.link}`}
                      className={`flex items-center gap-2 px-4 py-2 rounded  
                        ${isActive ? "text-blue-600 font-bold" : "text-gray-800 hover:text-blue-600"}`}
                    >
                      {page.icon && <page.icon className="w-5 h-5" />}
                      {page.titlePage}
                      {hasSub && <ChevronDown className="hidden md:inline w-3 h-3 text-gray-400 ml-0.5" />}
                    </Link>

                    {hasSub && isOpen && (
                      <div className="hidden md:block absolute left-0 top-full mt-1 w-36 bg-gray-100 border border-gray-300 shadow-lg rounded-lg z-10">
                        {page.subPages.map((sub) => (
                          <Link
                            key={sub.titlePage}
                            to={`/${sub.link}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setHoveredItem(null)}
                          >
                            {sub.titlePage}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default BannerAndNavigation;