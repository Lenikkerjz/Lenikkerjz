const botonNumeros = document.getElementsByName('data-number');
const botonOperaciones = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];

var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

botonNumeros.forEach(function(boton) {
    boton.addEventListener('click', function() {
        agregarNumero(boton.innerText);
    });
});

botonOperaciones.forEach(function(boton) {  // Eliminado el punto incorrecto
    boton.addEventListener('click', function() {
        selectOperacion(boton.innerText);
    });
});

botonIgual.addEventListener('click', function() {
    calcular();
    actualizardisplay();
});

botonDelete.addEventListener('click', function() {
    clear();
    actualizardisplay();
});

function selectOperacion(op) {
    if (opeActual === '') return;
    if (opeAnterior !== '') {
        calcular();
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if (isNaN(anterior) || isNaN(actual)) return;
    
    switch (operacion) {
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

    opeActual = calculo.toString(); // Guarda el resultado
    operacion = undefined;
    opeAnterior = '';
}

function agregarNumero(num) {
    opeActual = opeActual.toString() + num.toString();
    actualizardisplay();
}

function clear() {
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizardisplay() {
    result.value = opeActual;
}

clear();