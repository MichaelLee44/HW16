/*
Michael Kellems
CIT 215
Prof. Kane
Date
*/

//showing the requested info
$('#name').text("Michael Kellems")
$('#major').text("CIT - Software Development")
$('#year').text("Junior")
$('h4').text("United States")

//messing around with style. Why is the h1 tag that is inside of "header" also centered when I only told it to center the content in "body?"
$('body').css("text-align", "center")
$('#name').css("background-color", "orange")