import  Education  from "../welcome/education";
import type { Route } from "./+types/education";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "école" },
    { name: "école avec présentation", content: "En html!" },
  ];
}


export default function education() {
  return <Education />;
}