import calculaAdversario from "./functions/calculaAdversario.js";
import geraResultado from "./functions/geraResultado.js";

const pedra = document.getElementById('select-rock');
const papel = document.getElementById('select-paper');
const tesoura = document.getElementById('select-scissors');

let jogador = null;
let adversario = null;

pedra.addEventListener('click', () => {
    jogador = 0;
    adversario = calculaAdversario();
    geraResultado(jogador, adversario);
});

papel.addEventListener('click', () => {
    jogador = 1;
    adversario = calculaAdversario();
    geraResultado(jogador, adversario);
});

tesoura.addEventListener('click', () => {
    jogador = 2;
    adversario = calculaAdversario();
    geraResultado(jogador, adversario);
});


