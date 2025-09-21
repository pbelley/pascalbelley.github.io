import  Gidoc  from "../../welcome/project/gidoc";
import type { Route } from "../project/+types/suiteaurora";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gidoc" },
    { name: "Projet Gidoc", content: "En html!" },
  ];
}


export default function gidoc() {
  return <Gidoc />;
}