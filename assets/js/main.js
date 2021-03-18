

fetch(`node-projects/convert-data/data.json`)
	.then(response => response.json())
	.then(data => {
		console.log(data[0]);

		let str = "";

		for (let i = 0; i < data.length; i++) {
			str += `<p>${data[i].name}.${data[i].purpose}</p>`;
		}

		d3.selectAll(".data")
			.data(data)
			.enter()
			.append("p")
			.text(function(d) {
				return d.name;

			});

	});
