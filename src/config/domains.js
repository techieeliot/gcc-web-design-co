// Store both the full URLs and the hostnames
const domainUrls = [
  "https://sanfor.dev",
  "https://devsouth.us",
  "https://www.sanfordev.com",
  "https://www.sanfordev.io",
  "https://www.sanfordev.net",
];

// Extract just the hostnames for Next.js images config
const domainHostnames = domainUrls.map((url) => {
  // Remove https:// or http:// and get just the hostname
  return new URL(url).hostname;
});

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
