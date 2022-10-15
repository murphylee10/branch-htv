function create_post() {
	// Code for the new post
	var org_name = document.getElementById("org_name").value;

	var title = document.getElementById("title").value;

	var location = document.getElementById("location").value;
    var extra_info = document.getElementById("extrainfo").value;
    var numpeople = document.getElementById("numvolunteers").value;


	newpost.innerHTML = org_name + "Once upon a time, there were " + title + " turtles! These turtles loved to eat " + location + " and play in the sunshine! The turtles were really good at " + extra_info + "."; 
	
}

