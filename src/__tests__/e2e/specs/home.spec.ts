import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Home Page', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test('should load successfully with all content', async () => {
    // Wait for page title
    expect(await homePage.getTitle()).toContain('React Ecosystem Specialists');

    // Wait for hero section and verify content
    await homePage.waitForHeroSection();
    await homePage.verifyHeroContent();

    // Wait for all sections to load
    await homePage.waitForAllSections();
  });

  test('should have working navigation links', async ({ page }) => {
    await homePage.waitForHeroSection();

    // Click the Get Started button and verify navigation
    await page.click('text=Get Started');
    await expect(page).toHaveURL(/.*\/contact/);
  });
});
