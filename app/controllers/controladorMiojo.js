module.exports.viewMiojo = function (application, req, res) {
    res.render('preparaMiojo', {errors: {}, miojo:{}})
}

module.exports.preparaMiojo = function (application, req, res) {
    var miojo = req.body;

    const {ampulheta1, ampulheta2, tempoPreparo} = miojo;
    const x = Math.min(ampulheta1,ampulheta2);
    const y = Math.max(ampulheta1,ampulheta2);
    const z = tempoPreparo;

    if(x<z || y<z){
        var errors = new Array('As ampulhetas não podem ser menores que o tempo de preparo!');
        console.log(errors);
        console.log(miojo)
        return res.render('preparaMiojo',{miojo: miojo, errors: errors});
    }
}