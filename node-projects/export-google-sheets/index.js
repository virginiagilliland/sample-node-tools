/**
 *	Export a Public Google Sheet as CSV
 */


// 1. Install code
// - Run 'npm i' in this directory

const fetch = require('node-fetch');
const d3 = require('d3');
const fs = require('fs').promises;
const path = require('path');


// 2. Set up your Google Sheet
// - It must be publicly accessible and published to the web
// - To prevent formatting errors, add a "placeholder" column with any data on the very last column


// 3. Define the spreadsheet URL
// More about parameters in the url
// https://sites.google.com/view/metricrat-ai2/guides/use-gviz-to-get-and-query-google-sheet-data
// More about defining a query
// https://developers.google.com/chart/interactive/docs/querylanguage

const conf = {
	name: 'chasing the sun data', // for reference only
	id: '1-VmzIyWNhzmaAiSLaPCoY6ZnJaxl3G_bxcljgXgxWKU', // from the url
	out: 'csv', // the default is json
	sheet: 'time', // the "tab"
	range: 'A4:N100', // !!
	query: '' // e.g. select+A,SUM(B)+offset+1
};
const url = `https://docs.google.com/spreadsheets/d/${conf.id}/gviz/tq?tqx=out:${conf.out}&sheet=${conf.sheet}&range=${conf.range}&query=${conf.query}`;
// e.g. https://docs.google.com/spreadsheets/d/1-VmzIyWNhzmaAiSLaPCoY6ZnJaxl3G_bxcljgXgxWKU/gviz/tq?tqx=out:csv&sheet=time



// 4. Fetch and return JSON data

var exports = module.exports = {};

exports.getData = async () => {

	let csv = await fetch(url)
		.then(d => d.text()) // get text from stream
		.then(rows => {
			// console.log(rows);
			// parse and return the rows (assumes first row is header)
			// documentation https://github.com/d3/d3-dsv
			return d3.csvParse(rows);
		});
	// test - prints row 1
	console.log(csv[0]);

	// write the data to a file
	await fs.writeFile(path.resolve(__dirname, './data.json'), JSON.stringify(csv));

	// return
	return csv;
};
// runs the above module
exports.getData();



// 5. (optional) Import this in another script

// async function d(){
// 	let importSpreadsheet = require('../export-google-sheets');
// 	let data = await importSpreadsheet.getData();
// 	console.log(data[1]);
// }();
