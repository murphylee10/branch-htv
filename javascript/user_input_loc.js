var latitude;
var longitude
var radius;

var form = document.getElementById("form1");

form.addEventListener('submit', function (event) {
    event.preventDefault()

    latitude = document.getElementById('latitude').value
    longitude = document.getElementById('longitude').value
    radius = document.getElementById('radius').value

    location.href = "initiative_list_page.html"

})