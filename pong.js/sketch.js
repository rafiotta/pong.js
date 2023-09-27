let xBolinha = 300;
let yBolinha = 200;
let diametro = 60;
let vXBolinha = 7;
let vYBolinha = 7;

let raio = diametro / 2;



function setup() {
    createCanvas(600,400);
  }
  
  function draw() {
    background(0);
    criarBolinha();
    movimentarBolinha();
    
    
    if(xBolinha + raio > width || xBolinha - raio < 0 ) {
       vXBolinha *= -1; 

    }

    yBolinha += vYBolinha;

    if(yBolinha + raio > height || yBolinha - raio <0 ) {
       vYBolinha *= -1;

    }


    function criarBolinha(){
        circle(xBolinha, yBolinha, diametro)
    }

    function movimentarBolinha (){
        xBolinha += vXBolinha;
    }

}