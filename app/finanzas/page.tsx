import type { Metadata } from "next";
import TerritoryPage, { territories } from "../territory-page";

export const metadata: Metadata = {
  title: "Finanzas y Cripto",
  description: "Noticias y análisis de Bitcoin, criptomonedas, mercados e inversiones en TokenGeekCoin.",
  alternates: { canonical: "/finanzas" },
};

export default function FinanzasPage() {
  return <TerritoryPage territory={territories[2]} />;
}
