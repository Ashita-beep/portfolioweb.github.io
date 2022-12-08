function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  function draw() {
    
   // fill("teal");
   /* rect(25,mouseX,25,100);
    rect(mouseX/2,25,25,100, 5,10,15,20);
    rect(200,100,frameCount/10,150);
    circle(200,400-frameCount/5,10+frameCount/20);
     rect(250,100,250,100);
    rect(frameCount % 400,200,100,100)
    if (mouseX > 200 && mouseY <200)
      {
        fill('red')
      }
    else
      {fill("blue")}
  }
  rect (mouseX,mouseY,50,50)*/
  
     if (mouseIsPressed === true)
  if( mouseX< 350 && mouseY<350)
     
     { fill("red")}
  else if ( mouseX>350 && mouseY<350)
          {
          fill("teal")
          }
  else if ( mouseX<350 && mouseY>350)
          {
          fill("yellow")
          }
  else
  { fill("purple")}
    rect (mouseX,mouseY,50,50)
    
  }