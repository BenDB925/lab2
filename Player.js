
function Player()
{
	this.m_x = 50;
	this.m_y = 50;
	this.m_width = 20;
	this.m_height = 20;
	this.speed = 2;
	this.direction = 'N';
}
Player.prototype.Update = function()
{
	if(this.direction == 'U')
		this.m_y -= this.speed;
	else if( this.direction == 'D')
		this.m_y += this.speed;
	else if( this.direction == 'L')
		this.m_x -= this.speed;
	else if( this.direction == 'R')
		this.m_x += this.speed;
}

Player.prototype.CheckCollision = function(p_goal)
{ 
	var collides = false;
         
    //do the two bounding boxes overlap?
    if ((this.m_x < p_goal.m_x + p_goal.m_width) &&
    	(this.m_x + this.m_width > p_goal.m_x) &&
    	(this.m_y + this.m_height > p_goal.m_y) &&
    	(this.m_y < p_goal.m_y + p_goal.m_height) )
    	{           
            collides = true;   
        }
         
        return collides;
};




Player.prototype.Draw = function()
{
	ctx.fillStyle = rgb(0,255,0);
	ctx.fillRect(this.m_x, this.m_y, 20, 20);
}
/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';
}

/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}