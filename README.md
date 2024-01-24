# Hodlinfo Clone

A simplified clone of [hodlinfo.com](https://hodlinfo.com) that fetches cryptocurrency ticker data from the WazirX API, stores it in a PostgreSQL database, and displays it on a webpage using Node.js and Express.

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js
- PostgreSQL
- Docker

## Local Setup

To run this app locally, follow the steps below:

1. Clone the repository:

   ```bash
   https://github.com/Akashdeep-k/hodlinfo-clone.git
   cd hodlinfo-clone

2. Install the dependencies:

   ```bash
   npm install
   ```


3. Insert your postgres database connection string in `.env.example` file and rename it to `.env`

4. Run the app:

   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` to view the app.

## Docker Setup

To run this app using Docker, follow the steps below:

1. Build the Docker image:

   ```bash
   docker build -t hodlinfo-clone .
   ```

2. Run the Docker container:

   ```bash
   docker run -d -p 3000:3000 hodlinfo-clone
   ```

3. Visit `http://localhost:3000` to view the app.