
    let produtoSlider = document.getElementById('produtoSlider').getElementsByTagName('img');
    let produtoSliderGrande = document.getElementById('produtoSliderGrande');
    
    for (let i = 0; i < produtoSlider.length; i++){
        produtoSlider[i].addEventListener('click', full_image);
    }

    function full_image() {
        let imgSrc = this.getAttribute('src');        
        produtoSliderGrande.innerHTML = "<img src="+imgSrc+">";
    }
    
$(function(){
       $('.colors').click(function(){
           $('.colors').removeClass('ativo')
           $(this).addClass('ativo')
       })
   })

$(function(){
    $('.tamanho').click(function(){
        $('.tamanho').removeClass('tamanhoativo')
        $(this).addClass('tamanhoativo')
    })
})


    $('.deskcenter').click(function(){
        $('header nav.mobile ul').slideToggle();
    })


let alturaTela = $(document).height()
let larguraTela = $(document).width()

$('#adicionarSacola').click(function(){
    $('#mascaraModal').css({'width':larguraTela,'height':alturaTela})
    $('#mascaraModal').fadeIn(1000)
    $('#mascaraModal').fadeTo("slow",0.8)
    $('.modal1-sucesso').fadeIn(1000)
})

$('#modalFechar').click(function(){
    $('#mascaraModal').hide()
    $('.modal1-sucesso').hide()
})

$('.modal1-sucesso-continue').click(function(){
    $('#mascaraModal').hide()
    $('.modal1-sucesso').hide()
})


$('#sacolaSucesso').click(function(){
    $('.sacolaSucesso').fadeIn(500);
})
$('.sacolaSucesso-fechar').click(function(){
    $('.sacolaSucesso').hide();
})