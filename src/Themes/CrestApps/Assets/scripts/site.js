window.addEventListener('scroll', function() {
    var wScroll = window.scrollY;

    var header = document.querySelector('.site-header');
    var headerHeight = header.offsetHeight;

    if (wScroll > headerHeight) {
        header.classList.add('fixed-top');
        header.classList.add('shadow-xl');
    } else {
        header.classList.remove('fixed-top');
        header.classList.remove('shadow-xl');
    }
});
