let hamburgerToggle = document.querySelector('#hamburger-toggle');

hamburgerToggle.addEventListener('click', function () {

    if (hamburgerToggle.checked) {
        $('.sidebar').animate({width: "300px"});
    }
    else {
        $('.sidebar').animate({width: "0px"});
    }
})
