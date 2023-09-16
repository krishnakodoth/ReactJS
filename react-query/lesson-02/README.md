# React + TypeScript + Vite

# React Query

#### `npm create vite@latest`

#### `npm install` (from your project root directory)

#### `npm i @tanstack/react-query`

#### `npm i @tanstack/react-query-devtools`

#### `npm run dev`

#### `npm i json-server` - https://www.npmjs.com/package/json-server

#### Create a `db.json` file with some data in the project root

- Example:

```json
{
  "posts": [{ "id": 1, "title": "json-server", "author": "typicode" }],
  "comments": [{ "id": 1, "body": "some comment", "postId": 1 }],
  "profile": { "name": "typicode" }
}
```

#### `json-server --watch db.json`

#### Added one npm script command in `package.json` file as:

#### `"serve-json": "json-server --watch db.json --port 4000"`

#### Run `npm run serve-json` in the terminal

#### Check the url in the browser - `http://localhost:4000/posts`

#### Install react-router-dom - `npm i react-router-dom`

#### Install React query - `npm i react-query`
