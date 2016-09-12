$(document).ready(function() {

	//rebate close button click
	$('.close-button img').click(function(){
		$('.rebate-offers').hide();
	});
	
	//scrolling on click of header links
	$('.nav-link-wrapper a').click(function () {
		$('html, body').animate({
			/*if header is fixed start*/
			//scrollTop: $($(this).attr('href')).offset().top-heightValue
			/*if header is fixed end*/
			scrollTop: $($(this).attr('href')).offset().top
		}, 500);
		return false;
	});


			//code for setting margin-top dur to fixed header
			/*var heightValue=0;
			heightCalculator();
			$(window).resize(function(){
			   heightCalculator();
			});
			function heightCalculator(){
				heightValue=$('header').outerHeight();
				$('.intro-section').css('margin-top',heightValue);			
			}*/
			
			/*
			for features ul li
			$('.features li').each(function(){
				var height=$(this).height();
				$(this).css('max-height',height);
			});*/
			
			$('.question-list p:first-child').addClass('active');
			var quesAnsArray=[],counter=1,totalQues=0;
			totalQues=$('.question').length;
			$('.total-ques-no').text(totalQues);
			

				$('.answer-panel span').click(function(){
					var quesAnsObject={};
					counter=counter+1;
					$('.ques-no').text(counter);
					if(counter<7){
						var ques=$('.quiz-container .active').text();					
						var ans = $(this).text();
						var activeElement=$('.quiz-container .active');
						$(activeElement).removeClass('active');
						$(activeElement).next().addClass('active');	
						quesAnsObject.ques=ques;
						quesAnsObject.ans=ans;
						quesAnsArray.push(quesAnsObject);	
						/*for(i=0;i<quesAnsArray.length;i++){
							console.log(quesAnsArray[i].ques + ' ' + quesAnsArray[i].ans);
						}*/
						if(counter==6){
							$('.quiz-container').hide();
							$('header').css('z-index','0');
							$('.overlay').show();
							$('.dog-risk-section .section-sub-text').hide();
							var html="";
							for(i=0;i<quesAnsArray.length;i++){
								html=html+'<p><span>'+ quesAnsArray[i].ques +'</span><span>'+ quesAnsArray[i].ans +'</span>';
							}
							$('.user-ques-ans').html(html);
							$('.result-container').show();

						}
					}
					

				});
			});