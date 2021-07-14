let btn = document.getElementById('btn');
let colourValue = document.getElementById('colourValue');
btn.onclick = () => {
    let colour = randomColour();
    document.querySelector('body').style.backgroundColor = colour;
    colourValue.innerHTML = colour;
}

function randomColour() {
    function col() {return Math.floor(Math.random() * 256)};
    return `rgb(${col()} ${col()} ${col()})`;
}