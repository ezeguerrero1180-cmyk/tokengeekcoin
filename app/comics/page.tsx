import type { Metadata } from "next";
import TerritoryPage, { territories } from "../territory-page";

export const metadata: Metadata = {
  title: "Cómics y Series",
  description: "Noticias y análisis de cómics, series y cultura geek en TokenGeekCoin.",
  alternates: { canonical: "/comics" },
};

export default function ComicsPage() {
  return <TerritoryPage territory={territories[3]} />;
}
