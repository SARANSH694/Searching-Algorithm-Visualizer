var container = document.getElementById("array");
function generatearray() {
for (var i = 0; i < 20; i++) {
	var value = Math.ceil(Math.random() * 100);
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
async function LinearSearch(delay = 300) {
var blocks = document.querySelectorAll(".block");
var output = document.getElementById("text");

var num = document.getElementById("fname").value;
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#FE346E";
}

output.innerText = "";

var flag = 0;
for (var i = 0; i < blocks.length; i += 1) {
	blocks[i].style.backgroundColor = "#FF4949";
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);

	var value = Number(blocks[i].childNodes[0].innerHTML);
	if (value == num) {
	flag = 1;
	output.innerText = "Element Found";
	blocks[i].style.backgroundColor = "#13CE66";
	break;
	} else {
	blocks[i].style.backgroundColor = "#FFBD69";
	}
}
if (flag == 0) {
	output.innerText = "Element Not Found";
}
}
generatearray();
