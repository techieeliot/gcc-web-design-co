const domainUrls = [
  'https://sanfor.dev', // Primary domain
  'https://www.sanfordev.io',
  'https://www.sanfordev.com',
  'https://www.sanfordev.net',
  'https://devsouth.us',
];

// Extract just the hostnames for Next.js images config
const domainHostnames = domainUrls.map((url) => new URL(url).hostname);

const domains = {
  // Primary domain (for canonical URLs)
  primary: domainUrls[0],
  primaryHostname: domainHostnames[0],

  // All domains
  all: domainUrls,
  allHostnames: domainHostnames,

  // Alternate domains (for redirects)
  alternate: domainUrls.slice(1),
  alternateHostnames: domainHostnames.slice(1),
};

module.exports = {
  domains,
  domainUrls,
  domainHostnames,
};
