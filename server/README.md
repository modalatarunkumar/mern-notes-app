# Getting started with Backend

This is backend for MERN CRUD Notes app.


### 1. Navigate to the server folder

Run the following command

```bash
cd server
```

### 2. Install dependencies

Run the command below to install all necessary packages:

```bash
npm install
```

### 3. Set up Environment variables

create a `.env` file in the `server` folder and add the following(update with your own values):

```bash
MONGO_URI=your_mongo_database_uri
PORT=5000
```

### 4. Run the server locally

To start the backend server, run:

```bash
npm run dev
```
This will start the backend server at `http://localhost:5000`.


### API end points:
Some of the key endpoints (example):

| Method     | Endpoint            | Description          |
| ---------- | ------------------- | -------------------- |
| **POST**   | `/api/v1/notes`     | Create a new note    |
| **GET**    | `/api/v1/notes`     | Get all active notes |
| **GET**    | `/api/v1/notes/:id` | Get a note by ID     |
| **PUT**    | `/api/v1/notes/:id` | Update a note        |
| **DELETE** | `/api/v1/notes/:id` | Soft delete a note   |
