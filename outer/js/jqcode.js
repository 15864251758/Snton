$(function () {
	$('.menu li').hover(function() {
		$(this).addClass('on').find('ul:first').slideDown();
	}, function() {
		$(this).removeClass('on').find('ul:first').slideUp();
	});
 jQuery("#banner").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,autoPlay:true});
jQuery(".nroll").slide({titCell:".hd ul",mainCell:".bd ul",effect:"left",autoPage:true,autoPlay:true});
 jQuery(".iroll").slide({mainCell:".bd ul",autoPage:true,effect:"topLoop",autoPlay:false,scroll:3,vis:3});
 jQuery(".proll").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:false,vis:4,scroll:4});
 jQuery(".ctab").slide({ titCell:".ctabt li",mainCell:".ctabcon"});
// jQuery(".stab").slide({ titCell:".stabt li", mainCell:".stabcon"});
	// $('.plist li').not($('.p3')[0]).hover(function() {
	// 	$(this).find('h5').fadeOut().end().find('.info').animate({bottom:0}, 300);
	// }, function() {
	// 	$(this).find('h5').fadeIn().end().find('.info').animate({bottom:'-205px'}, 300);
	// });
	// $('.mlist li').hover(function() {
	// 	$(this).find('h5').fadeOut().end().find('.info').slideDown();
	// }, function() {
	// 	$(this).find('h5').fadeIn().end().find('.info').slideUp();
	// });
	// $('.catelist dt').click(function() {
	// 	$(this).next("dd").slideDown().siblings('dd').slideUp();
	// });
	// $('.closed,.maskbg').click(function() {
	// 	$('.maskbg,.popbox').fadeOut();
	// });
})



















