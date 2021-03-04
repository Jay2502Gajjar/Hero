class hero{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("Superhero-01.png")
		this.body=Bodies.circle(this.x, this.y, 80, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*5, this.r*5)
		pop()
 }
}