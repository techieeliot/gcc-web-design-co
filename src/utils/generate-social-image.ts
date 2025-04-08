export function generateSocialImageUrl(title: string, category: string) {
  // For a simple solution, use a service like og-image.vercel.app
  const encodedTitle = encodeURIComponent(title);
  const encodedCategory = encodeURIComponent(category);

  return `https://og-image.vercel.app/**${encodedTitle}**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fdevsouth.us%2Flogo.png&widths=auto&heights=250&heights=auto&tag=${encodedCategory}`;

  // For a more advanced solution, consider implementing a custom API route that generates
  // images using libraries like @vercel/og or creating prebuilt templates
}
