jQuery(function(){
    jQuery(".arrow-down").on("click", function() {
        jQuery(this).closest("li").find(".features-itens").toggleClass("active");
        jQuery(this).toggleClass("arrow-up");
    });
    
    jQuery(".img-menu-mobile, .close-menu-mobile").on("click", function() {
        jQuery(".menu-layer").toggle();
        jQuery(".menu-mobile").toggleClass("active-mobile");
    });
});