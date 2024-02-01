jQuery(function() {    
    jQuery("ul.menu li").on("click", function() {
        jQuery(this).find(".features-itens").toggleClass("active");
        jQuery(this).find(".arrow-down").toggleClass("arrow-up");
    });

    jQuery(".img-menu-mobile, .close-menu-mobile, .menu-layer").on("click", function() {
        jQuery(".menu-layer").toggle();
        jQuery(".menu-mobile").toggleClass("active-mobile");
    });

    jQuery(".feature").on("click", function () {
        jQuery(this).find(".features-itens-mobile").toggleClass("features-itens-mobile-active");
        jQuery(this).find(".arrow-down").toggleClass("arrow-up");
    });

    jQuery(".features-itens, .features-itens-mobile").on("click", function(e) {
        e.stopPropagation();
    });

    jQuery("main div a").on("click", function (e) {
       e.preventDefault();
    });
});