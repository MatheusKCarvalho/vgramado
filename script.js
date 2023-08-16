const diasEl = document.getElementById("dias");
const HorasEl = document.getElementById("Horas");
const MinutosEl = document.getElementById("Minutos");
const SegundosE1 = document.getElementById("Segundos");

const Viagem ="5 Sept 2023 00:00:01"; //As horas estão ali apenas para mais precisão da contagem
//const Viagem ="25 April 2023 00:00:01";
//const Viagem =["2023-09-05", "00:00:01"]; Assim também funciona

function formatTime(time){ //A função estava do lado de fora da função 'Contagem' no video
                           //ele usa ela dentro da função, mas isso não é uma boa pratica
    return time < 10 ? `0${time}` : time; //Aqui você errou o tipo de aspas
}                                         //Existem 3 tipoas de aspas
                                          // "" conjunto de aspas duplas
                                          // '' conjunto de aspas simple
                                          // `` conjunto de aspas usada no javascript 
                                          //    para concaternar strings com código
function contagem(){
//    const audio = new Audio('clock_audio.mp3');
    const ViagemDate = new Date(Viagem);
    const currentDate = new Date();

    const totalSeconds = (ViagemDate - currentDate) / 1000;
    const dias = Math.floor(totalSeconds / 3600 / 24);
    const Horas = Math.floor(totalSeconds / 3600) % 24;
    const Minutos = Math.floor(totalSeconds / 60) % 60;
    const Segundos = Math.floor(totalSeconds) % 60;

    diasEl.innerHTML = dias;
    HorasEl.innerHTML = formatTime(Horas);
    MinutosEl.innerHTML = formatTime(Minutos);
    SegundosE1.innerHTML = formatTime(Segundos); //Aqui estava errado o nome da variavel SegundosE1
    
}

setInterval(contagem, 1000);