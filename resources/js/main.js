$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 1000);


    //Sticky-Menu
    $(".sticky-menu").waypoint(function(direction) {
        if (direction == 'down') {
            $('.main-menu').addClass("sticky");
        } else {
            $('.main-menu').removeClass("sticky");
        }
    });

    //Search-Box
    $(".search-click").click(function() {
        $(".search-box").slideToggle(300);
    });
    //Hamburger Button
    const menuBtn = document.querySelector('.menu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    });

    const menuBtnBurger = document.querySelector('.menu-btn__burger');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $("a.scroll-up-btn").fadeIn();
        } else {
            $("a.scroll-up-btn").fadeOut();
        }
    });

});