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
    $('#firstDiv').css('backgroundColor', 'red')
})

// When out of div, change back to default color
$('#firstDiv').mouseout(function () {
    $('#firstDiv').css('backgroundColor', 'white')
})

// Add paragraph and when clicked change to random colors
$('body').append('<p> This is a paragraph for jQuery lab. </p>')

$('p').click(function () {
    let $colorArray = ['red', 'blue', 'purple', 'green', 'yellow']
    let $randomColors = Math.floor(Math.random() * $colorArray.length)
    $('p').css('color', $colorArray[$randomColors])
})

$('#nameButton').click(function () {
    $('#nameDiv').append('<span> Trent Harper </span>')
})

// when friends button clicked, list item of strings in array should appear
$('#friendsButton').click(function () {
    let $friendsArray = ['Sydney', 'Tray', 'Manny', 'Sean', 'Amy', 'Austin', 'Jennifer', 'Gus', 'Evans', 'Matt']
    let $friendsmsg = $friendsArray[0]
    $('#friendsUl').append('<li> + $friendsmsg + </li>')
    $friendsmsg++
})
