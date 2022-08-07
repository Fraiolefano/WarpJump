//By Fraiolefano

int N=500;
static float centerX=0;
static float centerY=0;
Star[] star=new Star[N];
float minSuperLuminal=13;
float maxSuperLuminal=18;
void setup()
{
  size(600,600);
  centerX=width/2;
  centerY=height/2;
  for(int i=0;i<N;i++)
  {
    star[i]=new Star();
  }
}

void draw()
{
  background(0);
  for (int i=0;i<N;i++)
  {
    star[i].update();
    star[i].draw();
  }
}

void mouseWheel(MouseEvent e)
{
  if(e.getCount()==1) //RUOTA GIÙ
  {
    if(speed>0.1){speed-=0.1;}
  }
  else  //SU
  {
    if(speed<30) {speed+=0.1;}
  }
  println(speed);
}
