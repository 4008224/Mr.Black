function loadXMLDoc(dname) {
	var xmlhttp;
	xmlhttp=null;
	if (window.XMLHttpRequest) {
		// code for all new browsers
		xmlhttp=new XMLHttpRequest();
	}
	else if (window.ActiveXObject) {
		// code for IE5 and IE6
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (xmlhttp!=null) {
		xmlhttp.onreadystatechange=state_Change;
		xmlhttp.open("GET",dname,true);
		xmlhttp.send();
		xmlDoc=xmlhttp.responseXML; 
		return(xmlDoc);
	}
	else {
		alert("Your browser does not support XMLHTTP.");
	}
	function state_Change() {
		if (xmlhttp.readyState==4) {
			// 4 = "loaded"
			if (xmlhttp.status==200) {
				// 200 = OK
				// ...our code here...
			}
			else {
				alert("Problem retrieving XML data");
			}
		}
	}
}

//http://w3school.com.cn/example/xdom/loadxmldoc.js