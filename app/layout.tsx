import type { Metadata } from "next";
import "./globals.css";
import "./v1-articles.css";
import "./magazine-geek.css";
import CookieConsent from "./cookie-consent";
import AdsenseLoader from "./adsense-loader";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tokengeekcoin.com"),
  title: { default: "TokenGeekCoin — Gaming, finanzas, tecnología y cultura geek", template: "%s | TokenGeekCoin" },
  description: "Noticias, ofertas y comparadores sobre gaming, inversiones, Bitcoin, inteligencia artificial, cómics y tecnología desde Jujuy.",
  applicationName: "TokenGeekCoin", authors: [{name:"Ezequiel Guerrero",url:"/autor/ezequiel-guerrero"}], creator:"Ezequiel Guerrero", publisher:"TokenGeekCoin",
  robots: { index:true, follow:true, googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
  alternates:{canonical:"/",types:{"application/rss+xml":"/feed.xml"}},
  openGraph:{title:"TokenGeekCoin — Gaming, finanzas y cultura geek",description:"Noticias, ofertas y comparadores para vivir el multiverso digital con criterio.",url:"/",siteName:"TokenGeekCoin",locale:"es_AR",type:"website",images:[{url:"/og.jpg",width:1200,height:630,alt:"TokenGeekCoin — Gaming, finanzas, tecnología y cultura geek"}]},
  twitter:{card:"summary_large_image",title:"TokenGeekCoin",description:"Gaming, inversiones, tecnología y cultura geek desde Jujuy.",images:["/og.jpg"]},
  icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
  other:{"google-adsense-account":"ca-pub-2403075217116144"}
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es-AR"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700;1,800&family=JetBrains+Mono:wght@600;700&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap"/></head><body>{children}<CookieConsent/><AdsenseLoader/></body></html>; }
