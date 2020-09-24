//CUSTOM COUNTRY LIST DROPDOWN START
function addCountries(whereto) {
	var countriesfile = "Afghanistan, Albania, Algeria, Andorra, Angola, Antigua & Deps, Argentina, Armenia, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bhutan, Bolivia, Bosnia Herzegovina, Botswana, Brazil, Brunei, Bulgaria, Burkina, Burma, Burundi, Cambodia, Cameroon, Canada, Cape Verde, Central African Rep, Chad, Chile, People's Republic of China, Colombia, Comoros, Democratic Republic of the Congo, Republic of the Congo, Costa Rica, Croatia, Cuba, Cyprus, Czech Republic, Danzig, Denmark, Djibouti, Dominica, Dominican Republic, East Timor, Ecuador, Egypt, El Salvador, Equatorial Guinea, Eritrea, Estonia, Ethiopia, Fiji, Finland, France, Gabon, Gaza Strip, The Gambia, Georgia, Germany, Ghana, Greece, Grenada, Guatemala, Guinea, Guinea-Bissau, Guyana, Haiti, Holy Roman Empire, Honduras, Hungary, Iceland, India, Indonesia, Iran, Iraq, Republic of Ireland, Israel, Italy, Ivory Coast, Jamaica, Japan, Jonathanland, Jordan, Kazakhstan, Kenya, Kiribati, North Korea, South Korea, Kosovo, Kuwait, Kyrgyzstan, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Macedonia, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Marshall Islands, Mauritania, Mauritius, Mexico, Micronesia, Moldova, Monaco, Mongolia, Montenegro, Morocco, Mount Athos, Mozambique, Namibia, Nauru, Nepal, Newfoundland, Netherlands, New Zealand, Nicaragua, Niger, Nigeria, Norway, Oman, Ottoman Empire, Pakistan, Palau, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland, Portugal, Prussia, Qatar, Romania, Rome, Russian Federation, Rwanda, St Kitts & Nevis, St Lucia, Saint Vincent & the, Grenadines, Samoa, San Marino, Sao Tome & Principe, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, Solomon Islands, Somalia, South Africa, Spain, Sri Lanka, Sudan, Suriname, Swaziland, Sweden, Switzerland, Syria, Tajikistan, Tanzania, Thailand, Togo, Tonga, Trinidad & Tobago, Tunisia, Turkey, Turkmenistan, Tuvalu, Uganda, Ukraine, United Arab Emirates, United Kingdom, United States of America, Uruguay, Uzbekistan, Vanuatu, Vatican City, Venezuela, Vietnam, Yemen, Zambia, Zimbabwe";
	var countries = countriesfile.split(", ");
	for(var c = 0; c<countries.length; c++) {
	  $(whereto).append('<option value="' + countries[c] + '">' + countries[c] + '</option>');
	}
  }
  //CUSTOM COUNTRY LIST DROPDOWN END
  
  // FULLPAGE INIT START
  Webflow.push(function () {
	// check is the CMS editor is there
	if (Webflow.env('editor') != true) {
	  $('#fullpage').fullpage({
		  licenseKey: '3F73C895-3B7D44D3-A2433796-CACFC785',
		  anchors: ['home', 'about', 'locations', 'story'],
		  scrollBar: true,
		  //scrollOverflow: true,
		   //navigation: true,
		   //navigationPosition: 'left',
		   //navigationTooltips: ['Home', 'What we do', 'Services', 'More'],
		   touchSensitivity: 8,
		   normalScrollElements: '.x-overlist'
	  });
	}
	addCountries('#countries');
  });
  // FULLPAGE INIT END
  
  // SCRIPT FOR OVERFLOW HORIZONTAL LIST START
  var instances = OverlayScrollbars(document.querySelectorAll(".x-overlist"), {
	  overflowBehavior : {
		  x: "scroll",
		  y: "hidden"
	  },
	  scrollbars : {
		  autoHide: "leave"
	  }
  }); 
  // SCRIPT FOR OVERFLOW HORIZONTAL LIST END
  
  // BURGER TOGGLE JS SCRIPT START
  $("#burger, .a-sidebar-menu-link").click(function() {
	  $("#burger").toggleClass("xa-active");
	  $(".burger").toggleClass("open"); // FOR THE BURGER LINES
	  $("#sidebar").toggleClass("xa-hide");
	  $("#barWhite").toggleClass("xa-scroll", 2000);
	  $("#barCyan").toggleClass("xa-scroll", 2200);
	  $("html, body").toggleClass("a--no-scroll");
	  $(".a-overlay").fadeToggle();
  });
  // BURGER TOGGLE JS SCRIPT END
  
  // BOOKER HELP BUTTON START
  $("#show-modal-lingo,#close-modal-lingo").click(function() {
	  $("#modal-lingo").toggleClass("xa-hide");
	  $("html, body").toggleClass("a--no-scroll");
	  $("#burger").fadeToggle("slow");
	  $(".a-overlay").fadeToggle();
  });
  // BOOKER HELP BUTTON END
  
  // CUSTOM SELECT START
  (function() {
	   [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
		  new SelectFx(el);
	  } );
  })();
  // CUSTOM SELECT END
  
  // CUSTOM SLIDER START
  $('#slider').slick({
	  autoplay: true,
	   autoplaySpeed: 3500,
	   prevArrow: $('#prev'),
	  nextArrow: $('#next'),
	  asNavFor: '#slider-text'
  });
  $('#slider-text').slick({
	  autoplay: true,
	   autoplaySpeed: 3500,
	   arrows: false,
	   fade: true
  });
  // CUSTOM SLIDER END
  
  //DATE POPUP BG START (IBE)
  $('#date').bind('focus', function(){
	  $(this).addClass("xa-active");
	  $('.a-booker-overlay').removeClass("xa-hide");
	  $('.a-booker-label').removeClass("xa-hide");
  });
  $('#date').bind('blur', function(){
	  $(this).removeClass("xa-active");
	  $('.a-booker-overlay').addClass("xa-hide");
	  $('.a-booker-label').addClass("xa-hide");
  });
  $('#date').datepicker({ dateFormat: 'dd-M-yy', minDate: -1 });
  $('#date').prop('readonly', true);
  //DATE POPUP BG END
  
  //BOOKER DEEPLINKING START (IBE)
  $("#bookNow").click(function() {
	  var loc = $("#location").val();
	  var date = $("#date").val();
	  var dateFormatted = moment(date, 'DD-MMM-YYYY').format('YYYY-MM-DD');
  
	  if($('#location').val() == "" && $('#date').val() == ""){
		  alert("Please specify both location and date to begin.");
	  }else if($('#location').val() == "" && $('#date').val() != ""){
		  alert("Booking information insufficient, please specify a Location.");
	  }else if($('#date').val() == "" && $('#location').val() != ""){
		  alert("Booking information insufficient, please specify a Date.");
	  }else if($('#location').val() != "" && $('#date').val() != ""){
		  window.location.href = "https://booking.allwaysvip.com?airport=" + loc + "&checkin=" + dateFormatted;
	  }else{
		  
	  }
  
  });
  //BOOKER DEEPLINKING END
  