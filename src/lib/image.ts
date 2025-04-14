export const imageConfig = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  formats: ['image/webp'],
  minimumCacheTTL: 60,
  dangerouslyAllowSVG: true,
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
};

export const defaultImageSizes =
  '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

export function generateBlurPlaceholder(width: number, height: number) {
  return `data:image/svg+xml;base64,${Buffer.from(
    `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#CBD5E1"/>
    </svg>
  `
  ).toString('base64')}`;
}
