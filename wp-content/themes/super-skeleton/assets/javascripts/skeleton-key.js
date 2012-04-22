jQuery(document).ready(function($) {
  	

/*-----------------------------------------------------------------------------------*/
/*	Filterable - http://www.gethifi.com/blog/a-jquery-plugin-to-create-an-interactive-filterable-portfolio-like-ours
/*-----------------------------------------------------------------------------------*/

		 $('#portfolio-list').filterable(); // ACTIVATE FILTER SCRIPT
		 
		 $("#.portfolio-4 .container .module-container:nth-child(4n+5)").addClass("clearleft");		
		 $("#.portfolio-3 .container .module-container:nth-child(3n+4)").addClass("clearleft");		
		 $("#.portfolio-2 .container .module-container:nth-child(2n+3)").addClass("clearleft");	
		 	
		 $("#.hybrid-blog-4 .container .hybrid:nth-child(4n+5)").addClass("clearleft");		
		 $("#.hybrid-blog-3 .container .hybrid:nth-child(3n+4)").addClass("clearleft");		
		 $("#.hybrid-blog-2 .container .hybrid:nth-child(2n+3)").addClass("clearleft");	
		 
		 $("#.breakout-row .container .columns:nth-child(4n+6)").addClass("clearleft");	
		 
		 $("a.button").click(function () {
		 	
		 	$("#.portfolio-4 .container .module-container").removeClass("clearleft").css('height', $(".module-container").height());
			$("#.portfolio-3 .container .module-container").removeClass("clearleft").css('height', $(".module-container").height());
			$("#.portfolio-2 .container .module-container").removeClass("clearleft").css('height', $(".module-container").height());
			
		 });

		 
		 // Default Override Section
		 // Now set inside each individual template-XXX.php file
		 // Then the script is activated inside the footer.php file

		 // Stop editting. The next section is our button actions. 
		 // Use this for research if you're having trouble understanding how the column count thing works. 
		 // ie: Note the differences between the Four Columns classes and the Three Columns classes.
		 
		 // Four Column Buttons Actions
		 $("span.4-col-grid").click(function () {
			 $("#portfolio-list .module-container").removeClass("sixteen columns").addClass("four columns");
			 $("#portfolio-list .module-img").removeClass("twelve columns alpha");
			 $("#portfolio-list .module-meta").fadeOut(100).removeClass("four columns alpha omega visible");
			 $(".list_btn").css("opacity","1");
			 $(".hybrid_btn").css("opacity","1");
			 $(".grid_btn").css("opacity","0.5");
			   $("#.portfolio-4 .container .module-container").css('height', 'auto');
		 });
		 
		 $("span.4-col-hybrid").click(function () {
			 $("#portfolio-list .module-container").removeClass("sixteen columns").addClass("four columns");
			 $("#portfolio-list .module-img").removeClass("twelve columns alpha");
			 $("#portfolio-list .module-meta").fadeIn(300).removeClass("omega").addClass("four columns alpha visible");
			 $(".list_btn").css("opacity","1");
			 $(".hybrid_btn").css("opacity","0.5");
			 $(".grid_btn").css("opacity","1");
			   $("#.portfolio-4 .container .module-container").css('height', 'auto');
		 }); 
		 
		 $("span.4-col-list").click(function () {
			 $("#portfolio-list .module-container").removeClass("four columns").addClass("sixteen columns");			 
			 $("#portfolio-list .module-img").addClass("twelve columns alpha");
			 $("#portfolio-list .module-meta").fadeIn(300).removeClass("alpha").addClass("four columns omega visible");
			 $(".list_btn").css("opacity","0.5"); 
			 $(".hybrid_btn").css("opacity","1");
			 $(".grid_btn").css("opacity","1");
			   $("#.portfolio-4 .container .module-container").css('height', 'auto');
		 }); 
		 
		 // Three Column Buttons Actions
		 $("span.3-col-grid").click(function () {
			 $("#portfolio-list .module-container").removeClass("sixteen columns").addClass("one-third column");
			 $("#portfolio-list .module-img").removeClass("twelve columns alpha");
			 $("#portfolio-list .module-meta").fadeOut(100).removeClass("one-third column alpha omega visible");
			 $(".list_btn").css("opacity","1");
			 $(".hybrid_btn").css("opacity","1");
			 $(".grid_btn").css("opacity","0.5");
			   $("#.portfolio-3 .container .module-container").css('height', 'auto');
		 });
		 
		 $("span.3-col-hybrid").click(function () {
			 $("#portfolio-list .module-container").removeClass("sixteen columns").addClass("one-third column columns");
			 $("#portfolio-list .module-img").removeClass("twelve columns alpha");
			 $("#portfolio-list .module-meta").fadeIn(300).removeClass("omega").addClass("one-third column alpha visible");
			 $(".list_btn").css("opacity","1");
			 $(".hybrid_btn").css("opacity","0.5");
			 $(".grid_btn").css("opacity","1");
			   $("#.portfolio-3 .container .module-container").css('height', 'auto');
		 }); 
		 
		 $("span.3-col-list").click(function () {
			 $("#portfolio-list .module-container").removeClass("one-third column").addClass("sixteen columns");			 
			 $("#portfolio-list .module-img").addClass("twelve columns alpha");
			 $("#portfolio-list .module-meta").fadeIn(300).removeClass("one-third column alpha").addClass("four columns omega visible");
			 $(".list_btn").css("opacity","0.5"); 
			 $(".hybrid_btn").css("opacity","1");
			 $(".grid_btn").css("opacity","1");
			   $("#.portfolio-3 .container .module-container").css('height', 'auto');
		 }); 
		 		 
		 // Two Column Buttons Actions
		 $("span.2-col-grid").click(function () {
			 $("#portfolio-list .module-container").removeClass("sixteen columns").addClass("eight columns");
			 $("#portfolio-list .module-img").removeClass("twelve columns alpha");
			 $("#portfolio-list .module-meta").fadeOut(100).removeClass("eight columns alpha omega visible");
			 $(".list_btn").css("opacity","1");
			 $(".hybrid_btn").css("opacity","1");
			 $(".grid_btn").css("opacity","0.5");
			   $("#.portfolio-2 .container .module-container").css('height', 'auto');
		 });
		 
		 $("span.2-col-hybrid").click(function () {
			 $("#portfolio-list .module-container").removeClass("sixteen columns").addClass("eight columns");
			 $("#portfolio-list .module-img").removeClass("twelve columns alpha");
			 $("#portfolio-list .module-meta").fadeIn(300).removeClass("four columns omega").addClass("eight columns alpha visible");
			 $(".list_btn").css("opacity","1");
			 $(".hybrid_btn").css("opacity","0.5");  
			 $(".grid_btn").css("opacity","1");
			   $("#.portfolio-2 .container .module-container").css('height', 'auto');
		 }); 
		 
		 $("span.2-col-list").click(function () {
			 $("#portfolio-list .module-container").removeClass("eight columns").addClass("sixteen columns");			 
			 $("#portfolio-list .module-img").addClass("twelve columns alpha");
			 $("#portfolio-list .module-meta").fadeIn(300).removeClass("eight columns alpha").addClass("four columns omega visible");
			 $(".list_btn").css("opacity","0.5"); 
			 $(".hybrid_btn").css("opacity","1");
			 $(".grid_btn").css("opacity","1");
			   $("#.portfolio-2 .container .module-container").css('height', 'auto');
		 }); 
		 

		 		





/*-----------------------------------------------------------------------------------*/
/*	FlexSlider - http://flex.madebymufffin.com/
/*-----------------------------------------------------------------------------------*/

		$('.flexslider').flexslider({
			animation: "slide",              //Select your animation type (fade/slide)
			slideshow: true,                //Should the slider animate automatically by default? (true/false)
			slideshowSpeed: 7000,           //Set the speed of the slideshow cycling, in milliseconds
			animationDuration: 500,         //Set the speed of animations, in milliseconds
			directionNav: true,             //Create navigation for previous/next navigation? (true/false)
			controlNav: true,               //Create navigation for paging control of each clide? (true/false)
			keyboardNav: true,              //Allow for keyboard navigation using left/right keys (true/false)
			touchSwipe: true,               //Touch swipe gestures for left/right slide navigation (true/false)
			prevText: "Previous",           //Set the text for the "previous" directionNav item
			nextText: "Next",               //Set the text for the "next" directionNav item
			randomize: false,                //Randomize slide order on page load? (true/false)
			slideToStart: 0,                //The slide that the slider should start on. Array notation (0 = first slide)
			pauseOnAction: true,            //Pause the slideshow when interacting with control elements, highly recommended. (true/false)
			pauseOnHover: false,            //Pause the slideshow when hovering over slider, then resume when no longer hovering (true/false)
			controlsContainer: ".flexslider-container"           //Advanced property: Can declare which container the navigation elements should be appended too. Default container is the flexSlider element. Example use would be ".flexslider-container", "#container", etc. If the given element is not found, the default action will be taken.
		});



/*-----------------------------------------------------------------------------------*/
/* prettyPhoto or rLightbox - http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/
/* Change this to rlightbox or prettyPhoto
/*-----------------------------------------------------------------------------------*/
		$("a[data-rel^='prettyPhoto']").prettyPhoto();
		$(".XYZ a").prettyPhoto();
		$("a.boxLink").prettyPhoto();
		$(".gallery-item a").prettyPhoto();
		
		
  		 
/*-----------------------------------------------------------------------------------*/
/*	DropDown Menu - http://users.tpg.com.au/j_birch/plugins/superfish/
/*-----------------------------------------------------------------------------------*/
		/*  $(".menu ul li").horizontalMenu({
			timeHide: 900
		});	 */
	
  		
		 $("ul.sf-menu").supersubs({
		 	minWidth:    13,   // minimum width of sub-menus in em units 
            maxWidth:    27,   // maximum width of sub-menus in em units 
            extraWidth:  0    // extra width can ensure lines don't sometimes turn over 
                               // due to slight rounding differences and font-family 
		 }).superfish({
		 	delay: 600,
		 	Speed: 100,
		 	animation:   {opacity:'show',height:'show'},
		 	autoArrows: true,
		 }); 
		 
		 $("#responsive-nav select").change(function() {
  			window.location = $(this).find("option:selected").val();
		 });
		 
		
		
/*-----------------------------------------------------------------------------------*/
/*	Widget Overlay Area - custom, no URL
/*-----------------------------------------------------------------------------------*/	

		var topBar = jQuery('#topbar');
		var logo = jQuery('#logotype');
		
		var topBarHeight = logo.height();
		
		topBar.css({
			height : topBarHeight
		});
		
	
		var widgetOverlay = jQuery('#overlay-master-container');
		var widgetTrigger = jQuery('#overlay-open a');
		
		var widgetOverlayHeight = widgetOverlay.height();
		
		widgetOverlay.css({
			marginBottom : -widgetOverlayHeight,
			display : 'block'
		});
		
		widgetTrigger.addClass('close');
		
		widgetTrigger.toggle( function() {
			 
			widgetOverlay.animate({
				marginBottom : 0
			}, 600, 'easeInOutCirc');
			
			widgetTrigger.removeClass('close');
		
		}, function() {
			
			widgetOverlay.animate({
				marginBottom : -widgetOverlayHeight
			}, 600, 'easeInOutCirc');
			
			widgetTrigger.addClass('close');		
			
		});
	




/*-----------------------------------------------------------------------------------*/
/*	PERSISTENT HEADER - http://css-tricks.com
/*-----------------------------------------------------------------------------------*/
	
	function UpdateTableHeaders() {
	   $(".persist-area").each(function() {
	
	       var el             = $(this),
	           offset         = el.offset(),
	           scrollTop      = $(window).scrollTop(),
	           floatingHeader = $(".floatingHeader", this)
	
	       if ((scrollTop > offset.top) && (scrollTop < offset.top + el.height())) {
	           floatingHeader.css({
	            "visibility": "visible"
	           });
	       } else {
	           floatingHeader.css({
	            "visibility": "hidden"
	           });
	       };
	   });
	}
	
	// DOM Ready
	$(function() {
	
	   var clonedHeaderRow;
	
	   $(".persist-area").each(function() {
	       clonedHeaderRow = $(".persist-header", this);
	       clonedHeaderRow
	         .before(clonedHeaderRow.clone())
	         .css("width", clonedHeaderRow.width())
	         .addClass("floatingHeader");
	
	   });
	
	   $(window)
	    .scroll(UpdateTableHeaders)
	    .trigger("scroll");
	
	});



/*-----------------------------------------------------------------------------------*/
/*	Jump to the Top - custom, no URL
/*-----------------------------------------------------------------------------------*/

	var topLink = jQuery('#back-to-top');
	function jumpToTop(topLink) {		
		if(jQuery(window).scrollTop() > 0) {topLink.fadeIn(150);} 
		else {topLink.fadeOut(150);}
	}
	
	jQuery(window).scroll( function() {jumpToTop(topLink);});
	
	topLink.find('a').click( function() {
		jQuery('html, body').stop().animate({scrollTop:0}, 450);
		return false;
	});



/*-----------------------------------------------------------------------------------*/
/*	Tipsy & Normal Tooltips - http://onehackoranother.com/projects/jquery/tipsy/
/*-----------------------------------------------------------------------------------*/

		jQuery('.tipsy').tipsy({gravity: 's', fade: true});
		jQuery('ul.social img').tipsy({gravity: 's', fade: true, delayIn: 2000, delayOut: 200});
		jQuery('p.social a').tipsy({gravity: 's', fade: true, delayIn: 2000, delayOut: 200});
		jQuery('a.popLink').tipsy({gravity: 's', fade: true, delayIn: 2000, delayOut: 200});
		jQuery('.gallery-item img').tipsy({gravity: 's', fade: true, delayIn: 3000, delayOut: 200});
		jQuery('#sub-sidebar .social a').tipsy({gravity: 's', fade: true});



});