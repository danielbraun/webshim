(function($){
	// Set up the 'play' buttons for each runnable code example.
	//todo need to write a prism plugin
	/*
	 $(function(){
	 
	 $('.runnable').each(function(){
	 var code = this;
	 var button = '<div class="run" title="Run"></div>';
	 $(button).insertBefore(code).bind('click', function(){
	 eval($(code).text());
	 });
	 });
	 });
	 */
	// highlight the active menu. Modified from http://expressjs.com/app.js
	$(function(){
		var prev;
		var n = 0;
		
		var headings = $('h2,p.header').map(function(i, el){
			return {
				top: $(el).offset().top,
				id: el.id
			};
		});
		
		function closest(){
			var h;
			var top = $(window).scrollTop();
			var i = headings.length;
			while (i--) {
				h = headings[i];
				if (top >= h.top) {
					return h;
				}
			}
		}
		var _onScroll = (function(){
			var timer;
			var fn = function(){
				var h = closest();
				if (!h) {
					return;
				}
				
				if (prev) {
					//prev.removeClass('color', '#000');
					prev.removeClass('active');
				}
				
				var a = $('a[href="#' + h.id + '"]');
				a.css('color', '#18b6e5');
				a.addClass('active');
				
				prev = a;
			};
			return function(){
				clearTimeout(timer);
				timer = setTimeout(fn, 1);
			};
		})();
		
		$(document).on('scroll', _onScroll);
		_onScroll();
	});
})(jQuery);
	
