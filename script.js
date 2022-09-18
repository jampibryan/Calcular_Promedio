const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const promedioFinal = document.getElementById('promedioFinal');

const calcular = document.getElementById('calcular')
calcular.addEventListener('click', calcularPromedio)

const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', limpiarCajas);

function calcularPromedio() {
    let Promedio = nota1.value * 0.3 + nota2.value * 0.3 + nota3.value * 0.4
    if (Promedio >= 13.5) {
        promedioFinal.style.color = "blue"
    } else {
        promedioFinal.style.color = "red"
    }
    promedioFinal.value = Promedio.toFixed(2);
}

document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        calcularPromedio()
    }
});

function limpiarCajas() {
    nota1.value = ""
    nota2.value = ""
    nota3.value = ""
    promedioFinal.value = ""
}