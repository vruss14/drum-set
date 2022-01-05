$("body").keypress(function(event){
    let keyPressed = event.key;

    $(".drum-pad").each(function() {
        if(keyPressed === this.id) {
            $(this).css('background-color', 'green')
            setTimeout(revertColor, 250, this)
            $('#display').text(this.id.toUpperCase())
        }
    });

});

function revertColor(element) {
    $(element).css('background-color', 'transparent');
}