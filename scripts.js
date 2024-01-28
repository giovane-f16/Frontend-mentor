jQuery(function() {
    // jQuery(".arrow-down").on("click", function() {
    //     jQuery(this).closest("li").find(".features-itens").toggleClass("active");
    //     jQuery(this).closest("li").find(".features-itens-mobile").toggleClass("features-itens-mobile-active");
    //     jQuery(this).toggleClass("arrow-up");
    // });
    
    jQuery(".img-menu-mobile, .close-menu-mobile, .menu-layer").on("click", function() {
        jQuery(".menu-layer").toggle(10);
        jQuery(".menu-mobile").toggleClass("active-mobile");
    });

    jQuery(".feature").on("click", function () {
        jQuery(this).find(".features-itens-mobile").toggleClass("features-itens-mobile-active");
        jQuery(this).find(".arrow-down").toggleClass("arrow-up");
    });
});