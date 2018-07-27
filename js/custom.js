// JavaScript Document

//<![CDATA[
jQuery(window).load(function() { // makes sure the whole site is loaded
	jQuery('#pre-loader').fadeOut(); // will first fade out the loading animation
	jQuery('.loader-holder').delay(20).fadeOut('slow'); // will fade out the white DIV that covers the website.
	jQuery('body').delay(20).css({'overflow':'visible'});
})
	//]]>
	

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

//search

jQuery(document).ready(function(){
	
     jQuery("#open-one").click(function(){
      jQuery("#box-one").slideToggle('600');
      jQuery(this).toggleClass("active");
	  
    });
	
	jQuery("#open-two").click(function(){
      jQuery("#box-two").slideToggle('600');
      jQuery(this).toggleClass("active");
	  
    });
	
	jQuery("#mobile_login_open").click(function(){
      jQuery("#mobile_login").slideToggle('600');
      jQuery(this).toggleClass("active");
	  
    });
	
	jQuery("#mobile_logout_open").click(function(){
      jQuery("#mobile_logout").slideToggle('600');
      jQuery(this).toggleClass("active");
	  
    });
	
	jQuery("#my_account_open").click(function(){
      jQuery("#my_account").slideToggle('600');
      jQuery(this).toggleClass("active");
	  
    });
	
	jQuery("#where_order_open").click(function(){
      jQuery("#where_order").slideToggle('600');
      jQuery(this).toggleClass("active");
	  
    });
	
	
	jQuery('#tab_shop').click(function(){
		//jQuery(this).toggleClass('p');
		//if(jQuery('#tab_shop').hasClass('p')){
			jQuery('.left-icon-menu').toggleClass('show');
		//}
	})
    
});

jQuery(document).ready(function(){
    jQuery(".nav-tabs a").click(function(){
        jQuery(this).tab('show');
    });
});


//Accodion

jQuery(document).on('click', '.panel-heading span.clickable', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
jQuery(document).on('click', '.panel div.clickable', function (e) {
    var $this = $(this);
    if (!$this.hasClass('panel-collapsed')) {
        $this.parents('.panel').find('.panel-body').slideUp();
        $this.addClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-minus').addClass('glyphicon-plus');
    } else {
        $this.parents('.panel').find('.panel-body').slideDown();
        $this.removeClass('panel-collapsed');
        $this.find('i').removeClass('glyphicon-plus').addClass('glyphicon-minus');
    }
});
jQuery(document).ready(function () {
    jQuery('.panel-heading span.clickable').click();
    jQuery('.panel div.clickable').click();
});



//Accordion-left-desktop

function toggleIcon(e) {
    jQuery(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
jQuery('.panel-group').on('hidden.bs.collapse', toggleIcon);
jQuery('.panel-group').on('shown.bs.collapse', toggleIcon);

//Accordion-left-desktop-end

//product-carasul-start

  jQuery(document).ready(function($) {
 
        jQuery('#myCarousel').carousel({
                interval: 5000
        });
 
        jQuery('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
        jQuery('[id^=carousel-selector-]').click( function(){
                var id_selector = $(this).attr("id");
                var id = id_selector.substr(id_selector.length -1);
                var id = parseInt(id);
               jQuery('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        jQuery('#myCarousel').on('slid', function (e) {
                var id = jQuery('.item.active').data('slide-number');
                jQuery('#carousel-text').html($('#slide-content-'+id).html());
        });
});

//product-carasul-end

//tab-nav-start
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openNav_2() {
    document.getElementById("mySidenav_2").style.width = "250px";
}

function closeNav_2() {
    document.getElementById("mySidenav_2").style.width = "0";
}

function openNav_3() {
    document.getElementById("mySidenav_3").style.width = "276px";
}

function closeNav_3() {
    document.getElementById("mySidenav_3").style.width = "0";
}

function openNav_4() {
    document.getElementById("diensten_mobile").style.width = "276px";
}

function closeNav_4() {
    document.getElementById("diensten_mobile").style.width = "0";
}

function openNav_5() {
    document.getElementById("contact_mobile").style.width = "276px";
}

function closeNav_5() {
    document.getElementById("contact_mobile").style.width = "0";
}

//tab-nav-end

//filter-shop-2-start
jQuery(document).ready(function() {
        jQuery('#showmenu').click(function() {
        jQuery('.shop_filter').slideToggle("fast");
        });
    });

//filter-shop-2-end

jQuery( function() {
  jQuery('.panel-clr').click( function() {
  jQuery(this).toggleClass('on');
} )
}); 



//owl-carousel-start

	jQuery(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin:5,
                nav: true,
				pagination : false,
				dots:false,
                loop: true,
				navText: ["<span class='fa fa-caret-left'></span>","<span class='fa fa-caret-right'></span>"],
                responsive: {
                  0: {
                    items: 1
                  },
				  420: {
                    items: 2
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items:5
                  }
                }
              });
            });

//owl-carousel-end


//windo-details

$(document).ready(function(){
    
	var clickEvent = false;
	jQuery('#myCarousel').carousel({
		interval:   4000	
	}).on('click', '.list-group li', function() {
			clickEvent = true;
			jQuery('.list-group li').removeClass('active');
			jQuery(this).addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var count = $('.list-group').children().length -1;
			var current = $('.list-group li.active');
			current.removeClass('active').next().addClass('active');
			var id = parseInt(current.data('slide-to'));
			if(count == id) {
				jQuery('.list-group li').first().addClass('active');	
			}
		}
		clickEvent = false;
	});
})

//windo-details-end

