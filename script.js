/* hero section script */
//If browser is IE8 or older we show IE specific page
if(ie < 9){
	ieMessage();
}

/*
* Call functions when dom is ready
*/
$(document).ready(function() {

	// Hide browser top bar in mobiles
	$('body').scrollTop(1);

	// Toggle Navigation for mobile devices
	$('.icon-nav').on('click', function(){
		$('header nav').slideToggle();
		$(this).toggleClass('active');
	});

	// Function to scroll to top
	$('a[href=#top]').click(function(){

        $('html, body').animate({scrollTop:0}, 1000, 'easeInOutQuad');
        return false;
    });

	// Function to fade in image sprites
  	$('.sprite').fadeSprite();

    //Function for thumbnail hover effect
    $('.thumbs li').hoverThumb();

	// Function to animate when leaving page
	$('.transition, #nav .page_item a, #nav-footer a, #thumbs a, #next a, #prev a, #logo, #face a').leavePage();	

	// Animate the header on first			
	$('#header').stop().animate({'opacity': '1', 'top':'0'}, 1000);


	// Copy email address to clipboard	
	var clipboard = new ClipboardJS('#email');

	clipboard.on('success', function(e) {
	    $('#email-tooltip').attr("tooltip", "Yay! My email address has been copied to your clipboard ✅");
	    $('#email-tooltip').addClass('success');

	    // Reset
	    $('#email-tooltip').mouseleave(function() {

		    setTimeout( function(){
				$('#email-tooltip').attr("tooltip", "Click to copy my email address to your clipboard 😀");
		    	$('#email-tooltip').removeClass('success');
			}, 300);
		});

	    e.clearSelection();
	});

	clipboard.on('error', function(e) {
	    $('#email-tooltip').attr("tooltip", "Sorry, there was a technical glitch. Please try again.");
	    $('#email-tooltip').toggleClass('fail');
	});


	// Preload the page with jPreLoader
	$('body').jpreLoader({

		showSplash: true

	}, function() {	

		//Show the page once images are loaded	
				
			$('#face').animateHome();
			$('#face').resizeFace();

			
	});

});