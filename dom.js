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
    slideTimer = setInterval(slideNext, 5000);
}

let counter = 1;
let slideTimer = setInterval(slideNext, 5000);

function slideNext() {
    document.getElementById('radio' + counter).checked = true;
    changeBackground(counter);
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}

slideTimer = setInterval(slideNext, 5000);



// ================================== Typing effect start ==============================

// ================================== Typing effect start ==============================

let title = document.getElementById('typing');
let text = "Welcome To GeneCTech";
let index = 0;
let coloredText = "";

const typing = () => {
    if (index <= text.length) {
        if (index === 15) {
            coloredText += '<span class="primary-color">' + text.charAt(index) + '</span>';
        } else {
            coloredText += text.charAt(index);
        }

        title.innerHTML = coloredText;
        index++;

        if (index <= text.length) {
            setTimeout(typing, 100);
        } else {
            // Reset index and coloredText to restart the typing effect
            index = 0;
            coloredText = "";
            setTimeout(typing, 3000); // Wait for 1 second before restarting the typing effect
        }
    }
}

typing();

