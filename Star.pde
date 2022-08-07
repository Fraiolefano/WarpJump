public static float speed=5;
public static float opacity;
public static color[] star_colors={#99cdff,#ffffff};
class Star
{
    float x;
    float y;
    float thickness;
    float r;
    float angle;
    float sX,sY;
    color star_color;
    public Star()
    {
      initStar();
    }
    
    private void initStar()
    {
        angle=random(0,360);
        r=random(random(10,300),width);
        x=centerX+(r*cos(angle));
        y=centerY+(r*sin(angle));
        sX=x;
        sY=y;
        thickness=0.5;
        star_color=star_colors[int(random(0,star_colors.length))];
    }
    
    public void update()
    {
      r+=speed;
      if(speed<minSuperLuminal){thickness+=speed/100;}
      else
      {
        if(speed<maxSuperLuminal)
          thickness=(maxSuperLuminal-speed)*1.8/(maxSuperLuminal-minSuperLuminal);//1.8 è lo spessore di inizio warp
      }
      opacity=speed*3;
      x=centerX+(r*cos(angle));
      y=centerY+(r*sin(angle));
      reset();
    }
    
    public void draw()
    {
      strokeWeight(1);
      stroke(star_color,opacity);  
      line(sX,sY,x,y);
      strokeWeight(thickness);
      stroke(star_color);
      point(this.x,this.y);
    }

    private void reset()
    {
      if (x<0 | y<0 | x>width | y>height)
      {
         initStar();
      }
    }
}
