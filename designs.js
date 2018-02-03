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
	deleteGrid();
	for (var i = 0; i < heigth; i++)
	{
		$(".pixel-canvas").append("<tr class=\"gridRow\"></tr>");
	}
	for (i = 0; i < width; i++)
	{
		$(".gridRow").each(function ()
			{
				$(this).append("<td class=\"grid-cell\"></td>");
			});
	}
}

/*
 * Function to delete the drawing grid
 */
function deleteGrid()
{
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


		// Delete grid if grid exists
		if (isGrid)
		{
		deleteGrid();
		}

		/* TODO: add erroneous input handling */
		if (height && width)
		{
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
		$(this).css("background-color",fgColor);
	});
