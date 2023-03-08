import {Avaliador} from "../model/Avaliador.js";
import avaliaResultado from "./avaliaResultado.js";
import exibeJogada from "./exibeJogada.js";

export default function geraResultado(jogador, adversario) {
    const avaliador = new Avaliador(jogador, adversario);
    const resultado = avaliador.avalia();
    exibeJogada(jogador, adversario);
    avaliaResultado(resultado);
    console.log(resultado);
}