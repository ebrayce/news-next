const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://localhost:3000', // Site domain. Do not include a trailing slash!
  generateRobotsTxt: true, // Generate robots.txt
  exclude: ['/api/*'], // Exclude API routes from the sitemap
  generateIndexSitemap: false,

  // Additional paths for dynamic routes
  additionalPaths: async (config) => {
    // Fetch categories dynamically from the database
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // Fetch news dynamically from the database
    const newsItems = await prisma.news.findMany({
      select: {
        id: true,
        title: true,
      },
    });

    // Generate home page paths
    const homePagePaths = [
      { loc: '/', changefreq: 'daily', priority: 1.0 }, // Home page without query
      { loc: '/?query=heloo', changefreq: 'daily', priority: 0.9 }, // Home page with query
    ];

    // Generate category paths for each category
    const categoryPaths = categories.map((category) => ({
      loc: `/${category.name.toLowerCase()}`, // Example: /business, /sports, etc.
      changefreq: 'daily',
      priority: 0.8,
    }));

    // Generate news paths for each news item
    const newsPaths = newsItems.map((news) => ({
      loc: `/news/${news.id}/${news.title.replace(/\s+/g, '-').toLowerCase()}`, // Dynamic news path
      changefreq: 'daily',
      priority: 0.7,
    }));

    // Return all paths to be included in the sitemap
    return [...homePagePaths, ...categoryPaths, ...newsPaths];
  },
};
