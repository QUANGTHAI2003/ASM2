// Set background image
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});

// Loading
$(window).on('load', function () {
    $('.loader-wrapper').fadeOut('slow');
})