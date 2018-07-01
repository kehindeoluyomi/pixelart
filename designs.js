// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// Your code goes here!
$(document).ready(function() {
	$("#sizePicker").submit(function(event) {
		event.preventDefault();
		$('tr').remove();
		var rows = $("#inputHeight").val();
		var columns = $("#inputWidth").val();
		for (var r = 1; r <= rows; r++) {
			let row = $("<tr></tr>");
				for (var c = 1; c <= columns; c++) {
					row.append($("<td ></td>"));
				}
			$('table').append(row);
		}
	});


	$('table').on('click', 'td', function(event) {
		var paint = $('#colorPicker').val();
		console.log($(this).attr('style'));
		//$(this).attr('style')
		if ($(this).attr('style') !== undefined) {
			$(this).removeAttr('style');
			
	}else{
	$(this).css('background-color', paint);	
	}

		// $(event.target).css('background-color', paint);
		
	});


		
	

});