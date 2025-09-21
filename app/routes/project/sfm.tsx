import  SFM  from "../../welcome/project/sfm";
import type { Route } from "../project/+types/sfm";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "sfm" },
    { name: "Projet Suite SFM", content: "En html!" },
  ];
}


export default function sfm() {
  return <SFM />;
}