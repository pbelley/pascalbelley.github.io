import { Link } from "react-router";
import  CVPascalBelleyStyled  from "../welcome/cvpascalbelleystyled";
import type { Route } from "./+types/cvlbgraph";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV Pascal Belley" },
    { name: "CV Pascal Belley lucide-react", content: "En lucide-react!" },
  ];
}

export default function cvlbgraph() {
  return <CVPascalBelleyStyled />;
}