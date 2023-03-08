export default function convertePraNome(jogada) {
    if (jogada === 0) {
        return "Pedra";
    } else if (jogada === 1) {
        return "Papel";
    } else {
        return "Tesoura";
    }
}