function changeBackground(btnIndex) {
    const manualButtons = document.querySelectorAll('.manual-btn');
    manualButtons.forEach((button, index) => {
        if (index + 1 === btnIndex) {
            button.style.background = 'white';
        } else {
            button.style.background = 'transparent';
        }
    });

    counter = btnIndex;
    clearInterval(slideTimer);
    slideTimer = setInterval(slideNext, 3000);
}

let counter = 1;
let slideTimer = setInterval(slideNext, 3000);

function slideNext() {
    document.getElementById('radio' + counter).checked = true;
    changeBackground(counter);
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}

slideTimer = setInterval(slideNext, 3000);