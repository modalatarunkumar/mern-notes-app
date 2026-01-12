# 📝 MERN Notes App

A simple and beginner-friendly Notes CRUD Application built with the MERN stack (MongoDB, Express, React, Node.js).

This app lets users create, edit, delete, and view notes — demonstrating the fundamentals of full-stack web development.

## 🤔 Why This Project

I built this project to learn and demonstrate **full-stack development with the MERN stack** in a simple, practical application.

The goal was to create a **CRUD-based notes app** that handles **creating, updating, deleting, and fetching notes** with proper backend validation, error handling, and modular architecture.

This project helped me practice **frontend-backend integration**, API design, and **deployment of production-ready apps** with Vercel and Render, while keeping the code organized and maintainable.

## ✨ Features

- ➕ Create notes with title and description

- 🗑️ Soft-delete notes (with `isDeleted` flag)

- ✏️ Update note details

- 🔄 Fetch all active notes

- ⚡ Backend built with Express & MongoDB

- 🌐 Frontend built with React + Axios

- 🧩 Proper error handling with `asyncHandler` and `CustomError`

- 🔒 CORS configuration for frontend-backend integration

- 🧰 Modular folder structure (production-ready)

## ⚙️ Tech Stack

Frontend: React, Axios, React Hot Toast
Backend: Node.js, Express.js, MongoDB (Mongoose)
Deployment:

* Frontend → [Vercel](https://vercel.com/)

* Backend → [Render](https://render.com/)

Tools: dotenv, cors, nodemon

## 🧠 Project Structure
```
mern-crud/
│
├── client/                 # React Frontend
│   ├── src/
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── index.js
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── service/
│   │   ├── middlewares/
│   │   └── app.js
│   └── server.js
│
└── README.md
```

## 🚀 Getting Started
### 🧩 Prerequisites

Make sure you have installed:

* Node.js (v16+)

* npm or yarn

* MongoDB Atlas account (for cloud DB)
### 🛠️ Setup
Follow each README.md file instructions

### 🌍 Deployment

| Service | Platform | Live URL |
|----------|-----------|----------|
| Frontend | Vercel | [mern-notes-app-eta.vercel.app](https://mern-notes-app-eta.vercel.app) |
| Backend | Render | [mern-notes-app-qeku.onrender.com](https://mern-notes-app-qeku.onrender.com) |

Both are linked via `FRONTEND_URL` and CORS configuration.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)


