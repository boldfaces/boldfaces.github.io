// TOGGLES THE TOP-RIGHT CREATE MENU
$("#page-action, #close-action").click(function() {
	$(".x-more-menu").toggleClass("for-hide");
    $(".x-overlay").fadeToggle();
});

// FOR SHOWING & HIDING OF TIMELINE
$("#TimelineToggle").click(function() {
	$("#TimelineSidebar").toggleClass("is-hide");
  $("#Master").toggleClass("is-reset");
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