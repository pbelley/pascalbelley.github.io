import  Suiteaurora  from "../../welcome/project/suiteaurora";
import type { Route } from "../project/+types/suiteaurora";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "suiteaurora" },
    { name: "Projet Suite Aurora", content: "En html!" },
  ];
}


export default function suiteaurora() {
  return <Suiteaurora />;
}