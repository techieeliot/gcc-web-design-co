import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SANFORDEV Consulting',
    short_name: 'SANFORDEV',
    description: 'Expert React ecosystem development services',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0EA5E9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
