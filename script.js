let tempo = Number(prompt("Digite quantos segundos você quer."));
const temporizador = document.querySelector("#temporizador");
const body = document.querySelector("body");
let idIntervalo;

temporizador.innerHTML = tempo;

function trocarFundo (){
    let cor1 = aleatorio(0,255);
    let cor2 = aleatorio(0,255);
    let cor3 = aleatorio(0,255);
    body.style.backgroundColor = `rgb(${cor1},${cor2},${cor3})`;
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min; 
}

function diminuir(){
    tempo--;
    temporizador.innerHTML = tempo;

    if(tempo === 0){
        clearInterval(idIntervalo);
        setInterval(trocarFundo, 333);
    }
}

idIntervalo = setInterval(diminuir, 1000);