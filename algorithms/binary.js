var container = document.getElementById("array");
function generatearray() {

var arr = [];

for (var i = 0; i < 20; i++) {
	var val = Number(Math.ceil(Math.random() * 100));
	arr.push(val);
}
arr.sort(function (a, b) {
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
async function BinarySearch(delay = 300) {
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
	var mid = Math.floor((start + end) / 2);
	blocks[mid].style.backgroundColor = "#FF4949";
	var value = Number(blocks[mid].childNodes[0].innerHTML);
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, delay)
	);
	if (value == num) {
	output.innerText = "Element Found";
	blocks[mid].style.backgroundColor = "#13CE66";
	flag = 1;
	break;
	}
	if (value > num) {
	end = mid - 1;
	blocks[mid].style.backgroundColor = "#FFBD69";
	} else {
	start = mid + 1;
	blocks[mid].style.backgroundColor = "#FFBD69";
	}
}
if (flag === 0) {
	output.innerText = "Element Not Found";
}
}
generatearray();
