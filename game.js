const vitorias = 80
const derrotas = 20 


function calcular(vitorias, derrotas) {
    return rank = vitorias - derrotas
}

const calcVitorias = calcular(vitorias, derrotas)

function calcRanking(){
    if(calcVitorias < 11) {
        return "ferro"
    } else if (calcVitorias > 10 && calcVitorias < 21 ) {
        return "bronze"
    } else if (calcVitorias > 20 && calcVitorias < 51) {
        return "prata"
    } else if (calcVitorias > 50 && calcVitorias < 81) {
        return "ouro"
    } else if (calcVitorias > 80 && calcVitorias < 91) {
        return "diamante"
    } else if (calcVitorias > 90 && calcVitorias < 101) {
        return "lendário"
    } else {
        return "imortal"
    }
}

const elo = calcRanking()

console.log("O Herói tem de saldo de " +calcVitorias+ " está no nível de "+ elo)

