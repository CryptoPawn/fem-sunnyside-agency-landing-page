const hamburger = ".hamburger";
const navMenu = ".navigation";

$(document).ready(function() {
    $(hamburger).on("click", function() {
        if ($(navMenu).css("visibility") === "visible") {
            $(navMenu).css("visibility","hidden");
        } else {
            $(navMenu).css("visibility","visible");
        }
    });
});




$(window).on('resize', function(){
    function changeDirectory(directory) {
        images.each(function() {
            src = $(this).attr("src");
            if (directory === "desktop") {
                newSrc = src.replace("desktop","mobile");
            } else if (directory === "mobile") {
                newSrc = src.replace("mobile","desktop");
            }
            $(this).attr("src", $(this).attr("src").replace(src, newSrc));
        });
    };

    const images = $("img").not(".logo").not(".arrow").not(".icon");

    if ($(window).width() < 930) {
        changeDirectory("desktop");
    } else {
        changeDirectory("mobile");
    };
}); 