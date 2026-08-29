import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export default function SiteImage({
  src,
  alt,
  width = 1600,
  height = 900,
  sizes = "(max-width: 760px) 100vw, 50vw",
  priority = false,
  className,
}: SiteImageProps) {
  if (!src.startsWith("/")) {
    return <img src={src} alt={alt} width={width} height={height} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" className={className}/>;
  }

  return <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} quality={78} className={className}/>;
}
