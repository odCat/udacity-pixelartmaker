// Initialize background color
const BGCOLOR="#ffffff"
// Initialize the drawing color
let fgColor=$(".color-picker").val();
// Initialize canvas flag
let isCanvas=Boolean(false);
// Draw canvas element
let canvas = $(".pixel-canvas");
// Draw canvas size selectors
let inputHeight = $(".input-height");
let inputWidth = $(".input-width");

/*
 * Function to create the drawing canvas
 */
function makeCanvas(heigth, width) {
	// Create rows
	for (let i = 0; i < heigth; i++)
	{
		canvas.append("<tr class=\"gridRow\"></tr>");
	}

	// Create cells for every row
	let rows = $(".gridRow");
	for (i = 0; i < width; i++)
	{
		rows.each(function ()
			{
				/* TODO: understadnd how closures works; maybe update this */
				$(this).append("<td class=\"grid-cell\"></td>");
			});
	}

	// Switch canvas flag
	isCanvas = true;
}

/*
 * Function to delete the drawing grid
 */
function deleteCanvas()
{
	canvas.html("");
	isCanvas = false; // Switch canvas flag
}

/*
 * Event on submit button click - choose size and draw grid
 */
$(".draw-grid-button").click(function ()
	{
		let height = Number(inputHeight.val());
		let width = Number(inputWidth.val());
		
		// Reset input text boxes values
		inputHeight.val("");
		inputWidth.val("");


		// Delete grid if grid exists
		if (isCanvas)
		{
			deleteCanvas();
		}

		/* TODO: add erroneous input handling */
		if (height && width)
		{
			makeCanvas(height, width);
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
canvas.on("click",".grid-cell", function ()
	{
		$(this).css("background-color",fgColor);
	});
