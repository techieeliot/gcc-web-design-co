import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/');
  }

  async getTitle() {
    return await this.page.title();
  }

  async waitForHeroSection() {
    // Wait for hero section to be visible
    await this.page.waitForSelector('[data-testid="hero-section"]');

    // Wait for main heading
    const heading = await this.page.waitForSelector('h1');
    expect(await heading.textContent()).toContain(
      'Digital Solutions You Can Grow With'
    );
  }

  async waitForAllSections() {
    // Wait for all main sections to be visible
    await Promise.all([
      this.page.waitForSelector('[data-testid="hero-section"]'),
      this.page.waitForSelector('[data-testid="features-section"]'),
      this.page.waitForSelector('[data-testid="blog-highlight-section"]'),
      this.page.waitForSelector('[data-testid="showcase-section"]'),
      this.page.waitForSelector('[data-testid="cta-section"]'),
    ]);
  }

  async verifyHeroContent() {
    const heroSection = await this.page.getByTestId('hero-section');
    await expect(heroSection).toBeVisible();
    await expect(
      heroSection.getByText('React & Next.js Specialists')
    ).toBeVisible();
    await expect(
      heroSection.getByRole('link', { name: 'Get Started' })
    ).toBeVisible();
  }
}
