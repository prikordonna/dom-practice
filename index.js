window.onload = function() {
    for (let i = 1; i <= 20; i ++) {
        const twentyDivs = document.createElement('div');
        twentyDivs.style.height = "50px";
        twentyDivs.style.width = "50px";
        twentyDivs.style.backgroundColor = randomColor();
        document.body.appendChild(twentyDivs);
        const number = [i];
        twentyDivs.className = "div" + number;
        twentyDivs.innerText = number;
    }
}

function randomColor () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + " " + green + " " + blue + ")";
};