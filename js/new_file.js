var father = document.getElementById("father");

function bon1() {
	var ca = document.createElement("a");
	var ap = document.createTextNode("统统20块20块20块统统20块 统统统统统统20块！");

	ca.appendChild(ap);
	father.appendChild(ca);
	ca.style.backgroundColor = 'red';
	ca.style.color="yellow";
	ca.style.display="block"
}
function bon2() {
	
	var p = document.getElementsByTagName("p");
	
	

	for(var i=0; i<p.length ;)
	{	
	
		father.removeChild(p[0]);
	}
	
}
function bon3() {
	
	var a = document.getElementsByTagName("a");

	

	for(var i=0; i<a.length ;)
	{	
	
		father.removeChild(a[0]);
	}
	
}
function bon4() {
	
	var i=0;
	
	var allchild =father.childNodes;
	for(i=0;i<allchild.length;i++)
	allchild[i].style.color="red";
	
	
}