function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y) * 111;
}

console.log(getDistance(345, 4, 343, 6));

initiatives_data.forEach(function (init, index) {
  var loc_dist = getDistance(init["latitude"], init["longitude"], latitude, longitude)

  console.log(loc_dist)
  // if (loc_dist <= radius) {
  // button
  var header = document.createElement("button");
  header.innerHTML = init["init_title"] + " (" + init["org_name"] + ")";
  header.classList.add("accordion");
  document.getElementById("faq").appendChild(header);

  // panel
  var panel = document.createElement("div");

  // p elements
  var description = document.createElement("p");
  description.innerHTML = "Description: " + init["description"];
  var address = document.createElement("p");
  address.innerHTML = "Address: " + init["address"];
  var people_needed = document.createElement("p");
  people_needed.innerHTML = "People Needed: " + init["people_needed"];
  // var distance = document.createElement("p");
  // distance.innerHTML =
  // "Distance: " +
  // getDistance(init["latitude"], init["longitude"], latitude, longitude).toFixed(2);

  panel.appendChild(description);
  panel.appendChild(address);
  panel.appendChild(people_needed);
  // panel.appendChild(distance)

  panel.classList.add("panel");
  document.getElementById("faq").appendChild(panel);

  // }
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
