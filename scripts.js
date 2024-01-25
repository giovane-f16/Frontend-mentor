jQuery(function(){
    jQuery(".arrow-down").on("click", function() {
        jQuery(this).closest("li").find(".features-itens").toggle();
        jQuery(this).toggleClass("arrow-up");
    });

});