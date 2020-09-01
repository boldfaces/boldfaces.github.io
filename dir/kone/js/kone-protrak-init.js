// TOGGLES THE TOP-RIGHT CREATE MENU
$("#page-action, #close-action").click(function() {
	$(".x-more-menu").toggleClass("for-hide");
    $(".x-overlay").fadeToggle();
});

//TOGGLES THE SAVE N GET APPROVAL DIALOG
$("#save-action").click(function() {
	$(".x-alert").removeClass("for-hide");
    $(".x-more-menu").addClass("for-hide");
});
$("#close-alert, #send-now").click(function() {
	$(".x-alert").addClass("for-hide");
    $(".x-more-menu").addClass("for-hide");
    $(".x-overlay").fadeToggle();
});