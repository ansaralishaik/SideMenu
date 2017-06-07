/* Website Common script Code */

$(document).ready(function () {

    /* User Signout */
    $('.icon-user').click(function (event) {
        $('.sign-out').slideToggle();
        event.stopPropagation();
    });
    $('body').click(function () {
        $('.sign-out').hide();
    });

    $('.sign-out').click(function (e) {
        e.stopPropagation();
    });

    /* Menu in Header */
    $.fn.toggleAttr = function (attr, attr1, attr2) {
        return this.each(function () {
            var self = $(this);
            if (self.attr(attr) == attr1)
                self.attr(attr, attr2);
            else
                self.attr(attr, attr1);
        });
    };
	
	/* Side navigation close function */
	function sideNavClose() {
		$('.sidenav').removeClass('open');
        $('.content').removeClass('nav-open');
        $('#nav-icon').removeClass('open');
        $('.sidenav').attr('aria-hidden', 'true');
        $('.sidenav ul li a').attr('tabindex', '-1');
		$('#nav-icon').toggleAttr('defaultValue', 'true', 'false');
	}

	/* Menu Click */
	$('#nav-icon').attr('defaultValue', false);
	
    $('#nav-icon').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('open');
        $('#nav-icon').toggleAttr('defaultValue', 'true', 'false');
        $(this).toggleAttr('aria-expanded', 'true', 'false');
        $('.sidenav').toggleAttr('aria-hidden', 'true', 'false');
        $('.sidenav ul li a').toggleAttr('tabindex', '0', '-1');
        $('.sidenav').toggleClass('open');
    });
    $('.sidenav ul li a').click(function (e) {
        e.stopPropagation();
        sideNavClose();
    });
	
	/* On click body menu close */
    $('body').click(function (e) {
		if ($("#nav-icon").hasClass('open')) {
			sideNavClose();
        }
    });
    
	/* Keyboard Events */
	$('#nav-icon').keydown(function (e) {
		if (e.keyCode == 13 || e.keyCode == 32) {
				$('#nav-icon').toggleClass('open');
				$('#nav-icon').toggleAttr('defaultValue', 'true', 'false');
				$('#nav-icon').toggleAttr('aria-expanded', 'true', 'false');
				$('.sidenav').toggleAttr('aria-hidden', 'true', 'false');
				$('.sidenav ul li a').toggleAttr('tabindex', '0', '-1');
				$('.sidenav').toggleClass('open');
	    }
		
    });
	
	/* Signout by Keyboard */
    $('.icon-user').keydown(function (e) {
		if (e.keyCode == 13 || e.keyCode == 32) {
			$('.sign-out').slideToggle();
		}
		
    });
	
	$('.sign-out').focusout(function (e) {
		$('.sign-out').slideToggle();
	});
	
	/* Menu close on focus out */
	$( "#ara-link" ).keydown(function(e) {
		if(e.keyCode == 9 && e.shiftKey == false) {
            sideNavClose();
			e.stopPropagation();
		}
    }); 

	/* Back Navigation Button */
    $('#back-button').click(function () {
        window.history.go(-1);
    });
	
	$( ".table tr td div .SampleCell:empty" ).css( "background", "rgb(255,220,200)" );
	$(".table tr td div .SampleCell:empty").before( "<span class='offscreen'>Blank</span>" );


});