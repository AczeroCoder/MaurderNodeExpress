document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('changeColorBtn');
    var body = document.body;

    button.addEventListener('click', function () {
        // Generate a random color
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Change the background color of the body
        body.style.backgroundColor = randomColor;
    });
});