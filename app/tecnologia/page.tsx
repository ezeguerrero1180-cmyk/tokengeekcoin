import type { Metadata } from "next";
import TerritoryPage, { territories } from "../territory-page";

export const metadata: Metadata = {
  title: "Tecnología e IA",
  description: "Noticias y análisis sobre tecnología, inteligencia artificial y dispositivos en TokenGeekCoin.",
  alternates: { canonical: "/tecnologia" },
};

export default function TecnologiaPage() {
  return <TerritoryPage territory={territories[0]} />;
}
