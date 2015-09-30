
var canvas;
var ctx;


function Game()
{
	player = new Player();
	goal = new Goal();
	initialiseCanvas();

	// Not clear what this variable means
	this.m_hasHitGameOver = false;

	// 1 = up "keycode = 87"
	// 2 = down "keycode = 83"
	// 3 = left "keycode = 65"
	// 4 = right "keycode = 68"
}
Game.prototype.keyInputUp = function(p_keyListener)
{
	// Not clear what the value given means
	// N could possible mean North as in Up 
	player.direction = 'N';
}
Game.prototype.keyInputDown = function(p_keyListener)
{
	if(p_keyListener.keyCode == 87)
		player.direction = 'U';
	else if(p_keyListener.keyCode == 83)
		player.direction = 'D';
	else if(p_keyListener.keyCode == 65)
		player.direction = 'L';
	else if(p_keyListener.keyCode == 68)
		player.direction = 'R';
}

Game.prototype.gameLoop = function()
{

	ctx.clearRect(0,0,canvas.width, canvas.height);

	//console.log("GameLoop");
	window.requestAnimationFrame(game.gameLoop);

	player.Update();

	if(this.m_hasHitGameOver)
		DrawGameOver();
	else if(player.CheckCollision(goal))
	{
		goal.Update();
		this.m_hasHitGameOver = true;
	}
	else
	{
		player.Draw();
		goal.Draw();		
	}

}

function initialiseCanvas()
{

	canvas = document.createElement("canvas");
	// CTX is the context that we will draw on.

	ctx = canvas.getContext("2d");

	document.body.appendChild(canvas);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}
function DrawGameOver()
{
	ctx.save();
	//add in your own colour
	ctx.fillStyle = rgb(100,100,100);
	//change this
	ctx.font = 'italic 40pt Calibri';
	//otherwise bottom
	ctx.textBaseline = "top";
	//Put your message here; x and y are where the message will appear...
	ctx.fillText("Collision!", 200, 200);
	//Any idea what save and restore do?
	ctx.restore();
}
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}
