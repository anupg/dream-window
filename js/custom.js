// JavaScript Document

//Check to see if the window is top if not then display button
jQuery(window).scroll(function(){
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.scrollToTop').fadeIn();
	} else {
		jQuery('.scrollToTop').fadeOut();
	}
	});	
	jQuery('.scrollToTop').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
	return false;
});


//Sticky-Menu-start
jQuery(document).ready(function() {
		jQuery('#nav_bg').stickit({scope: StickScope.Document, zIndex: 101});  	
		    
    })


//Sticky-Menu-end


//tab-nav-start
jQuery(document).ready(function(){

    jQuery("#open-one").click(function(){
      jQuery("#box-one").slideToggle('600');
      jQuery(this).toggleClass("active");
	  
    });
    
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
//tab-nav-end
