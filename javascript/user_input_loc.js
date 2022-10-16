var latitude;
var longitude
var radius;

var form = document.getElementById("form1");

form.addEventListener('submit', function (event) {
    event.preventDefault()

    latitude = parseInt(document.getElementById('latitude').value)
    longitude = parseInt(document.getElementById('longitude').value)
    radius = parseInt(document.getElementById('radius').value)

    location.href = "initiative_list_page.html"

})