var speed=5;
var opacity;
var star_colors;
class Star
{
    
    constructor()
    {
      this.initStar();
    }
    
    initStar()
    {
          this.angle=random(0,360);
          this.r=random(random(10,300),width);
          this.x=centerX+(this.r*cos(this.angle));
          this.y=centerY+(this.r*sin(this.angle));
          this.sX=this.x;
          this.sY=this.y;
          this.thickness=0.5;
          this.color=star_colors[int(random(0,star_colors.length))];
    }
    
    update()
    {
      this.r+=speed;

      if(speed<minSuperLuminal){this.thickness+=speed/100;}
      else
      {
        if(speed<maxSuperLuminal)
          this.thickness=(maxSuperLuminal-speed)*1.8/(maxSuperLuminal-minSuperLuminal);//1.8 è lo spessore di inizio warp
      }
      opacity=speed*3;
      this.x=centerX+(this.r*cos(this.angle));
      this.y=centerY+(this.r*sin(this.angle));
      
      this.reset();
    }
    
    draw()
    {
      strokeWeight(1);
      stroke(this.color._getRed(),this.color._getGreen(),this.color._getBlue(),opacity);
      line(this.sX,this.sY,this.x,this.y);
      strokeWeight(this.thickness);
      stroke(this.color);
      point(this.x,this.y);
    }
    
    reset()
    {
      if (this.x<0 | this.y<0 | this.x>width | this.y>height)
      {
         this.initStar();
      }
    }
}
