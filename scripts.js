jQuery(function(){
    jQuery(".arrow-down").on("click", function() {
        jQuery(this).closest("li").find(".features-itens").toggleClass("active");
        jQuery(this).toggleClass("arrow-up");
    });

});