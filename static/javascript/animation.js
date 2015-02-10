$(function() {
					var buttonRight = $(".embed-social-button"),
						buttonLeft = $(".embed-social-button-left"),
						playButton = $(".embed-play-button"),
						iframe = $(".youtube-iframe"),
						tlPlayButtonAppear = new TimelineMax();
					
				//		tlButtonsAppear = new TimelineMax();

				//		tlButtonsAppear.timeScale();
					
				//		tlButtonsAppear
							//		.staggerFrom(buttonLeft, 3, {scale: "0", right: "67%", rotation: "45", ease:Elastic.easeOut, delay:0.75}, 0.25)
							//		.staggerFrom(buttonRight, 3, {scale: "0", left: "67%", rotation: "45", ease:Elastic.easeOut}, 0.25, "-=3")
							//		.from(buttonMiddle, 3, {scale: "0", bottom: "67%", rotation: "45", ease:Elastic.easeOut}, "-=2.75")
							//		.to(buttonMiddle, 0.5, {scale: "0.85", rotation: "5", repeat:-1, yoyo:true, ease:Sine.easeInOut}, "loop-=1.7");
							//		.staggerTo(buttonLeft, 3, {rotation: "360", repeat:-1, yoyo:true, repeatDelay:15, ease:Sine.easeInOut}, 1.15, "loop")
							//		.staggerTo(buttonRight, 3, {rotation: "360", repeat:-1, yoyo:true, repeatDelay:15, ease:Sine.easeInOut}, 1.15, "loop+=3");


						tlPlayButtonAppear.timeScale();

						tlPlayButtonAppear
							.from(playButton,3, {scale: "0", bottom: "100%", rotation: "60", ease:Elastic.easeOut, delay: "0.5"});
});	