function getDistance(x1, y1, x2, y2) {
  let y = x2 - x1;
  let x = y2 - y1;

  return Math.sqrt(x * x + y * y) * 111;
}

console.log(getDistance(345, 4, 343, 6));

initiatives_data.forEach(function (init, index) {
  var distance = document.createElement("p");

  distance.innerHTML =
    "Distance: " +
    getDistance(init["latitude"], init["longitude"], user_lat, user_long);

  var withinDistance = 89;

  if (distance <= withinDistance) {
    console.log(distance);
  }
});
