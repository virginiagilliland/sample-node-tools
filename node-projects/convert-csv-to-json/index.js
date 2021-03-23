/**
 *	1. Import CSV file
 * 	2. Convert to JSON
 * 	3. Write .json file
 */

const csv = require('csvtojson');
const fs = require('fs');

let dataStr = ''; // json obj as string
let rowCount = 0; // count rows in CSV
const importPath = './data.csv';
const exportPath = './data.json';

(async () => {

	// convert from CSV > JSON string
	const jsonArray = await csv()
		.fromFile(importPath)
		.then((jsonObj) => {
			// console.log(jsonObj);
			rowCount = jsonObj.length;
			dataStr = JSON.stringify(jsonObj, null, 2);
		});

	// write .json file to directory
	fs.writeFile(exportPath, dataStr, (err) => {
	    if (err) throw err;
	    console.log(`${rowCount} rows written to file`);
	});

})();
