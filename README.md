# devSouth Consulting Website

A modern, responsive website built with Next.js for devSouth Consulting, showcasing our software development and technical consulting services.

## 🚀 Features

- Modern, responsive design using Tailwind CSS
- Server-side rendered pages for optimal performance
- Interactive case studies and portfolio showcase
- Dynamic table of contents for easy navigation
- Mobile-first approach with desktop enhancements
- Integrated contact forms and scheduling tools

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** Lucide Icons
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Development:** TypeScript
- **Testing:** Jest & React Testing Library
- **Deployment:** Vercel

## 🚦 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/devsouth.git
cd devsouth
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

4. **Start the development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                  # Next.js app router pages
├── components/          # Reusable UI components
├── lib/                 # Utility functions and helpers
├── styles/             # Global styles and Tailwind config
└── types/              # TypeScript type definitions
```

## 🧪 Running Tests

```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Check test coverage
npm run test:coverage
```

## 📚 Documentation

Additional documentation for components and features can be found in the `docs` directory.

### Key Components

- `ValueProposition` - Homepage value proposition section
- `ProjectShowcase` - Portfolio preview grid
- `TableOfContents` - Navigation for case studies
- `CaseStudy` - Template for portfolio case studies

## 🔄 Continuous Integration

The project uses GitHub Actions for CI/CD:

- Automated testing on pull requests
- Code quality checks with ESLint
- Type checking with TypeScript
- Automated deployments to Vercel

## 📝 License

Copyright © 2024 devSouth Consulting. All rights reserved.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions, please email [support@devsouth.dev](mailto:support@devsouth.dev)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- All contributors and team members
