import  Meta40  from "../../welcome/project/meta-40";
import type { Route } from "../project/+types/meta-40";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "meta-40" },
    { name: "Projet Suite Aurora", content: "En html!" },
  ];
}


export default function meta40() {
  return <Meta40 />;
}