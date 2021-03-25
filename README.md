


# Sample Node Tools 🦋

Demonstrates

- How to structure a static website with Javascript ***in the browser*** that also uses Node for automation
- How to use Node to create a test web server thus avoiding CORS issues with external data on localhost
- How to use Node to import CSV, convert to JSON, and write to a .json file
- How to use Node to import data from [Google Sheets](https://developers.google.com/sheets/api)
- How to create a `.env` file for secure data and ignore it with Git


## Projects / tools in this repository

1. Static website: e.g. `/index.html` and `/assets/*` which uses external data
1. To convert CSV to JSON data: In `node-projects/convert-csv-to-json/`, use `node index.js`
1. Node test server to call `fetch()` and import data from the same origin, avoiding CORS issues






## Accessing external data and CORS

[Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (CORS) controls how Javascript *in the browser* can access external resources. This means you may only import files from *the same* [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin)...

- A script at `https://foo.com` ***can*** [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) a file of the same origin `https://foo.com/data.json`

But ([unless the other server enables it](https://expressjs.com/en/resources/middleware/cors.html)), you cannot access data across origins:

- A script at `https://foo.com` ***cannot*** access a resource at a different origin `https://bar.com/data.json`

CORS also says that to use the fetch() API, 'URL schemes must be "http" or "https" for CORS request'. So...

- Even though they have the same `file://` protocol, a script at `file:///Users/username/coolwebsite/index.html` ***cannot*** fetch() `file:///Users/username/coolwebsite/data.json`





## How to run the test server

The test server inside `node-projects/test-server/` sets the entire project Git repository folder "public" so that

- All assets (e.g. [`node-projects/convert-csv-to-json/data.json`](https://localhost:3000/node-projects/convert-csv-to-json/data.json)) can be accessed via their expected paths in your code without CORS issues
- When you finish your project and put it on a live server (e.g. Github.io) the paths will still work
- If you access files via `file:///path/to/project/index.html` then `fetch()` will fail because of CORS

1. Change to server directory `cd node-projects/test-server/` (you must run from this directory)
1. Start the server `node server.js`
1. View `/index.html` at https://localhost:3000/




## How to access Google Sheet data via API

Follow the instructions at the [links](https://developers.google.com/sheets/api/quickstart/nodejs).

1. [Enable the Google Sheets API](https://developers.google.com/sheets/api/quickstart/nodejs)
	1. Give it a name
	1. Choose Desktop as the client
	1. Download the client configuration and save the file `credentials.json` to your working directory.
1. [Install the client library](https://developers.google.com/sheets/api/quickstart/nodejs#step_2_install_the_client_library)
1. [Set up the sample](https://developers.google.com/sheets/api/quickstart/nodejs#step_3_set_up_the_sample) and name it `quickstart.js`
1. [Run the sample](https://developers.google.com/sheets/api/quickstart/nodejs#step_4_run_the_sample)


## How to hide sensitive data

In the above steps to connect to your Google Sheets API you create two files containing sensitive data. To keep from committing these files into your repo just copy and paste the names of these file to the `.gitignore`.

1. Create a `.gitignore` file
1. Add the names of the files to the `.gitignore`

```
credentials.json
token.json
```

Another method that allows you to save any secret data is to use an `.env` (short for "environment") file. Check out this article [Here’s how you can actually use Node environment variables](https://www.freecodecamp.org/news/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a/)
