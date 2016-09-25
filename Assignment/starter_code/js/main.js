$(document).ready(function(){
  $("nav ul li:first-child").click(function(){
    $("nav ul").toggleClass("open"); 
  })

  //hide "read less" and "learn less" and "post-text" upon loading
	$(".read-less").hide();
	$(".learn-less").hide();
	$(".post-text").hide();
	$("#side-text").hide();

	//#1 Prevent form submission 
	event.preventDefault()

	//#2 Detect when "read more" or "learn more" is clicked 
	$("#readArticle1").click(revealArticle1);
	$("#readArticle2").click(revealArticle2);

	//#2b Detect when "read less" or "learn less" is clicked
	$("#closeArticle1").click(hideArticle1);
	$("#closeArticle2").click(hideArticle2);

	//#3 Click on "read more" or "learn more" slide down and show content
	//#4 the "read more" button hides
	//#5 the "read less" button shows 
		function revealArticle1(){
			 console.log("reveal post text");
			 $("#article1").slideDown();
		 $("#readArticle1").hide();
		 $("#closeArticle1").show();
		}
	function revealArticle2(){
		$("#article2").slideDown();
		$("#readArticle2").hide();
		$("#closeArticle2").show();
	}

	//#6 When read less clicked, content slides up and "read less" hides while "read more" shows
	//#7 When "learn more" is clicked, the span in p slides down and "learn more" hides
	//#8 When "read less" is clicked, the span in p slides up and the "learn more" button shows
	function hideArticle1(){
		$("#article1").slideUp();
		$("#readArticle1").show();
		$("#closeArticle1").hide();
	}
	function hideArticle2(){
		$("#article2").slideUp();
		$("#readArticle2").show();
		$("#closeArticle2").hide();

	}
})


