var index = require('./config/server')

var porta = process.env.PORT || 3000;
console.log(porta);
index.listen(porta, function(){
    console.log("Funcionando!");
});
