


# Sample Node Tools 🦋

Demonstrates

- How to structure a static website with Javascript ***in the browser*** that also uses Node for automation
- How to use Node to create a test web server thus avoiding CORS issues with external data on localhost
- How to use Node to import CSV, convert to JSON, and write to a .json file

## Projects / tools in this repository

1. Static website: e.g. `/index.html` and `/assets/*` which uses external data
1. Node project to convert CSV > JSON data: In `node-projects/convert-data/`, use `node index.js` 
1. Node test server to call `fetch()` and import data from the same origin, avoiding CORS issues






## Accessing external data and CORS

[Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS) controls how Javascript *in the browser* can access external resources. This means you may only import files from *the same* [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)...

- A script at `https://foo.com` ***can*** [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) a file of the same origin `https://foo.com/data.json`

But ([unless the other server enables it](https://expressjs.com/en/resources/middleware/cors.html)), you cannot access data across origins:

- A script at `https://foo.com` ***cannot*** access a resource at a different origin `https://bar.com/data.json`

CORS also says that to use the fetch() API, 'URL schemes must be "http" or "https" for CORS request'. So...

- Even though they have the same `file://` protocol, a script at `file:///Users/username/coolwebsite/index.html` ***cannot*** fetch() `file:///Users/username/coolwebsite/data.json`





## How to run the server

1. Change to server directory `cd node-projects/test-server/` (you must run from this directory)
1. Start the server `node server.js`
1. View `/index.html` at https://localhost:3000/


The server sets the entire project folder "public":

- All assets (e.g. [`/node-projects/convert-data/data.json`](https://localhost:3000/node-projects/convert-data/data.json)) can be accessed via absolute link `/` in your code
- When you finish your project and put it on a live server the absolute `/` will still work
- If you access files via `file:///path/to/project/index.html` then `fetch()` will fail because of CORS
