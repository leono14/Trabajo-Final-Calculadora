const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var resultado = document.getElementById('resultado');
var primerNumero = '';
var segundoNumero = '';
var operacion = undefined;

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);        
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);        
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selectOperacion(op){
    if(primerNumero === '') return;
    if(segundoNumero !== ''){
        calcular()
    }
    operacion = op.toString();
    segundoNumero = primerNumero;
    primerNumero = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(segundoNumero);
    const actual = parseFloat(primerNumero);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    primerNumero = calculo;
    operacion = undefined;
    segundoNumero = '';
}

function agregarNumero(num){
    primerNumero = primerNumero.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    primerNumero = '';
    segundoNumero = '';
    operacion = undefined;
}

function actualizarDisplay(){
    resultado.value = primerNumero;
}

clear();