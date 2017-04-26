function Toggle(event) {
	if( !event )  event = window.event;
	var whichlink = (event.target) ? event.target.id : event.srcElement.id,
	obj = document.getElementById(whichlink + "menu"),
	visible = obj.style.display == "block",
	key = document.getElementById(whichlink),
	keyname = key.firstChild.nodeValue.substring(3);
	if( visible ) {
		obj.style.display = "none";
		key.firstChild.nodeValue = "[+]" + keyname;
	}
	else {
	obj.style.display = "block";
	key.firstChild.nodeValue = "[-]" + keyname;
	}
}
document.getElementById("beijing").onclick = Toggle;
document.getElementById("shanghai").onclick = Toggle;
document.getElementById("shenzhen").onclick = Toggle;
document.getElementById("contactus").onclick = Toggle;
