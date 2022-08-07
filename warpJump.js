//By Fraiolefano

let N_STARS=500;

let star=new Array();
var centerX=0;
var centerY=0;
var minSuperLuminal=13;
var maxSuperLuminal=18;
var slider;

function setup()
{
  pixelDensity(1);
  createCanvas(window_size,window_size);
  
  centerX=width/2;
  centerY=height/2;
  star_colors=[color("#99cdff"),color("#ffffff")];

  slider=createSlider(0,30,5,0.1);
  slider.addClass("sliderSpeed");
  slider.parent(ms);
  
  for(var i=0;i<N_STARS;i++)
  {
    star.push(new Star());
  }
}

function draw()
{
  speed=slider.value();

  background(0);
  
  for (var i=0;i<N_STARS;i++)
  {
    star[i].update();
    star[i].draw();
  }
}
