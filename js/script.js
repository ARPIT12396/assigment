var step = 100;
		var scrolling = true;

		// Wire up events for the 'scrollUp' link:
		$(".preSlide").bind("click", function(event) {
			event.preventDefault();
			// Animates the scrollTop property by the specified
			// step.
			$("div").animate({
				scrollLeft: "-=" + step + "px"
			});
		});

		$(".nextSlide").bind("click", function(event) {
			event.preventDefault();
			$("div").animate({
				scrollLeft: "+=" + step + "px"
			});
		})


	