
//controla scroll quando clicar no link de menu
$('.nav-link').click(function(e){  
    e.preventDefault();  
    var id = $(this).attr('href'),
    top = $(id).offset().top,
    alt = $('.menu').innerHeight();   
    $('html, body').animate({
        scrollTop: top - alt
    }, 500);
});

// fecha menu quanod clicar no link
$('#menu a').click(function(event){  
    var $navbar = $(".navbar-collapse");          
    $navbar.removeClass("show");   
})
//fecha menu quando clicar fora dele
$(document).click(function (event) {  
     var $navbar = $(".navbar-collapse");          
     $navbar.removeClass("show");     
});

//ler mais 
function ler(ler, ponto, lerMais, inicio){
    var lermais = document.getElementById(ler);
    var pontos = document.getElementById(ponto);
    var conteudo = document.getElementById(lerMais);   
    var inicio = document.getElementById(inicio);   

    if(conteudo.style.display === ""){      
        pontos.style.display = "none";
        conteudo.style.display = "block";
        lermais.innerHTML = "ler menos";
        inicio.style.display = "none";
    }else{
        pontos.style.display = "inline";
        conteudo.style.display = "";
        lermais.innerHTML = "ler mais";
        inicio.style.display = "inline"
    }
    
}