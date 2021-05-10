$(document).ready(function(){
    // Smooth scroll
    $('a').on('click', function() {
        if(this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
    // Menu lateral
    $('#burger').on('click', function() {
        $('#burger').toggleClass('open');
        $('aside').toggleClass('open');
    })
    // Cambio de tamaño del dispositivo
    $(window).resize(function() {
        if($('#burger').hasClass('open')) {
            $('#burger').toggleClass('open');
            $('aside').toggleClass('open');
        }
    })
})
