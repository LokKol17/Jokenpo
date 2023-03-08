import convertePraNome from "./converteParaNome.js";
export default function exibeJogada(jogador, adversario) {
    let jogadaJogador = convertePraNome(jogador);
    let jogadaCpu = convertePraNome(adversario);
    document.getElementById('player-play').innerHTML = jogadaJogador;
    document.getElementById('cpu-play').innerHTML = jogadaCpu;
}