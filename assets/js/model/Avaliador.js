const pedra = 0;
const papel = 1;
const tesoura = 2;

export class Avaliador {
    jogador;
    adversario;
    constructor(jogador, adversario) {
        this.jogador = jogador;
        this.adversario = adversario;
    }

    avalia() {
        if (this.jogador === this.adversario) {
            return "Empate";
        } else if (this.jogador === pedra && this.adversario === tesoura) {
          return true;
        } else if (this.jogador === papel && this.adversario === pedra) {
          return true;
        } else return this.jogador === tesoura && this.adversario === papel;
    }
}