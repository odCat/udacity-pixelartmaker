// Initialize the drawing color
var fgColor=$("#colorPicker").val();
// Initialize grid color
var bgColor="#ffffff"

// Exent on submit button - choose size and draw grid
$("input#drawGrid").click(function ()
{
		var height = $("#inputHeight").val();
		var width = $("#inputWidth").val();
		console.log("height = " + height + "; width = " + width);
		if (height && width)
		{
				console.log("Log: on click: input grid");
				if ($("tr td"))
				{
					deleteGrid();
				}
				makeGrid(height, width);
		}
		
});

// Event change draw color
$(":input#colorPicker").on("change", function ()
		{
			fgColor = $("input#colorPicker").val();
		});

// Function to create the drawing grid
function makeGrid(heigth, width) {
		console.log("Log: makeGrid(): " + heigth + " " + width);	
		for (var i = 0; i < heigth; i++)
		{
				$("#pixelCanvas").append("<tr class=\"gridRow\"></tr>");
				console.log("Log: makeGrid(): Rows");
		}
		for (i = 0; i < width; i++)
		{
				$(".gridRow").each(function ()
						{
								$(this).append("<td class=\"gridCell\"></td>");
						});
				console.log("Log: makeGrid(): Cells");
		}
}

// Function to delete the drawing grid
function deleteGrid()
{
		$("tr").remove();
}

// Event - Draw
$("#pixelCanvas").on("click",".gridCell", function ()
{
		console.log("td: on click event");
		$(this).css("background-color",fgColor);
});
