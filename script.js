// Create a button with jQ and when clicked, alert nice message
$('body').append('<button id="myButton" > Click Me </button>')
$('#myButton').click(function () {
    alert('Something Nice!')
})

// Grab button from html and when clicked, display an alert with the message typed in text box.
$('#btn').click(function () {
    let msg = $('#inputBox').val();
    alert(msg);
})

$('#firstDiv').css({
    'height': '5em',
    'width': '5em',
    'margin': '1em'
})

// When hovered over div, change color to red
$('#firstDiv').mouseover(function () {
    ('#firstDiv').css('backgroundColor', 'red')
})