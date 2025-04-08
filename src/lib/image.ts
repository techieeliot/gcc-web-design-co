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

export const generateBlurPlaceholder = (width: number, height: number) => {
  return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' fill='%23f1f5f9'/%3E%3C/svg%3E`;
};
