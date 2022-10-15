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

initiatives_data.forEach(function (init, index) {});
