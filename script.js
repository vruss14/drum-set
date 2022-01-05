// Trigger audio & color change only for correct key press events

$("body").keypress(function(event){
    let keyPressed = event.key.toLowerCase();

    $(".drum-pad").each(function() {
        if(keyPressed === this.innerText.toLowerCase()) {
            $(this).css('background-color', 'transparent')
            $(this).css('color', 'black')
            setTimeout(revertColor, 250, this)
            $('#display').text(this.innerText)
            $(`#${this.innerText}`)[0].play();
        }
    });
});

// Revert color after 0.25 seconds

function revertColor(element) {
    $(element).css('background-color', 'black');
    $(element).css('color', 'white');
}

// Click events trigger the same kind of response as keypress events

$('.drum-pad').click(function(event) {
    console.log(event.target.innerText);
    $(`#${event.target.id}`).css('background-color', 'transparent')
    $(`#${event.target.id}`).css('color', 'black')

    setTimeout(revertColor, 250, `#${event.target.id}`)
    $('#display').text(event.target.innerText)
    $(`#${event.target.innerText}`)[0].play();
  });