fetch(`node-projects/convert-data/data.json`)
	.then(response => response.json())
	.then(data => {
		console.log(data[0]);
		displayData(data);
	});


function displayData(data) {

	// let str = "";
	// for (let i = 0; i < data.length; i++) {
	// 	str += `<p>${data[i].name}.${data[i].purpose}</p>`;
	// }

	// reference to element
	var dataEle = d3.select(".data");
	// adds div for each data item
	dataEle.selectAll("div")
		.data(data)
		.enter()
		.append("div")
		.text(function(d) {
			return `${d.purpose} - ${d.name}`;
		});

}
