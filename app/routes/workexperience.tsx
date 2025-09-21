import  Workexperience  from "../welcome/workexperience";
import type { Route } from "./+types/workexperience";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Travail" },
    { name: "Employeur avec présentation", content: "En html!" },
  ];
}


export default function workexperience() {
  return <Workexperience/>;
}