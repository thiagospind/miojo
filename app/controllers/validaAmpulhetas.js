
module.exports.calculaMDC = (a,b) => {
    let d = a;
    let r1 = b;

    // variáveis auxiliares para efetuar trocas
    var rs, q;
    while (r1 !== 0){
        q = Math.trunc(d / r1); // pega apenas a parte inteira
        rs = d;
        d = r1;
        r1 = rs - q *r1;
    }
    return d;
};

module.exports.verificaTempo = (tempoPreparo, menor, maior) =>{

    let a, b, i = 0;
    a = Number(maior);
    b = Number(menor);
    let t = Number(tempoPreparo);
    let tempo = 0;

    const maxIteracoes = Number.MAX_SAFE_INTEGER


    while (i < maxIteracoes) {
        if (a < b) {
            tempo += a;
            if (a == t) {
                return tempo
                break
            }
            b -= a;
            a = maior;
        } else {
            tempo += b;
            if (b == t) {
                return tempo
                break
            }
            a -= b;
            b = menor
        }
        i++
    }
    if (i >= maxIteracoes){
        return false;
    }
};