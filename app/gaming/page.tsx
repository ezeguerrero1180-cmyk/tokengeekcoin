import type { Metadata } from "next";
import TerritoryPage, { territories } from "../territory-page";

export const metadata: Metadata = {
  title: "Gaming",
  description: "Anuncios, lanzamientos y análisis de videojuegos en TokenGeekCoin.",
  alternates: { canonical: "/gaming" },
};

export default function GamingPage() {
  return <TerritoryPage territory={territories[1]} />;
}
