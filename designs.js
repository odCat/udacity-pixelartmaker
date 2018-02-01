// Initialize background color
const BGCOLOR="#ffffff"
// Initialize the drawing color
let fgColor=$("#colorPicker").val();

/*
 * Function to create the drawing grid
 */
function makeGrid(heigth, width) {
	console.log("Log: makeGrid(): " + heigth + " " + width);	
	deleteGrid();
	for (var i = 0; i < heigth; i++)
	{
		$("#pixelCanvas").append("<tr class=\"gridRow\"></tr>");
		console.log("Log: makeGrid(): Rows" + i);
	}
	for (i = 0; i < width; i++)
	{
		$(".gridRow").each(function ()
			{
				$(this).append("<td class=\"gridCell\"></td>");
			});
		console.log("Log: makeGrid(): Cells" + i);
	}
}

/*
 * Function to delete the drawing grid
 */
function deleteGrid()
{
	console.log("Log: deleteGrid()");
	$(".gridRow").remove();
}

/*
 * Event on submit button click - choose size and draw grid
 */
$("#drawGrid").click(function ()
	{
		let height = $("#inputHeight").val();
		let width = $("#inputWidth").val();
		console.log("height = " + height + "; width = " + width);

		/* TODO: add erroneous input handling */
		if (height && width)
		{
			console.log("Log: on click: input grid");
			makeGrid(height, width);
		}
	});

/*
 * Event on color change 
 */
$(":input#colorPicker").on("change", function ()
	{
		fgColor = $("input#colorPicker").val();
	});

/*
 * Event on table cell click - change background color to selected color
 */
$("#pixelCanvas").on("click",".gridCell", function ()
	{
		console.log("td: on click event");
		$(this).css("background-color",fgColor);
	});
