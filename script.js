let hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerToggle.addEventListener('click', function () {

    if (hamburgerToggle.checked) {
        $('.sidebar').css("width", "300px")
        $('#overlay').css("visibility", "visible")
    }
    else {
        $('.sidebar').css("width", "0px")
        $('#overlay').css("visibility", "hidden")
    }
})
