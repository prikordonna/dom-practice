window.onload = function() {
    for (let i = 1; i <= 20; i ++) {
        const createDiv = document.createElement('div');
        createDiv.style.height = "50px";
        createDiv.style.width = "50px";
        createDiv.style.backgroundColor = randomColor();
        createDiv.innerText = i;
        document.body.append(createDiv);
    }
}

function randomColor () {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + " " + green + " " + blue + ")";
};