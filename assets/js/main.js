

d3.json('node-projects/export-google-sheets/data.json')
	.then(data => {
		console.log(data[1]);
		// only display first 10
		data = data.splice(0,10);
		d3.select(".dataFromGoogleSheets").selectAll("div")
			.data(data)
			.enter()
			.append("div")
			.text(function(d) {
				return `${d.offset24}-${d.location}-${d.plant}`;
			});
	});




// fetch text file
fetch(`node-projects/convert-csv-to-json/data.json`)
	.then(response => response.json())
	.then(data => {
		// deserialize and send to function to display using d3
		console.log(data[0]);
		displayData(data);
	});

function displayData(data) {

	// let str = "";
	// for (let i = 0; i < data.length; i++) {
	// 	str += `<p>${data[i].name}.${data[i].purpose}</p>`;
	// }

	// only display first 10
	data = data.splice(0,10);
	// reference to element
	var dataEle = d3.select(".dataConvert");
	// adds div for each data item
	dataEle.selectAll("div")
		.data(data)
		.enter()
		.append("div")
		.text(function(d) {
			return `${d.purpose} - ${d.name}`;
		});

}
