/* 'Read more' link on the entry section */
//Redirection on same page
$('#button-click').click(function() {
            (document).scrollTop(450);
});

$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 1300);//timer(1300)
    });
}

// Click on 'Read More'
$('.readmore').click(function (event) {
        event.preventDefault();
        $('#all').scrollView();
});