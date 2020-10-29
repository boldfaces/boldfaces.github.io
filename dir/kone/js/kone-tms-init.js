// BURGER TOGGLE JS SCRIPT START
$("#MenuToggle, #Overlay").click(function() {
	$("#MenuToggle").toggleClass("for-open");
	$(".burger").toggleClass("open"); // FOR THE BURGER LINES
	$("#Menu").toggleClass("for-hide");
	$("html, body").toggleClass("x-no-scroll");
});
// BURGER TOGGLE JS SCRIPT END

// MOBILE SEARCH TOGGLE JS SCRIPT START
$("#ShowSearch").click(function() {
	$("#NavSearch").removeClass("for-hide");
});
$("#CloseSearch").click(function() {
	$("#NavSearch").addClass("for-hide");
});
// MOBILE SEARCH TOGGLE JS SCRIPT END

// APP NAV JS SCRIPT START
$(".x-app-nav-link").click(function() {
	$(this).siblings(".x-sub-app-nav-list").slideToggle(200);
	$(".x-sub-app-nav-list").hide(200);
});
// $(".target-reset #NavToggle-Scheduling").click(function() {
// 	$("#SubNav-Scheduling").slideToggle();
// });
// $(".target-reset #NavToggle-Courses").click(function() {
//     $("#SubNav-Courses").slideToggle();
// });
// $(".target-courses #NavToggle-Scheduling").click(function() {
//     $("#SubNav-Scheduling").slideToggle();
//     $("#SubNav-Scheduling").css("z-index", "2");
// });
// $(".target-scheduling #NavToggle-Courses").click(function() {
//     $("#SubNav-Courses").slideToggle();
//     $("#SubNav-Courses").css("z-index", "2");
// });
// APP NAV JS SCRIPT END

//CHECKBOX FOR DATATABLE START
$('input:checkbox').change(function(){
	var $self = $(this);
	if ($self.prop('checked')) {
	   //$self.parent().siblings('label').removeClass('for-checked');
	   $self.siblings('span').addClass('for-checked');
	} else {
	   $self.siblings('span').removeClass('for-checked');
	}
});
//CHECKBOX FOR DATATABLE END

$(".for-accordion").click(function() {
	$(this).parents("xv-review-more").slideToggle();
});