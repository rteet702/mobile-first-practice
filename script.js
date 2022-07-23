let hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerToggle.addEventListener('click', function () {

    if (hamburgerToggle.checked) {
        $('.sidebar').css("width", "300px")
    }
    else {
        $('.sidebar').css("width", "0px")
    }
})
