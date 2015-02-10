$(document).ready(function() {

	var underPng = $('#underPng'),
	    underJpg = $('#underJpg'),
	    png = $('#png'),
	    jpg = $('#jpg');


	underPng.click(function() {
	    alert("div under png clicked" );
	});

	underJpg.click(function() {
	    alert("div under jpg clicked" );
	});

	png.click(function() {
	    alert("png on top clicked" );
	});

	jpg.click(function() {
	    alert("jpg on top clicked" );
	});

});