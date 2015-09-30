
function Goal()
{
	this.m_x = 400;
	this.m_y = 50;
	this.m_width = 50;
	this.m_height = 50;
	this.m_isAlive = true;
}

Goal.prototype.Update = function()
{
	this.m_alive = false;
}

Goal.prototype.Draw = function()
{
	if(this.m_isAlive)
	{
		ctx.fillStyle = rgb(255,0,0);
		ctx.strokeRect(this.m_x, this.m_y, this.m_width, this.m_height);
	}
}
/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min){ 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}