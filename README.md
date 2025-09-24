# 💬 Quote Generator (Prashin Tech & Innovation)

This is a full-stack web application that generates random quotes from a [third-party API](https://api-ninjas.com) and displays them to the user. The application is built with a separate backend and frontend to demonstrate a real-world **client-server architecture**. It features automatic quote updates and a persistence layer to remember the last viewed quote.

---

## 🚀 Key Features

* **Random Quote Generation:** Fetches and displays a new random quote.
* **Persistent Quotes:** Utilizes **Local Storage** to save the last displayed quote, ensuring it remains on the screen even after a page refresh.
* **Manual & Automatic Updates:** Users can manually get a new quote with a "New Quote" button, or wait for an automatic update every 300 seconds (5 minute).
* **Separated Architecture:** The project is deployed as a frontend client and a backend API server, showcasing how a web application's components can be independently managed.

---

## 🛠️ Technology Stack

| Component | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | HTML, CSS, JavaScript (Vanilla) | Provides a lightweight, responsive user interface and handles all client-side logic, including DOM manipulation and API requests. |
| **Backend** | Node.js, Express.js | Serves as a simple web server to handle API calls, acting as a proxy to the external quote API and providing a clean separation of concerns. |
| **Quote API** | API-Ninjas | A reliable third-party service for fetching a diverse collection of quotes. |
| **Deployment** | Netlify (Frontend), Render (Backend) | Utilizes modern, serverless hosting platforms for easy and free deployment of both client and server applications. |

---

## 📄 Setup and Usage

### Prerequisites

You need a modern web browser to run the frontend. To explore or run the backend locally, you'll need Node.js installed.

### 1. Backend Setup (Optional, for local development)

1.  Clone this repository.
2.  Navigate to the `backend/` directory.
3.  Install the dependencies using: `npm install` command. This command will install all dependencies listed in `package.json` and will use the `package-lock.json` file to ensure the exact versions and dependency tree specified in the lock file are installed, providing a consistent and reproducible environment.
4.  Run the server: `node server.js` or `nodemon server.js`.
5.  The server will run on the specified port, ready to receive requests.

### 2. Frontend Usage

Since the frontend is already deployed, you can access the application directly.

* **Live Demo:** [Quote Generator Application](https://prashin-tech-n-innov-quote-generator.netlify.app/)

Simply open the link in your browser. The application will immediately fetch and display a new quote. Use the "New Quote" button or wait for five minutes to see it update.

---

## 💡 How It Works

The frontend `script.js` file makes an asynchronous request to the backend API endpoint. The backend server, built with Node.js and Express, then forwards this request to the API-Ninjas quotes API. Upon receiving the data, the backend sends it back to the frontend, which then updates the quote text and author on the page.

The `setInterval` function handles the automatic updates, while the `localStorage.setItem()` and `localStorage.getItem()` methods are used to save and retrieve the quote data, respectively.

---

<!-- ## 📸 Demo -->
<!-- to be added later -->