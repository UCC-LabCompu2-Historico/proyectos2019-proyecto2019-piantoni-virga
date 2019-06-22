

//Para todos, tendiramos que poner que al poner un numero negativo, nos de error,
// o nos salga una alerta de que no se puede tomar ese numero.





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





