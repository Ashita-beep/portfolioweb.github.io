function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  
  let Hslider,Vslider,sldWidth,sldHeigh,SldCorner,RdShape, CpShape1, CpShape2;
  
  //string variables
  let param1="Width"
  let param2="Height"
  
  
  function setup() 
  {
    createCanvas(600, 600);
    Hslider = createSlider( 1,9,8)
    Hslider.position(610, 25)
    Hslider.style('width', '150px')
    
    Vslider = createSlider( 1,9,8)
    Vslider.position(610, 50)
    Vslider.style('width', '150px')
    
    sldWidth= createSlider( 1,100,25)
    sldWidth.position(610, 80)
    sldWidth.style('width', '150px')
    
    sldHeight= createSlider( 1,100,25)
    sldHeight.position(610, 110)
    sldHeight.style('width', '150px')
    
    RdShape = createRadio();
    RdShape.option('Rect')
    RdShape.option('RoundRect')
    RdShape.option('Circle')
    RdShape.selected("Rect")
    RdShape.position (610,160)
    
    CpShape1= createColorPicker('teal')
    CpShape1.position(610,190)
    CpShape1.style("height", "25px")
    
    CpShape2= createColorPicker('blue')
    CpShape2.position(610,220)
    CpShape2.style("height", "25px")
    
  }
  
  function draw() {
    background(220);
    
    text ("dummy", 550, 40)
    text ("dummy", 550, 65)
    text (param1, 550, 90)
    text (param2, 550, 120)
    
    //for( start; condition; increment)
    //{
    
    // }
    for( m=0 ;m<Vslider.value() ; m++ )
      {
        for (i=0; i<Hslider.value(); i++)
          {
            {
                if((m+i) % 2== 0)
                {
                fill(CpShape1.color());
                } 
                else 
                  {
                    fill(CpShape2.color());
                  }
              }
            
            if (RdShape.value()== "Rect")
              {param1="Width"
               param2="Height"
               sldHeight.show()
            rect (60*i+20, 60*m +20,sldWidth.value() ,sldHeight.value() )
                }
            else if (RdShape.value()== 'RoundRect')
              {param1="Width"
               param2="Height"
               sldHeight.show()
            rect (60*i+20, 60*m +20,sldWidth.value() ,sldHeight.value(),10 )
                }
            else
              {
                param1="Width"
               param2="Height"
               sldHeight.hide()
            circle (60*i+45, 60*m +45,sldWidth.value()  )
                } 
             
          }
  
      }
    
  }