# TempleAPI

This project contains both the API and React frontend.

## API

The API is built using the following technologies:

- Express: A fast, unopinionated, minimalist web framework for Node.js.
- Cors: A package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- Nodemon: A utility that monitors any changes in your source and automatically restarts your server.

The API provides the following endpoints:

- `GET /api/data`: Retrieve all data
- `GET /api/data/:id`: Retrieve a specific item by ID
- `POST /api/data`: Create a new item - accepts JSON
- `PATCH /api/data/:id`: Update an existing item by ID - accepts JSON
- `DELETE /api/data/:id`: Delete an item by ID

# React-based Frontend Readme

This project is a React-based frontend that uses the following technologies:

- React for building the UI components
- React Router DOM for routing between pages
- Context for data binding between components
- Fetch API for making requests to the Express server

## Pages

The frontend consists of two pages:

1. Main page that displays a list of temples
2. Edit page where you can edit an existing temple or create a new one

## Components

There are two components used in this project:

1. Card component for displaying the list of temples on the main page
2. NewTemple component for a button that initiates the edit page to create a new temple

# React Frontend for Temple List App

This is a React-based frontend for a Temple List App. The frontend uses the following technologies:

- React: A JavaScript library for building user interfaces.
- React Router DOM: A routing library for React.
- Context: A feature in React for sharing data between components.
- Fetch API: A modern interface for fetching resources.

The frontend consists of two pages:

- Main Page: Displays the list of temples.
- Edit Page: Allows the user to edit or create a new temple.

There are two components:

- Card: Displays the list of temples on the main page.
- NewTemple: A button that initiates the edit page to create a new temple.

```js
// FILEPATH: /src/components/Card.js
/**
 * Card component for displaying temple information in the main page.
 * @param {Object} props - Component props.
 * @param {Object} props.temple - Temple object containing name, location, and image URL.
 * @returns {JSX.Element} - Rendered Card component.
 */

// FILEPATH: /src/components/NewTemple.js

/**
 * NewTemple component for creating a new temple entry in the edit page.
 * @param {Object} props - Component props.
 * @param {Function} props.handleCreate - Function to handle creating a new temple entry.
 * @returns {JSX.Element} - Rendered NewTemple component.
 */

// FILEPATH: /src/App.js

/**
 * Main App component for rendering the temple list and edit page.
 * @returns {JSX.Element} - Rendered App component.
 */

// FILEPATH: /src/index.js

/**
 * Entry point for the React application.
 * Uses React Router DOM for routing and Context API for data binding.
 * Fetch API is used for making requests to the Express server.
 */
```
