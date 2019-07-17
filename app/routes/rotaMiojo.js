module.exports = function (application) {
    const { check, validationResult} = require('express-validator');

    application.get('/miojo', function (req, res) {
       application.controllers.controladorMiojo.viewMiojo(application, req, res);
    });

    application.post('/miojo',[
        check('ampulheta1','O tempo da primeira ampulheta não pode ser nulo!').not().isEmpty(),
        check('ampulheta1','O tempo da primeira ampulheta deve ser maior que zero!').isInt({min:1}),
        check('ampulheta2','O tempo da segunda ampulheta não pode ser nulo!').not().isEmpty(),
        check('ampulheta2','O tempo da segunda ampulheta deve ser maior que zero!').isInt({min:1}),
        check('tempoPreparo','O tempo de preparo não pode ser nulo!').not().isEmpty(),
        check('tempoPreparo','O tempo de preparo deve ser maior que zero!').isInt({min:1}),
    ],function (req, res) {
        const errors = validationResult(req);
        var miojo = req.body;
        if(!errors.isEmpty()){
            return res.render('preparaMiojo', {errors: errors.array(), miojo: miojo})
        }
        application.controllers.controladorMiojo.preparaMiojo(application, req, res);
    });
}