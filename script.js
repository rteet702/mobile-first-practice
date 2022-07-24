let hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerToggle.addEventListener('click', function () {
    if (hamburgerToggle.checked) {
        $('.sidebar').css("width", "300px")
        $('#overlay').css("visibility", "visible")
        $('#overlay').css("opacity", "0.5");
    }
    else {
        $('.sidebar').css("width", "0px")
        $('#overlay').css("opacity", "0");
        setTimeout(function () {
            $('#overlay').css("visibility", "hidden")
        }, 200)
    }
})

console.log("Code Loaded...")