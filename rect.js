function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  function setup() {
    createCanvas(600, 600);
    background(220);
  }
  
  function draw() {
    if( mouseX< 200 && mouseY<200)
     
     { fill("red")}
  else if ( mouseX<400 &&  mouseY<200)
          {
          fill("teal")
          }
  else if ( mouseX>=600 &&  mouseY<200)
          {
          fill("yellow")
          }
  else if ( mouseX<200 && mouseY<400)
          {
          fill("grey")
          }
  else if ( mouseX<400 && mouseY<400)
          {
          fill("blue")
          }
  else if ( mouseX>=600 && mouseY<400)
          {
          fill("green")
          }
  else if ( mouseX<200 && mouseY<600)
          {
          fill("black")
          }
  else if ( mouseX<400 && mouseY<600)
          {
          fill("yellow")
          }
  else if ( mouseX>=600 && mouseY600)
          {
          fill("darkgreen")}
  else
        { 
          fill("orange")
        }
    rect (mouseX,mouseY,50,50)
  }