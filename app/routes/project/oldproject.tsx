import  Oldproject  from "../../welcome/project/oldproject";
import type { Route } from "../project/+types/oldproject";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "oldproject" },
    { name: "Anciens projet", content: "En html!" },
  ];
}


export default function oldproject() {
  return <Oldproject />;
}