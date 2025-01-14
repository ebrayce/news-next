/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://localhost:3000', // Site domain. Do not include a trailing slash!
  generateRobotsTxt: true, // Generate robots.txt
  exclude: ['/api/*'], // Exclude API routes from the sitemap
  generateIndexSitemap: true, // Generate sitemap-index if needed

  // Additional paths for dynamic routes
  additionalPaths: async (config) => {
    const categories = ['business', 'sports', 'technology']; // Replace with dynamic categories if needed
    const newsItems = [
      { id: '1', title: 'sample-news-1' },
      { id: '2', title: 'sample-news-2' },
    ]; // Replace with dynamic news items if needed

    // Generate home page with query parameters
    const homePagePaths = [
      { loc: '/', changefreq: 'daily', priority: 1.0 }, // Home page without query
      { loc: '/?query=heloo', changefreq: 'daily', priority: 0.9 }, // Home page with query
    ];

    const categoryPaths = categories.map((category) => ({
      loc: `/${category}`, // E.g., /business, /sports, /technology
      changefreq: 'daily',
      priority: 0.8,
    }));

    const newsPaths = newsItems.map((news) => ({
      loc: `/news/${news.id}/${news.title}`, // E.g., /news/1/sample-news-1
      changefreq: 'daily',
      priority: 0.7,
    }));

    return [...homePagePaths, ...categoryPaths, ...newsPaths];
  },
};
