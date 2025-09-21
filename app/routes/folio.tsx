import  Folio  from "../welcome/folio";
import type { Route } from "./+types/folio";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "folio" },
    { name: "folio des projets", content: "En html!" },
  ];
}


export default function folio() {
  return <Folio />;
}