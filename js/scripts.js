function buttonUp(){var e=$(".search .searchInputContainer input").val();e=$.trim(e).length,0!==e?($(".search-toggle-icon").css("display","none"),$(".search").css("overflow","visible")):($(".search .searchInputContainer input").val(""),$(".search-toggle-icon").css("display","block"),$(".search").css("overflow","hidden")),$(".search .searchInputContainer a.dnnSearchBoxClearText").click(function(){$(".search .searchInputContainer a.dnnSearchBoxClearText").hasClass("dnnShow")?$(this).css("overflow","visible"):$(".search").css("overflow","hidden")})}$(document).ready(function(){$(".navbar-nav.sm-collapsible .caret").click(function(e){e.preventDefault()}),$('[data-toggle="tooltip"]').length&&$('[data-toggle="tooltip"]').tooltip(),$('<span class="search-toggle-icon"></span>').insertAfter(".search a.SearchButton");var e=$(".search"),c=$(".search-toggle-icon"),n=$(".search .searchInputContainer input"),a=!1;c.click(function(){0==a?(e.addClass("search-open"),n.focus(),a=!0):(e.removeClass("search-open"),n.focusout(),a=!1)}),c.mouseup(function(){return!1}),e.mouseup(function(){return!1}),$(document).mouseup(function(){1==a&&($(".search-toggle-icon").css("display","block"),c.click())}),n.keyup(buttonUp),$("a#search-action").click(function(){$("#search-top").toggleClass("active")})});
$(document).ready(function(){
	/* Script to add class to header when menu is expanded for styling */
	$('.navbar-header button').click(function(){if($('#navbar').attr('aria-expanded')=='false'||typeof $('#navbar').attr('aria-expanded')==='undefined'){$('header').addClass('menuOpen');}else{$('header').removeClass('menuOpen');}});
	/* Script to show dropdown on focus for screenreaders */
	/*$('#stamatsMenu li .topLevel').focusin(function(){
		if($(window).width() > 767){
			var dropdown = $(this).parent();
			$('#stamatsMenu .open').removeClass('open');
			$('.dropdown-menu').attr('aria-hidden', 'true');
			if (dropdown.hasClass('dropdown')){
				dropdown.addClass('open');
				$(this).siblings('.dropdown-menu').attr('aria-hidden', 'false');
			}
		}
	});*/
	/* Script to add class to sidenav when menu is expanded for styling */
	$('.sidebar button').click(function(){if($('#sideNav').attr('aria-expanded')=='false'||typeof $('#sideNav').attr('aria-expanded')==='undefined'){$('.currentTab').addClass('menuOpen');}else{$('.currentTab').removeClass('menuOpen');}});
	/* Skip link for accessibility, bypasses Main Menu */
	$('#skipToContent').click(function(){
		slideToArea('.contentTop');
	});
	$('#skipToFooter').click(function(){
		slideToArea('.mainFooter');
	});
	function slideToArea(area){
		$('html, body').animate({ scrollTop: $(area).offset().top }, 'slow');
		$(area).attr('tabindex', -1).on('blur focusout', function (){
			$(this).removeAttr('tabindex');
		}).focus();
	}

	/* For Ipad Horizontal and smaller, touch to open dropdown, and touch again to navigate */
	$('#stamatsMenu li .topLevel').click(function(){
		if($(window).width() <= 1024 && $(window).width() > 767){
			var dropdown = $(this).parent();
			if(dropdown.hasClass('dropdown')){
				if(!dropdown.hasClass('open')){
					$('#stamatsMenu .open').removeClass('open');
					$('.dropdown-menu').attr('aria-hidden', 'true');
					dropdown.addClass('open');
					$(this).siblings('.dropdown-menu').attr('aria-hidden', 'false');
					return false;
				}
			}
		}
	});

	$('#stamatsMenu .menuitem').mouseenter(function(){
		if($(window).width() > 767){
			RemoveActive();
			$('#stamatsMenu .dropdown-menu.open').removeClass('open').css('display','none');
			$(this).parent().addClass('active');
			var dropdown = $('#'+$(this).attr('aria-owns'));
			if(typeof dropdown !== typeof undefined && dropdown !== false){
				$(this).attr('aria-expanded', 'true');
				$('#'+$(this).attr('aria-owns')).addClass('open').css('display','block');
			}
		}
	});

	$('#stamatsMenu').mouseleave(function(){
		if($(window).width() > 767){
			RemoveActive();
			$('#stamatsMenu .dropdown-menu.open').removeClass('open').css('display','none');
		}
	});


	var numberOfLists = $('#stamatsMenu .menuitem').length;
	$('#stamatsMenu .menuitem').on('keydown', function(e){
		switch(e.keyCode){
			case 9:
				if(e.shiftKey){
					CloseDropDown();
					var classText = $(this).attr('class').replace('menuitem topLevel ', '');
					var integer = parseInt(classText.replace('item', ''));
					if((integer - 1) >= 1){
						RemoveActive();
						$('#stamatsMenu .item' + (integer-1).toString()).addClass('active');
						$('#stamatsMenu .item' + (integer-1).toString()).focus();
						e.preventDefault();
					}
				}else{
					CloseDropDown();
					var classText = $(this).attr('class').replace('menuitem topLevel ', '');
					var integer = parseInt(classText.replace('item', ''));
					if((integer + 1) <= numberOfLists){
						RemoveActive();
						$('#stamatsMenu .item' + (integer+1).toString()).addClass('active');
						$('#stamatsMenu .item' + (integer+1).toString()).focus();
						e.preventDefault();
					}
				}
				break;
			case 13:
			case 38:
			case 40:
				e.preventDefault();
				var dropdown = $(this).attr('aria-haspopup');
				if(typeof dropdown !== typeof undefined && dropdown !== false){
					RemoveActive();
					$(this).parent().addClass('active');
					$(this).attr('aria-expanded', 'true');
					$('#'+$(this).attr('aria-owns')).addClass('open').css('display','block');
					$('#'+$(this).attr('aria-owns')+' .child1').focus();
				}
				break;
			case 32:
				e.preventDefault();
				var href = $(this).attr('href');
				window.location = href;
				break;
			case 37:
				CloseDropDown();
				var classText = $(this).attr('class').replace('menuitem topLevel ', '');
				var integer = parseInt(classText.replace('item', ''));
				if((integer - 1) >= 1){
					RemoveActive();
					$('#stamatsMenu .item' + (integer-1).toString()).addClass('active');
					$('#stamatsMenu .item' + (integer-1).toString()).focus();
					e.preventDefault();
				}
				break;
			case 39:
				CloseDropDown();
				var classText = $(this).attr('class').replace('menuitem topLevel ', '');
				var integer = parseInt(classText.replace('item', ''));
				if((integer + 1) <= numberOfLists){
					RemoveActive();
					$('#stamatsMenu .item' + (integer+1).toString()).addClass('active');
					$('#stamatsMenu .item' + (integer+1).toString()).focus();
					e.preventDefault();
				}
				break;
			default:
				break;
		}
	});

	$('#stamatsMenu .dropdown .dropdown-menu a').on('keydown', function(e){
		var itemsInDropDown = $('#stamatsMenu .dropdown-menu.open li').length;
		var parent = $('#stamatsMenu .dropdown-menu.open');
		switch(e.keyCode){
			case 9:
				if(e.shiftKey){
					CloseDropDown();
					var grandparent = $(parent).attr('aria-labelledby');
					var classText = $('#'+grandparent).attr('class').replace('menuitem topLevel ', '');
					var integer = parseInt(classText.replace('item', ''));
					if((integer - 1) >= 1){
						RemoveActive();
						$('#stamatsMenu .item' + (integer-1).toString()).addClass('active');
						$('#stamatsMenu .item' + (integer-1).toString()).focus();
						e.preventDefault();
					}
				}else{
					CloseDropDown();
					var grandparent = $(parent).attr('aria-labelledby');
					var classText = $('#'+grandparent).attr('class').replace('menuitem topLevel ', '');
					var integer = parseInt(classText.replace('item', ''));
					if((integer + 1) <= numberOfLists){
						RemoveActive();
						$('#stamatsMenu .item' + (integer+1).toString()).addClass('active');
						$('#stamatsMenu .item' + (integer+1).toString()).focus();
						e.preventDefault();
					}
				}
				break;
			case 27:
				e.preventDefault();
				var grandparent = $(parent).attr('aria-labelledby');
				$('#'+grandparent).focus();
				CloseDropDown();
				break;
			case 32:
				e.preventDefault();
				var href = $(this).attr('href');
				window.location = href;
				break;
			case 37:
				CloseDropDown();
				var grandparent = $(parent).attr('aria-labelledby');
				var classText = $('#'+grandparent).attr('class').replace('menuitem topLevel ', '');
				var integer = parseInt(classText.replace('item', ''));
				if((integer - 1) >= 1){
					var item = $('#stamatsMenu .item' + (integer-1).toString());
					var list = $(item).attr('aria-owns');
					if(typeof list !== typeof undefined && list !== false){
						RemoveActive();
						$(item).parent().addClass('active');
						$(item).attr('aria-expanded', 'true');
						$('#'+list).addClass('open').css('display','block');
						$('#'+list +' .child1').focus();
					}else{
						RemoveActive();
						$(item).parent().addClass('active');
						$(item).focus();
					}
				}else{
					var item = $('#stamatsMenu .item' + integer.toString());
					var list = $(item).attr('aria-owns');
					if(typeof list !== typeof undefined && list !== false){
						RemoveActive();
						$(item).parent().addClass('active');
						$(item).attr('aria-expanded', 'true');
						$('#'+list).addClass('open').css('display','block');
						$('#'+list +' .child1').focus();
					}else{
						RemoveActive();
						$(item).parent().addClass('active');
						$(item).focus();
					}
				}
				break;
			case 38:
				var numItems = $('.dropdown-menu.open li').length;
				var integer = parseInt($(this).attr('class').replace('child', ''));
				if((integer - 1) >= 1){
					$('.dropdown-menu.open .child' + (integer-1)).focus();
				}else{
					$('.dropdown-menu.open .child' + numItems).focus();
				}
				break;
			case 39:
				CloseDropDown();
				var grandparent = $(parent).attr('aria-labelledby');
				var classText = $('#'+grandparent).attr('class').replace('menuitem topLevel ', '');
				var integer = parseInt(classText.replace('item', ''));
				if((integer + 1) <= numberOfLists){
					var item = $('#stamatsMenu .item' + (integer+1).toString());
					var list = $(item).attr('aria-owns');
					if(typeof list !== typeof undefined && list !== false){
						RemoveActive();
						$(item).parent().addClass('active');
						$(item).attr('aria-expanded', 'true');
						$('#'+list).addClass('open').css('display','block');
						$('#'+list +' .child1').focus();
					}else{
						RemoveActive();
						$(item).parent().addClass('active');
						$(item).focus();
					}
				}else{
					var item = $('#stamatsMenu .item' + integer.toString());
					var list = $(item).attr('aria-owns');
					if(typeof list !== typeof undefined && list !== false){
						RemoveActive();
						$(item).parent().addClass('active');
						$(item).attr('aria-expanded', 'true');
						$('#'+list).addClass('open').css('display','block');
						$('#'+list +' .child1').focus();
					}else{
						RemoveActive();
						$(item).parent().addClass('active');
						$(item).focus();
					}
				}
				break;
			case 40:
				var numItems = $('.dropdown-menu.open li').length;
				var integer = parseInt($(this).attr('class').replace('child', ''));
				if((integer + 1) <= numItems){
					$('.dropdown-menu.open .child' + (integer+1)).focus();
				}else{
					$('.dropdown-menu.open .child1').focus();
				}
				break;
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
				var letter = String.fromCharCode(e.keyCode);
				var tabs = $('#stamatsMenu .dropdown-menu.open li a span');
				for(x = 0; x < tabs.length; x++){
					if(tabs[x].innerHTML.charAt(0).toLowerCase() == letter.toLowerCase()){
						$(tabs[x]).parent().focus();
						break;
					}
				}
				break;
			default:
				break;
		}
	});

	//enter 13, spacebar 32, left 37, right 39, up 38, down 40, tab 9, also ability to search by keys
	function CloseDropDown(){
		$('#stamatsMenu .dropdown-menu.open').removeClass('open').css('display', 'none');
	}

	function RemoveActive(){
		$('#stamatsMenu .dropdown a[aria-expanded=true]').attr('aria-expanded', 'false');
		$('#stamatsMenu li.active').removeClass('active');
	}


	/*Replace today's date with "Today" on Events*/
	$('.event .date').each(function(control){
		var date = $(this).children('.sr-only').text();
		var d = new Date();

		var month = d.getMonth()+1;
		var day = d.getDate();

		var today = (month<10 ? '0' : '') + month + '/' +
			(day<10 ? '0' : '') + day + '/' +
			d.getFullYear();
		if(today == date)
		{
			$(this).text('Today');
			$(this).attr("class", "date today");
		}
	});
	$('.searchBox :input').val('');

	/* Attach menu to top of window when scrolling down */
	var distance = $('.mainMenu').offset().top,
    $window = $(window);
	var wrap = $('.mainMenu');
	$window.scroll(function(){
		if($(window).width() > 767){
			if($window.scrollTop() >= distance ){
				if($('#ControlBar').length){
					wrap.addClass("menuFixed admin");
				}else{
					wrap.addClass("menuFixed");
				}
			}else{
				if($('#ControlBar').length){
					wrap.removeClass("menuFixed admin");
				}else{
					wrap.removeClass("menuFixed");
				}
			}
		}
	});

	/* Slide-in element in footer */
	var $animation_elements = $('.slideIn');
	var $window = $(window);

	function check_if_in_view(){
		var window_height = $window.height();
		var window_top_position = $window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$.each($animation_elements, function(){
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			if((element_bottom_position >= window_top_position)&&(element_top_position <= window_bottom_position)){
				$element.addClass('in-view');
			}else{
				$element.removeClass('in-view');
			}
		});
	}
	$window.on('scroll resize', check_if_in_view);
	searchbar_max();
	function searchbar_max(){
		var width = $('.searchArea').width() - 100;
		$('#CSU-search-box').css('max-width', width);
	}
	$window.on('resize', searchbar_max);
	$window.trigger('scroll');

	$('#CSU-search-box').focusin(function(){
		if(window.innerWidth > 767){
			$('#claytonMenu').css('position', 'absolute').css('left','10000px');
		}
	});
	$('#CSU-search-box').focusout(function(){
		if(window.innerWidth > 767){
			setTimeout(
				function(){
					$('#claytonMenu').css('position', 'static').css('left', '0px');
				},500
			);
		}
	});

	$('.majorWhy blockquote').attr('role', 'complementary');
});
