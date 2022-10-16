let initiatives_data = [
  {
    org_name: "Canada Forestry",
    init_title: "Clean up Vancouver beaches",
    description: "please clean up your mess thanks",
    people_needed: 50,
    address:
      "University of Toronto Scarborough, Military Trail, Scarborough, ON, Canada",
    latitude: 51.2538,
    longitude: -85.3231,
  },
  {
    org_name: "Canada Fishing",
    init_title: "Clean up Vancouver beaches",
    description: "please clean up your mess thanks",
    people_needed: 50,
    address:
      "University of Toronto Scarborough, Military Trail, Scarborough, ON, Canada",
    latitude: 51.2538,
    longitude: 36.3231,
  },
  {
    org_name: "Canada Agriculture",
    init_title: "Clean up Vancouver beaches",
    description: "please clean up your mess thanks",
    people_needed: 50,
    address:
      "University of Toronto Scarborough, Military Trail, Scarborough, ON, Canada",
    latitude: 51.2538,
    longitude: -120.3231,
  },
  {
    org_name: "Canada Plumbing",
    init_title: "Clean up Vancouver beaches",
    description: "please clean up your mess thanks",
    people_needed: 50,
    address:
      "University of Toronto Scarborough, Military Trail, Scarborough, ON, Canada",
    latitude: 51.2538,
    longitude: 99.3231,
  },
];


initiatives_data.forEach(function (init, index) {
  // button
  var header = document.createElement("button");
  header.innerHTML = init["init_title"] + " (" + init["org_name"] + ")";
  header.classList.add("accordion");
  document.getElementById("faq").appendChild(header);

  // panel
  var panel = document.createElement("div");

  // p elements
  var description = document.createElement("p")
  description.innerHTML = "Description: " + init["description"]
  var address = document.createElement("p")
  address.innerHTML = "Address: " + init["address"]
  var people_needed = document.createElement("p")
  people_needed.innerHTML = "People Needed: " + init["people_needed"]


  panel.appendChild(description)
  panel.appendChild(address)
  panel.appendChild(people_needed)

  panel.classList.add("panel");
  document.getElementById("faq").appendChild(panel);
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}