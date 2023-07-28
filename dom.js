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
    slideTimer = setInterval(slideNext, 50000);
}

let counter = 1;
let slideTimer = setInterval(slideNext, 50000);

function slideNext() {
    document.getElementById('radio' + counter).checked = true;
    changeBackground(counter);
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}

slideTimer = setInterval(slideNext, 50000);



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

// typing();

// document.querySelector(".right").innerText = new Date().getFullYear()

// ========== Smaller Nav =============

const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const scrollThreshold = 200;
let isScrolled = false;

function updateNavHeight() {
    if (window.scrollY > scrollThreshold && !isScrolled) {
        navbar.classList.add("h-12");
        logo.classList.add("lg:h-20");
        isScrolled = true;
    } else if (window.scrollY <= scrollThreshold && isScrolled) {
        navbar.classList.remove("h-12");
        logo.classList.remove("lg:h-20");
        isScrolled = false;
    }
}

updateNavHeight();

// Listen for the scroll event
window.addEventListener("scroll", updateNavHeight);