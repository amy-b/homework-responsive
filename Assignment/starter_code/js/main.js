$('document').ready(function(){
	$("header ul li:first-child").click(function(){ //detects when the hamburger menu clicked, toggles class "slideDown"
		$(this).parent().toggleClass("slideDown"); 
	/*
	$(this) refers to the element that triggered the event that the function is being run in response to (the click event).  
	So, $(this) refers to the hamburger menu, parent() selects the hamburger's parent element (which is the ul), and that is the element we toggle the class on
	This is an example of chaining methods in jQuery.  If we did .next() instead of parent(), it would select the hamburger menu's closest next sibling, which is the next li */
	});
});