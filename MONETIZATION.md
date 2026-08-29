# Activación de monetización

La primera fase queda desactivada por defecto y no inventa identificadores.

1. Cuando Google entregue el ID real, configurar `NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-...` en el entorno del sitio.
2. Reemplazar `public/ads.txt` por la línea exacta que muestre AdSense.
3. Confirmar en `/privacidad` los proveedores y finalidades realmente habilitados.
4. Convertir cada `AdSlot` en una unidad de anuncio solo después de definir sus IDs reales.
5. Reemplazar los botones desactivados de Ofertas y Comparadores únicamente con URLs de afiliado reales, conservando la divulgación comercial.

El cargador valida el formato del ID, evita cargar Google sin consentimiento opcional y no hace ninguna solicitud mientras el ID esté ausente.
