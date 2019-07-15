module.exports.viewMiojo = function (application, req, res) {
    res.render('preparaMiojo', {errors: {}, miojo:{}})
}