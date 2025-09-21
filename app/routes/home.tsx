import { Welcome } from "~/welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Site de présentation" },
    { name: "description", content: "Bienvenue sur mon site de présentation" },
  ];
}

export default function home() {
  return <Welcome />;
}