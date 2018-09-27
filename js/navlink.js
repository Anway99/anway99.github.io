/* Navigation Bar Link */


//Redirection on same page
$('#button-click').click(function() {
            (document).scrollTop(450);
});

$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1300);
    });
}

/* Scripts for slider on same page loads */

//Phishing
$('.tryphishing').click(function (event) {
        event.preventDefault();
        $('#phishing').scrollView();
});

// SQL Injection
$('.trysinjection').click(function (event) {
        event.preventDefault();
        $('#sqlinjection').scrollView();
});

// Cross-Site Scripting
$('.trycrosssite').click(function (event) {
        event.preventDefault();
        $('#crosssite').scrollView();
});

// Man-in-Middle
$('.trymiddleman').click(function (event) {
        event.preventDefault();
        $('#maninmiddle').scrollView();
});

// Malware
$('.trymalware').click(function (event) {
        event.preventDefault();
        $('#malware').scrollView();
});

// Denial-of-Service
$('.tryservicedenial').click(function (event) {
        event.preventDefault();
        $('#denialofservice').scrollView();
});

// Spear Phishing
$('.tryspear').click(function (event) {
        event.preventDefault();
        $('#spear').scrollView();
});

// Whaling Phishing
$('.trywhaling').click(function (event) {
        event.preventDefault();
        $('#whaling').scrollView();
});

// Brute Force
$('.trybrute').click(function (event) {
        event.preventDefault();
        $('#bruteforce').scrollView();
});

// Dictionary
$('.trydictionary').click(function (event) {
        event.preventDefault();
        $('#dictionary').scrollView();
});
