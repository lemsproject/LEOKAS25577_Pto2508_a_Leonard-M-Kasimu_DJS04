# React Podcast Explorer

## Project Overview

This project is a React-based podcast browsing experience built to help users discover, search, filter, sort, and paginate through podcast listings with a clean, responsive interface.

The app emphasizes fast, user-friendly interactions by keeping search, filter, sort, and pagination controls synchronized so users can refine results without losing context.

## Purpose

The goal is to provide an intuitive podcast discovery tool that demonstrates practical UI state management in React, while making it easy to explore large podcast collections.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal to view the app in your browser.

## Usage

- Type in the search bar to find podcasts by title.
- Choose a genre from the filter dropdown to narrow the list to a specific category.
- Use the sort control to reorder podcasts by title or newest updated.
- Navigate between pages to browse a limited number of podcasts at a time.

## Key Features

### Search

The search feature lets users type a keyword and instantly filter podcast titles. It updates results as the user types and works together with the active filter, sort, and pagination settings.

### Filter

Genre filtering enables users to view podcasts from a specific category. Selecting a genre applies the filter immediately and preserves the search and sort state.

### Sort

The sort control allows users to reorder podcasts by title or newest release date. Sorting updates the displayed list without resetting the active search, filter, or pagination state.

### Pagination

Pagination breaks the podcast collection into manageable pages, improving navigation and performance. It keeps the current search, filter, and sort selections intact while moving between pages.

## Notes

- The app uses React context to coordinate state across components.
- Styling is handled through component-level CSS modules.
- The project is designed for clarity, ease of extension, and a smooth browsing experience.

## About the Author

- I am a React developer focused on building user-friendly interfaces and interactive web applications.
- I enjoy creating projects that demonstrate clean state management and responsive design.
- This project reflects my interest in making data exploration simple and enjoyable.
- I am constantly refining my skills in frontend development, especially with React and modern JavaScript.
- I welcome collaboration, feedback, and opportunities to improve app usability.

## Contact

- Email: leonardmsd@gmail.com
- LinkedIn: https://www.linkedin.com/in/lemsprojects
- GitHub: https://github.com/lemsprojects
- Feel free to reach out for project questions, improvement suggestions, or freelance work.
- Mobile: +27 73 878 8941
- Location: Durban, South Africa
- I am open to connecting with other developers, sharing knowledge, and contributing to interesting projects.
- Thank you for checking out my podcast explorer project! I hope it provides a useful and enjoyable experience for discovering new podcasts.
