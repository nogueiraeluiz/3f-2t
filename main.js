const botoes = document.querySelectorAll(".botao"); 
const textos = document.querySelectorAll(“.aba-conteudo”);

for (let i = 0; i < botoes.length; i++) {
  textos[j].classList.remove(“ativo”);
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      textos[j].classList.remove(“ativo”);
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add(“ativo”);
  };
}webview
const contadores = document.querySelectorAll(“.contador”);
const tempoObjetivo1 = new Date(“2023-10-05T00:00:00”);
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;

return dias + “ dias “ + horas + “ horas “ + minutos + “
minutos “ + segundos + “ segundos”;
}

function atualizaCronometro(){
document.getElementById(“dias0”).textContent =
calculaTempo(tempos[0])[0];
document.getElementById(“horas0”).textContent =
calculaTempo(tempos[0])[1];
document.getElementById(“min0”).textContent =
calculaTempo(tempos[0])[2];
document.getElementById(“seg0”).textContent =
calculaTempo(tempos[0])[3];
for (let i=0; i<contadores.length;i++){
// contadores[i].textContent = calculaTempo(tempos[i]);
}
}
}
function comecaCronometro(){
atualizaCronometro();
setInterval(atualizaCronometro,1000); }
comecaCronometro();

if (tempoFinal > 0){

return [dias,horas,minutos,segundos];

} else {

return [0,0,0,0];

}
document.getElementById(“dias”+i).textContent =
calculaTempo(tempos[0])[0];

document.getElementById(“horas”+i).textContent =

calculaTempo(tempos[0])[1];

document.getElementById(“min”+i).textContent =

calculaTempo(tempos[0])[2];

document.getElementById(“seg”+i).textContent =

calculaTempo(tempos[0])[3];