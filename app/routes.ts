import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes: RouteConfig = [index("routes/home.tsx"),

route("cvlbgraph", "routes/cvlbgraph.tsx"),
route("education", "routes/education.tsx"),
route("workexperience", "routes/workexperience.tsx"),
route("folio", "routes/folio.tsx", [
    index("routes/project/suiteauroraindex.tsx"),
    route("suiteaurora", "routes/project/suiteaurora.tsx"),
    route("gidoc", "routes/project/gidoc.tsx"),
    route("sfm", "routes/project/sfm.tsx"),
    route("meta-40", "routes/project/meta-40.tsx"),
    route("oldproject", "routes/project/oldproject.tsx"),
    // tu peux ajouter d'autres enfants ici
  ]),
];

export default routes;