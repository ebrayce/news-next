# Simplified Online News Platform

## Overview

The Simplified Online News Platform is a web application built with Next.js. It fetches news articles from a public API, displays them in a grid layout, and allows users to filter articles by category and search using keywords. The application is designed to be responsive and optimized for performance.

## Demo
DEMO URL: https://news-next-omega.vercel.app/

## Features

### 1. Article Listing Page

- Displays a list of news articles fetched from a public news API (e.g., NewsAPI).
- Each article includes the title, description, image, and publication date.
- Pagination is implemented to navigate through different pages of articles.


### 2. Article Filtering

- Dropdown filter to filter articles by category (e.g., business, sports, technology, etc.).
- Search functionality to filter articles based on keywords present in the title or description.

### 3. Article Detail Page

- Clicking on an article navigates to a detailed page for that article.
- Displays the full content of the article along with its title, image, publication date, and author.

### 4. Responsive Design

- The application is fully responsive, ensuring usability on both desktop and mobile devices.

### 5. Performance Optimization

- Utilizes Next.js features like dynamic imports for better performance.
- Implements server-side rendering (SSR) or static site generation (SSG) where appropriate.

### 6. Error Handling

- Graceful handling of API errors with user-friendly error messages is implemented in the loadMoreNews function within the FullCategoryNews component. Specifically, the catch block captures any errors during the API fetch and displays a toast notification with the error message.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/)
- **CSS Framework:** Tailwind CSS (or CSS Modules/SCSS, if preferred)
- **Public API:** [NewsAPI](https://newsapi.org/) or another equivalent public news API

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v20 or later)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/ebrayce/news-next.git
   cd news-next
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the root of the project.
   - Add the following:
     ```env
     NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key_here
     NEXT_PUBLIC_API_BASE_URL=https://newsapi.org/v2
     DATABASE_URL=postgresql://postgres:password@localhost:5432/newsapi
     ```
4. Seed your database:
   ```bash
   npm run deploy:dev
   ```
   
5. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - Run the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run linter to check code quality
- `npm run lint` - Run linter to check code quality
- `npm run test` - Run tests with Jest

## Folder Structure

```
.
├── .env
├── .env.example
├── prisma
│   ├── migrations
│   │   └── ...
│   └── schema.prisma
├── public
│   └── ...
├── src
│   ├── app
│   │   └── page.tsx
│   ├── components
│   │   └── ...
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

## API Integration

- The application fetches data from the NewsAPI.
- Documentation for NewsAPI can be found [here](https://newsapi.org/docs).

## Performance Optimizations

- Dynamic imports for components to reduce bundle size.
- Server-side rendering (SSR) or static site generation (SSG) based on the use case.

## Error Handling

- Handles API errors by displaying error messages to users.
- Fallback UI for unresponsive or failed API requests.

## Responsive Design

- The application is tested and optimized for different screen sizes.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix.
3. Commit your changes and submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [NewsAPI](https://newsapi.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/)


