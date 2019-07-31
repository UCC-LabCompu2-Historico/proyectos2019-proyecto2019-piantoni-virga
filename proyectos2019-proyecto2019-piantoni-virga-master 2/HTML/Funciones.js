

//Para todos, tendiramos que poner que al poner un numero negativo, nos de error,
// o nos salga una alerta de que no se puede tomar ese numero.

//Canvas tutorial de mozilla forums

/*

function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
}

function perimetroCirculo(){
    var pi = Math.PI;
    var radio = parseFloat(document.getElementById('radio').value);
    var resultado = (2*pi*radio);
    var resultadoFinal = trunc(resultado, 2);
    alert("Resultado: " + resultadoFinal);
}


function perimetroCuadrado(){
    var lado = parseFloat(document.getElementById('lado').value);
    var resultado = 4 * lado;
    var resultadoFinal = trunc(resultado, 2);
    alert("Resultado: " + resultadoFinal);
}

function perimetroRectangulo(){
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultado = 2*(base+altura);
    var resultadoFinal = trunc(resultado, 2);
    alert("Resultado: " + resultadoFinal);

}

function areaCirculo(){
    var pi = Math.PI;
    var radio = parseFloat(document.getElementById('radio2').value);
    var resultado = (pi * (radio * radio));
    var resultadoFinal = trunc(resultado, 2);
    alert("Resultado: " + resultadoFinal);
}

*/
function areaCuadrado(){
    var ladoCD = parseFloat(document.getElementById('ladoCuadrado').value);
    var resultado = (ladoCD * ladoCD);
    var resultadoFinal = trunc(resultado, 2);
    alert("Resultado:  " + resultadoFinal);
}

function areaRectangulo(){
    var baseR = parseFloat(document.getElementById('baseRectangulo').value);
    var alturaR = parseFloat(document.getElementById('alturaRectangulo').value);
    var resultado = baseR*alturaR;
    var resultadoFinal = trunc(resultado, 2);
    alert("Resultado: " + resultadoFinal);
}
/*

//Animaciones

var posX;
var posY;
var can;
var can1;
var contexto;
var ctx;
var direccion;
window.onload = function() {
    can = document.getElementById("miCanvas");
    can1 = document.getElementById("miCanvas3")
    contexto = can.getContext("2d");
    ctx = can1.getContext("2d");
    posX = 15;
    posY = 15;
    direccion = 0;
    setInterval("dibujarCirculo()", 5);
    setInterval("dibujarCuadrado()", 10);
}



function dibujarCirculo() {
    var radioC = parseFloat(document.getElementById('radio').value);
    if (direccion == 0)
        posX++;
    else
        posX--;
    if (posX == 250)
        direccion = 1;
    if (posX == 25)
        direccion = 0;

    can.width = can.width; // limpia el canvas
    contexto.strokeStyle = "#000000";
    contexto.fillStyle = "blue";
    contexto.beginPath();
    contexto.arc(posX, 100, radioC, 0, Math.PI * 2, true);
    contexto.closePath();
    contexto.stroke();
    contexto.fill();
}

 */



/**Funcion trunc delimita la cantidad de cifras decimales a mostrar en resultado
 * @method trunc
 * @param x
 * @param posiciones
 * @return {number}
 */
function trunc (x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
}


/**
 *Calcula el perimetro del circulo
 * @method pemitroCirculo
 * @param Radio, ingresado por usuario
 * @return Valor del perimetro
 */
function perimetroCirculo(){
    var pi = Math.PI;
    var radio = parseFloat(document.getElementById('radio').value);
    var resultado = (2*pi*radio);
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncado);
}



/**
 *Calcula el perimetro del cuadrado
 * @method pemitroCuadrado
 * @param base, ingresado por usuario
 * @param altura, ingresado por usuario
 * @return Valor del perimetro
 */
function perimetroCuadrado(){
    var lado = parseFloat(document.getElementById('lado').value);
    var resultado = 4 * lado
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncado);
}

/**
 *Calcula el perimetro del rectangulo
 * @method pemitroRectangulo
 * @param base, ingresado por usuario
 * @param altura, ingresado por usuario
 * @return Valor del perimetro
 */
function perimetroRectangulo(){
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var resultado = 2*(base+altura);
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncado);

}

/**
 *Calcula el area del circulo
 * @method areaCirculo
 * @param radio, ingresado por usuario
 * @return Valor del area
 */
function areaCirculo(){
    var pi = Math.PI;
    var radio = parseFloat(document.getElementById('radio2').value);
    var resultado = (pi * (radio * radio));
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncado);
}


/**
 *Calcula el area del cuadrado
 * @method areaCuadrado
 * @param ladoCD, ingresado por usuario
 * @return Valor del area
 */
/*
function areaCuadrado(){
    var ladoCD = parseFloat(document.getElementById('ladoCuadrado').value);
    var resultado = (ladoCD * ladoCD);
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncao);
}
*/
/**
 *Calcula el area del rectangulo
 * @method areaRectangulo
 * @param baseR, ingresado por usuario
 * @param alturaR, ingresado por usuario
 * @return Valor del area
 */
function areaRectangulo(){
    var baseR = parseFloat(document.getElementById('baseRectangulo').value);
    var alturaR = parseFloat(document.getElementById('alturaRectangulo').value);
    var resultado = baseR*alturaR;
    var resultadoTruncado = trunc(resultado, 2);
    alert("El resultado es: " + resultadoTruncado);
}


var posX;
var posY;
var can;
var can1;
var contexto;
var ctx;
var direccion;
window.onload = function() {
    can = document.getElementById("miCanvas");
    can1 = document.getElementById("miCanvas3")
    contexto = can.getContext("2d");
    ctx = can1.getContext("2d");
    posX=15;
    posY = 15;
    direccion = 0;
    setInterval("dibujarCirculo()",5);
    setInterval("dibujarCuadrado()",10);
}
/*
 * Dibuja un circulo en base a un radio ingresado por el usuario y se rebota entre el eje x.
 * @method dibujarCirculo
 * @param no tiene.
 * @return La imagen de un círculo con moviento.
 */
function dibujarCirculo() {
    var radioC = parseFloat(document.getElementById('radio').value);
    if (direccion == 0)
        posX++;
    else
        posX--;
    if (posX==250)
        direccion = 1;
    if (posX==25)
        direccion = 0;

    can.width = can.width; // limpia el canvas
    contexto.strokeStyle = "#000000";
    contexto.fillStyle = "blue";
    contexto.beginPath();
    contexto.arc(posX,100,radioC,0,Math.PI*2,true);
    contexto.closePath();
    contexto.stroke();
    contexto.fill();
}


/*
 * Dibuja un cuadrado en base a un lado ingresado por el usuario y se mueve en el eje y.
 * @method dibujarCuadrado
 * @param no tiene.
 * @return La imagen de un cuadrado con moviento.
 */
function dibujarCuadrado(){
    var ladoCuadrado = parseFloat(document.getElementById('lado').value);
    x = can1.width/2;
    if (direccion == 0)
        posY++;
    else
        posY--;
    if (posY==100)
        direccion = 1;
    if (posY==20)
        direccion = 0;

    can1.width = can1.width; // limpia el canvas
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.fillRect(x, posY, ladoCuadrado, ladoCuadrado);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}



