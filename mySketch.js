let dice20;

var deceleration = 0.0005;

var l=200;

let uno;	
let dos;
let tres;
let cuatro;
let cinco;
let seis;

let roboto;
function preload() {
  roboto = loadFont('https://openprocessing-usercontent.s3.amazonaws.com/files/user359411/visual1839435/h6493d6e84bd34c00583e4393ab190e6e/Roboto-Medium.ttf');
}


function setup() {
	createCanvas(windowWidth, windowHeigth, WEBGL);
	D6 = new Dado(6);
	
	l=width
	
	uno = loadSound('1.m4a');
	dos = loadSound('2.m4a');
	tres = loadSound('3.m4a');
	cuatro = loadSound('4.m4a');
	cinco = loadSound('5.m4a');
	seis = loadSound('6.m4a');
	
	textFont(roboto);
  textSize(l);
  textAlign(CENTER, CENTER);
	
	D6.speed = 0;
	
}

function draw() {
	background(100)
	fill(255);
	if(D6.speed<=0){
		D6.speed=0;
		if(D6.resultado==5){
			rotateY(PI/2);
		}else if(D6.resultado==2){
			rotateY(-PI/2);
		}else if(D6.resultado==6){
			rotateY(PI);
		}else if(D6.resultado==3){
			rotateX(PI/2);
		}else if(D6.resultado==4){
			rotateX(-PI/2);
		}else{
			rotateY(0);
		}
	}else if (D6.speed>0){
		rotateX (360 * D6.speed);
		rotateY (360 * D6.speed);
		rotateZ (360 * D6.speed);
		D6.speed -= deceleration;
	}
	
	verDadoFisico();
	
	//document.getElementById("velocidad").innerHTML = 'velocidad = ' + D6.speed;
	document.getElementById("frame").innerHTML = 'resultado = ' + D6.resultado;
	document.getElementById("bin").innerHTML = 'binario = ' + convertToBinary(D6.resultado);
	
}

function verDadoFisico(){
	box(l);
	
	translate(0,-5,l/2);
	fill(0);
	text(1,0,0);
	translate(0,5,-l/2);
	
	translate(l/2,-5,0);
	rotateY (PI/2);	
	fill(0);
	text(2,0,0);
	rotateY (-PI/2);
	translate(-l/2,5,0);
		
	
	translate(-l/2,-5,0);
	rotateY(-PI/2)	
	fill(0);
	text(5,0,0);
	rotateY(PI/2);
	translate(l/2,5,0);
	
	translate(0,-5,-l/2);
	rotateY(PI)	
	fill(0);
	text(6,0,0);
	rotateY(-PI);
	translate(0,5,-l/2);
	
	translate(0,l/2,l);
	rotateX(PI/2)	
	fill(0);
	text(3,0,0);
	rotateX(-PI/2);
	translate(0,-l/2,-l);
	
	translate(0,-l/2,l);
	rotateX(PI/2);
	rotateZ(PI);
	fill(0);
	text(4,0,0);
	rotateZ(-PI);
	rotateX(-PI/2);
	translate(0,l/2,-l);
}

function convertToBinary (number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    return binary;
}


//-------------------------------------------------------------------------------------------
class Dado{
	constructor(_nCaras){
		this.nCaras = _nCaras;
		this.speed = 0;
		this.resultado=1
	}
	tirar(){
		this.speed = 0.05
		//si dado.length vale 6 (1,2,3,4,5,6) numero valdrá de 0 a 5
		this.resultado = Math.floor(Math.random() * this.nCaras)+1;
		
		if(this.resultado==5){
			cinco.play();
		}else if(this.resultado==2){
			dos.play();
		}else if(this.resultado==6){
			seis.play();
		}else if(this.resultado==3){
			tres.play();
		}else if(this.resultado==4){
			cuatro.play();
		}else if(this.resultado==1){
			uno.play();
		}
	}
}

function mousePressed(){
	D6.tirar();
}
