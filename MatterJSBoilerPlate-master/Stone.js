class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
	}
		this.x=x;
		this.y=470;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		this.image = loadImage("rock.png");
		World.add(world, this.body);

	}
	display()
	{
		var pos =this.body.position;
		  imageMode(CENTER);
		  image(this.image, pos.x,pos.y,this.r, this.r)
		  
			
	}

}