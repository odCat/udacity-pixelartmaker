// Initialize background color
const BGCOLOR="#ffffff"
// Initialize the drawing color
let fgColor=$(".color-picker").val();
// Initialize grid flag
let isGrid=Boolean("falst");

/*
 * Function to create the drawing grid
 */
function makeGrid(heigth, width) {
	console.log("Log: makeGrid(): " + heigth + " " + width);
	deleteGrid();
	for (var i = 0; i < heigth; i++)
	{
		$(".pixel-canvas").append("<tr class=\"gridRow\"></tr>");
		console.log("Log: makeGrid(): Rows" + i);
	}
	for (i = 0; i < width; i++)
	{
		$(".gridRow").each(function ()
			{
				$(this).append("<td class=\"grid-cell\"></td>");
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
$(".draw-grid-button").click(function ()
	{
		let height = $(".input-height").val();
		let width = $(".input-width").val();
		
		// Reset input text boxes values
		$(".input-height").val("");
		$(".input-width").val("");

		console.log("height = " + height + "; width = " + width);

		// Delete grid if grid exists
		if (isGrid)
		{
		deleteGrid();
		}

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
$(".color-picker").on("change", function ()
	{
		fgColor = $(".color-picker").val();
	});

/*
 * Event on table cell click - change background color to selected color
 */
$(".pixel-canvas").on("click",".grid-cell", function ()
	{
		console.log("td: on click event");
		$(this).css("background-color",fgColor);
	});
