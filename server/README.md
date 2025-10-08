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
This will start the backend server at `http://localhost:3000`.
after that run `npm i` command to install packages.

run the development server by using command `npm run dev`

this will run backend.

### API end points:
Some of the key endpoints (example):

`GET /api/notes:` Fetch all notes

`POST /api/notes:` Create a new note

`PUT /api/notes/:id:` Update a note

`DELETE /api/notes/:id:` Delete a note