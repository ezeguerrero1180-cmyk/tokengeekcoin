import { readFile } from "node:fs/promises";
import vm from "node:vm";
const source=await readFile(new URL("../app/daily-articles.ts",import.meta.url),"utf8");
const executable=`${source.replace("export const dailyArticles =","globalThis.dailyArticles =")}\n`;
const context=vm.createContext(Object.create(null));
new vm.Script(executable,{filename:"app/daily-articles.ts"}).runInContext(context);
const articles=context.dailyArticles,errors=[],seenSlugs=new Set();
const allowedCategories=new Set(["GAMING","FINANZAS + CRIPTO","TECNOLOGÍA + IA","CÓMICS + SERIES"]);
const isUrl=value=>typeof value==="string"&&/^https?:\/\//.test(value);
for(const [index,article] of articles.entries()){
 const label=article?.slug||`artículo #${index+1}`;
 if(!article?.slug||!/^(gaming|finanzas|tecnologia|comics)\/[a-z0-9-]+$/.test(article.slug))errors.push(`${label}: slug inválido`);
 if(seenSlugs.has(article?.slug))errors.push(`${label}: slug duplicado`);seenSlugs.add(article?.slug);
 if(!allowedCategories.has(article?.category))errors.push(`${label}: categoría no reconocida (${article?.category})`);
 if(!article?.dateIso||Number.isNaN(Date.parse(article.dateIso)))errors.push(`${label}: dateIso inválida`);
 if(!article?.title||article.title.length<20)errors.push(`${label}: título demasiado corto`);
 if(!article?.dek||article.dek.length<60)errors.push(`${label}: bajada demasiado corta`);
 if(!article?.personalAngle)errors.push(`${label}: falta personalAngle`);
 if(!article?.image||!article?.imageAlt)errors.push(`${label}: falta imagen principal o alt`);
 if(!Array.isArray(article?.body)||article.body.length<2)errors.push(`${label}: cuerpo insuficiente`);
 if(!Array.isArray(article?.features)||article.features.length<2)errors.push(`${label}: se requieren al menos dos bloques visuales`);
 const images=[article?.image,...(article?.features??[]).map(f=>f?.image)].filter(Boolean),alts=[article?.imageAlt,...(article?.features??[]).map(f=>f?.alt)].filter(Boolean);
 if(new Set(images).size<3)errors.push(`${label}: se requieren tres imágenes diferentes`);
 if(alts.length<3||alts.some(alt=>alt.length<12))errors.push(`${label}: faltan textos alternativos descriptivos`);
 if(!Array.isArray(article?.sources)||article.sources.length<3)errors.push(`${label}: se requieren al menos tres fuentes/créditos`);
 for(const s of article?.sources??[])if(!s?.name||!isUrl(s?.url))errors.push(`${label}: fuente o URL inválida`);
}
if(errors.length){console.error(`Validación editorial fallida (${errors.length} problemas):`);for(const error of errors)console.error(`- ${error}`);process.exitCode=1}else console.log(`Contenido válido: ${articles.length} artículos, sin slugs duplicados y con imágenes, alt y fuentes.`);
