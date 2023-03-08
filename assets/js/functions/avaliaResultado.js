export default function avaliaResultado(resultado) {
    if (resultado === "Empate") {
        document.getElementById('result').innerHTML = "Empate";
    } else if (resultado === true) {
        document.getElementById('result').innerHTML = "Você ganhou!";
    } else {
        document.getElementById('result').innerHTML = "Você perdeu!";
    }
}