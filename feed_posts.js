
// post_list = []

document.getElementById("newpost").addEventListener("click", myFunction);

	function myFunction() {
		
	// Variables for List
	var numpeople = document.getElementById("numvolunteers").value;

	var title = document.getElementById("title").value;

	var location = document.getElementById("location").value;

	var extra_info = document.getElementById("extrainfo").value;
	// --------------

	document.getElementById("newpost").innerHTML = "boo"+ numpeople;
	
	var tag = document.createElement("div");

	var infos_loc = "Location: " + location;
	var text = document.createTextNode(infos_loc);
	tag.appendChild(text);

	var titles = document.createElement("h2")
	var infos_title = "Title: " + title;
	var text = document.createTextNode(infos_title);
	titles.appendChild(text);
	tag.appendChild(titles);

	var descs = document.createElement("div");
	var infos_desc = "Description: " + extra_info;
	var text = document.createTextNode(infos_desc);
	descs.appendChild(text);
	tag.appendChild(text);

	var breaks = document.createElement("hr");
	tag.appendChild(breaks);


	var element = document.getElementById("new");
	element.appendChild(tag);


	}




// document.getElementById("newpost").addEventListener("click", myFunction);

// 	function myFunction() {

// 	var numpeople = document.getElementById("numvolunteers").value;

// 		var org_name = document.getElementById("org_name").value;

// 		var title = document.getElementById("title").value;

// 		var location = document.getElementById("location").value;
// 		var extra_info = document.getElementById("extrainfo").value;
// 		var numpeople = document.getElementById("numvolunteers").value;

// 	document.getElementById("newpost").innerHTML = 
// 	"Title: " + 
// 	"Location: " +
// 	"Description: " +
// 	"Number of People Requested: "
// 	;

// 	var tag = document.createElement("p");
// 	var text = document.createTextNode("Tutorix is the best e-learning platform");
// 	tag.appendChild(text);
// 	var element = document.getElementById("newpost");
// 	element.appendChild(tag);

// 	}


// function create_post() {
// 	// Code for the new post
// 	var org_name = document.getElementById("org_name").value;

// 	var title = document.getElementById("title").value;

// 	var location = document.getElementById("location").value;
//     var extra_info = document.getElementById("extrainfo").value;
//     var numpeople = document.getElementById("numvolunteers").value;

// 	post_list += org_name + "Once, there were turtles! These turtles loved to eat " + location.value + " and play in the sunshine! The turtles were really good at " + extra_info + numpeople + "."; 
	
// }

// function sendpost(){
// 	newpost.InnerHTML = "hello!"
// }

