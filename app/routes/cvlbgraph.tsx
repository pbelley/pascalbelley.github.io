import { Link } from "react-router";
import  CVLeopoldBossoStyled  from "../welcome/cvleopoldbossostyled";
import type { Route } from "./+types/cvlbgraph";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV léopold Bosso" },
    { name: "CV léopold Bosso lucide-react", content: "En lucide-react!" },
  ];
}

export default function cvlbgraph() {
  return <CVLeopoldBossoStyled />;
}