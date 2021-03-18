const express = require('express');
const app = express();
const port = 3000;


// set whole project directory as public to access index.html, assets/*, etc.
app.use(express.static('../../'));


app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
