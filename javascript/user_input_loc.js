var address;
var radius;

var form = document.getElementById("form1");

form.addEventListener('submit', function (event) {
    event.preventDefault()

    address = document.getElementById('address').value
    radius = document.getElementById('radius').value

    location.href = "initiative_list_page.html"

})