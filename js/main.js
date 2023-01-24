function consultaCep(){
    var cep = document.getElementById("cep").value;

    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    $.ajax({
        url: url, 
        type: "get",
        success: function(response){
            console.log(response);
        
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#title-Cep").html("Cep " + response.cep);

            // fazer aparecer o elemento div
            $(".cep").show();
        
        /*
             document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
        */
        }
    })
}

// o elemento div não está sumindo, não sei qual é o erro

$(function(){
    $(".cep").hide();
});