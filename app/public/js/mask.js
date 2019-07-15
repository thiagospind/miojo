$(document).ready(function(){

    $('.telefone').mask('(00) 0000-0000');
    $('.celular').mask('(00) 00000-0000');
    $('.cpf').mask('000.000.000-00');
    $('.data').mask('00/00/0000');
    $('.cep').mask('00000-000');
    $('.cnpj').mask('00.000.000/0000-00');
    $('.cbo').mask('0000.00');
    $('.dinheiro').mask("#.##0,00", {reverse: true});

    $("#formulario").submit(function() {
        $('.telefone').unmask();
        $('.celular').unmask();
        $('.cpf').unmask();
        $('.cnpj').unmask();
        //$('.data').unmask();
        $('.cep').unmask();
        $('.cbo').unmask();
        var dinheiro = $('.dinheiro').val();
        var dinheiro2 = dinheiro.replace('.','');
        var dinheiro3 = dinheiro2.replace(',','.');
        $('.dinheiro').val(dinheiro3);
    });

    $('#estado_naturalidade').on('change',function (e) {
        console.log(e);

        var sigla = e.target.value;

        //ajax
        $.get('/ajax-cidades?sigla=' + sigla, function (data) {
            //success data
            //console.log(data);
            $('#naturalidade').empty();
            $.each(data,function(index, cidadesObj){
                $('#naturalidade').append('<option value="'+cidadesObj.localidade+'">'+cidadesObj.localidade+'</option>');
            });
        });
    });

    // $('#cep').on('change',function (e) {
    //     console.log(e);
    //
    //     var cep_aux = e.target.value;
    //     var cep = cep_aux.replace("-","");
    //
    //     //ajax
    //     $.get('/ajax-enderecos?cep=' + cep, function (data) {
    //         //success data
    //         console.log(data);
    //         $('#endereco').empty();
    //         $('#bairro').empty();
    //         $('#cidade').empty();
    //         //$('#estado').empty();
    //         $.each(data,function(index, enderecoObj){
    //             $('#endereco').val(enderecoObj.logradouro);
    //             $('#bairro').val(enderecoObj.bairro);
    //             $('#cidade').val(enderecoObj.localidade);
    //             $('#estado').val(enderecoObj.sigla);
    //             //append('<option value="'+cidadesObj.localidade+'">'+cidadesObj.localidade+'</option>');
    //         });
    //     });
    // });

});


