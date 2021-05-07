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
})
