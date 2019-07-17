module.exports.viewMiojo = function (application, req, res) {
    res.render('preparaMiojo', {errors: {}, miojo:{}})
}

module.exports.preparaMiojo = function (application, req, res) {
    var miojo = req.body;

    const {ampulheta1, ampulheta2, tempoPreparo} = miojo;
    const a1 = Number(ampulheta1);
    const a2 = Number(ampulheta2);
    const t = Number(tempoPreparo);
    let msg = '';

    if((a1 < t || a2 < t) || (a1 <= 0 || a2 <= 0)){
        msg = 'As ampulhetas não podem ser menores que o tempo de preparo!';
        return res.render('resultadoMiojo',{miojo: miojo, msg:msg, tempo:''});
    }

    let mdc = application.controllers.validaAmpulhetas.calculaMDC(a1,a2);

    if ((t % mdc) !== 0){
        msg = 'O tempo total não pode ser calculado com os valores informados!';
        return res.render('resultadoMiojo',{miojo: miojo, msg:msg, tempo:''})
    }

    const tempoTot = application.controllers.validaAmpulhetas.verificaTempo(t, a1, a2);

    if(tempoTot != false){
        msg = 'Miojo pronto!'
        return res.render('resultadoMiojo',{miojo: miojo, msg:msg, tempo:tempoTot})
    } else {
        msg = 'Não há mais iterações disponívels!';
        return res.render('resultadoMiojo',{miojo: miojo, msg:msg, tempo:''})
    }
}