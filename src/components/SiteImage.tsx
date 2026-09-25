import React, { useState } from 'react';
import { CATEGORY_FALLBACK_IMAGES } from '../utils/articleUtils';

interface SiteImageProps {
  src: string;
  alt: string;
  category?: string;
  className?: string;
  aspectRatio?: 'video' | 'portrait' | 'square' | 'hero' | 'auto';
  objectFit?: 'cover' | 'contain';
  priority?: boolean;
  onClick?: () => void;
  width?: number | string;
  height?: number | string;
  sizes?: string;
}

export const SiteImage: React.FC<SiteImageProps> = ({
  src,
  alt,
  category = 'DEFAULT',
  className = '',
  aspectRatio = 'video',
  objectFit = 'cover',
  priority = false,
  onClick,
  width: _width,
  height: _height,
  sizes: _sizes,
}) => {
  const [hasError, setHasError] = useState(false);
  const [retryWithAltExt, setRetryWithAltExt] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Compute final image source
  let currentSrc = src;

  if (hasError) {
    currentSrc = CATEGORY_FALLBACK_IMAGES[category] || CATEGORY_FALLBACK_IMAGES['DEFAULT'];
  } else if (retryWithAltExt) {
    if (src.endsWith('.webp')) {
      currentSrc = src.replace(/\.webp$/, '.jpg');
    } else if (src.endsWith('.jpg')) {
      currentSrc = src.replace(/\.jpg$/, '.webp');
    } else if (src.endsWith('.png')) {
      currentSrc = src.replace(/\.png$/, '.webp');
    }
  }

  // Optimize Unsplash images if possible
  if (currentSrc.includes('images.unsplash.com')) {
    try {
      const url = new URL(currentSrc);
      if (!url.searchParams.has('auto')) url.searchParams.set('auto', 'format');
      if (!url.searchParams.has('fit')) url.searchParams.set('fit', 'crop');
      if (!url.searchParams.has('q')) url.searchParams.set('q', '85');
      currentSrc = url.toString();
    } catch {
      // keep as is
    }
  }

  const aspectClass = aspectRatio === 'auto'
    ? ''
    : {
        video: 'aspect-[16/9]',
        portrait: 'aspect-[4/5]',
        square: 'aspect-square',
        hero: 'aspect-[16/9] md:aspect-[21/9]',
      }[aspectRatio];

  const fitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover';

  const handleError = () => {
    if (!retryWithAltExt && (src.endsWith('.webp') || src.endsWith('.png') || src.endsWith('.jpg'))) {
      setRetryWithAltExt(true);
    } else {
      setHasError(true);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-stone-200 ${aspectClass} ${className} group`}
      onClick={onClick}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 animate-pulse" />
      )}

      <img
        src={currentSrc}
        alt={alt || 'Imagen de la noticia en TokenGeekCoin'}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full ${fitClass} transition-transform duration-500 group-hover:scale-[1.02] ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Subtle vignette border for editorial polish */}
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5" />
    </div>
  );
};
