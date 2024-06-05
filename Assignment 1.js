

dragElement(document.querySelector("#star1"));
dragElement(document.querySelector("#star2"));
dragElement(document.querySelector("#star3"));
dragElement(document.querySelector("#star4"));
dragElement(document.querySelector("#star5"));
dragElement(document.querySelector("#star6"));
dragElement(document.querySelector("#star7"));

dragElement(document.querySelector("#star8"));
dragElement(document.querySelector("#star9"));
dragElement(document.querySelector("#star10"));
dragElement(document.querySelector("#star11"));
dragElement(document.querySelector("#star12"));
dragElement(document.querySelector("#star13"));
dragElement(document.querySelector("#star14"));

function dragElement(WindowElement) {
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	WindowElement.onpointerdown = pointerDrag;

	function pointerDrag(e) {
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;

		document.onpointermove = elementDrag;
		document.onpointerup = stopElementDrag;
	}

	function elementDrag(e) {
		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		WindowElement.style.top = WindowElement.offsetTop - pos2 + "px";
		WindowElement.style.left = WindowElement.offsetLeft - pos1 + "px";
	}

	function stopElementDrag() {
		document.onpointerup = null;
		document.onpointermove = null;
	}
}





















// dragElement(document.querySelector("#plant1"));
// dragElement(document.querySelector("#plant2"));
// dragElement(document.querySelector("#plant3"));
// dragElement(document.querySelector("#plant4"));
// dragElement(document.querySelector("#plant5"));
// dragElement(document.querySelector("#plant6"));
// dragElement(document.querySelector("#plant7"));