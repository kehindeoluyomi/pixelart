// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
$(document).ready(function(){

$("#sizePicker").submit(function makeGrid(){
var rows = $("#inputHeight").val();
var columns = $("#inputWidth").val();
for (var r = 1; r <= rows; r++) {
	$("table").append("<tr> </tr>");
	for (var c = 1; c <= columns; c++) {
		$('tr:last').append("<td></td>")
		$('td').attr("class",'cells')
	}
}

grid.preventDefault();
}


$('.cells').click(function(event){
	var paint = $('#colorpicker').val();
	//$(event.target).css('background-color', paint);
	$(this).attr('background-color');
});

