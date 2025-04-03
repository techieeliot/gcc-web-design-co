const allDomains = [
  'https://sanfor.dev',
  'https://devsouth.us',
  'https://www.sanfordev.com',
  'https://www.sanfordev.io',
  'https://www.sanfordev.net',
]

export const domains = {
  // Primary domain (for canonical URLs)
  primary: allDomains[0],

  // All domains (for sitemap, alternate URLs, etc.)
  all: allDomains,

  // Alternate domains (for redirects if needed)
  alternate: allDomains.slice(1),

  // Legacy domain (for redirects if needed)
  legacy: allDomains[1],
}
