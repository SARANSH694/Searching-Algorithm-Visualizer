var container = document.getElementById("array");
function generatearray() {
	var arr = [];
	for (var i = 0; i < 20; i++) {
		var val = Number(Math.ceil(Math.random() * 100));
		arr.push(val);
	}
	arr.sort(function(a, b) {
		return a - b;
	});

	for (var i = 0; i < 20; i++) {
		var value = arr[i];
		var array_ele = document.createElement("div");
		array_ele.classList.add("block");
		array_ele.style.height = `${value * 3}px`;
		array_ele.style.transform = `translate(${i * 30}px)`;
		var array_ele_label = document.createElement("label");
		array_ele_label.classList.add("block_id");
		array_ele_label.innerText = value;
		array_ele.appendChild(array_ele_label);
		container.appendChild(array_ele);
	}
}

async function TernarySearch(delay = 700) {
	var blocks = document.querySelectorAll(".block");
	var output = document.getElementById("text");
	var num = document.getElementById("fname").value;
	for (var i = 0; i < blocks.length; i += 1) {
		blocks[i].style.backgroundColor = "#FE346E";
	}
	output.innerText = "";
	var start = 0;
	var end = 19;
	var flag = 0;
	while (start <= end) {
		var mid1 = Math.floor(start + (end - start) / 3);
		var mid2 = Math.floor(end - (end - start) / 3);
		var value1 = Number(blocks[mid1].childNodes[0].innerHTML);
		var value2 = Number(blocks[mid2].childNodes[0].innerHTML);
		blocks[mid1].style.backgroundColor = "#FFBD69";
		blocks[mid2].style.backgroundColor = "#FFBD69";
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
		if (value1 == num) {
			output.innerText = "Element Found";
			blocks[mid1].style.backgroundColor = "#13CE66";
			flag = 1;
			break;
		}
		if (value2 == num) {
			output.innerText = "Element Found";
			blocks[mid2].style.backgroundColor = "#13CE66";
			flag = 1;
			break;
		}

		if (num < value1) {
			end = mid1 - 1;
		} else if (num > value2) {
			start = mid2 + 1;
		} else {
			start = mid1 + 1;
			end = mid2 - 1;
		}
	}

	if (flag === 0) {
		output.innerText = "Element Not Found";
	}
}
generatearray();
