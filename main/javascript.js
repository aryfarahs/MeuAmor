// CARROSSEL
window.addEventListener('load', () => {
    handleSlider()
})

function handleSlider() {
    const inputs = document.querySelectorAll("input[name='slider']") 
    const dots = document.querySelectorAll(".dots label")

    const arrowLeft = document.querySelector('.slider .slider-arrow-prev')
    const arrowRight = document.querySelector('.slider .slider-arrow-next')

    arrowLeft.addEventListener("click", () => {
        const currentActive = document.querySelector('.dots label.active');

        if(currentActive.nextElementSibling) {
            currentActive.nextElementSibling.click();
        } else {
            dots[dots.length - 1].click()
        }
    })

    arrowRight.addEventListener("click", () => {
        const currentActive = document.querySelector('.dots label.active');

        if(currentActive.previousElementSibling) {
            currentActive.previousElementSibling.click();
        } else {
            dots[0].click()
        }
    })

    inputs.forEach((input, index) => {
        input.addEventListener('change', () => {
            dots.forEach((dot, i) => {
                if(i == index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            })
        })
    })

}

// --------------------------------------------------------------------------
// Soft Scroll
// const menuLinks = document.querySelectorAll('a[href^="#"]');

// function getDistanceFromTheTop(element) {
//     const id = element.getAttribute("href");
//     return document.querySelector(id).offSetTop;
// }

// function nativeScroll(distanceFromTheTop) {
//     window.scroll({
//         top:distanceFromTheTop,
//         behavior: "smooth"
//     })
// }

// function scrollToSection(event) {
//     event.preventDefault();
//     const distanceFromTheTop = getDistanceFromTheTop(event.targer) - 90;
//     nativeScroll(distanceFromTheTop);
// }

// menuLinks.forEach((link) => {
//     link.addEventListener("click", scrollToSection);
// });


//-------------------------------------------------------------------
// BOTAO FUJAO
function fuja() {
    var botaoNao = document.getElementById("nao");
    var botoes = document.getElementById("amoMais");

    var rect = botoes.getBoundingClientRect();
    var larguraJanela = rect.width;
    var alturaJanela = rect.height;

    var maxX = larguraJanela - botaoNao.offsetWidth;
    var maxY = alturaJanela - botaoNao.offsetHeight;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px";
}

//-------------------------------------------------------------------
// INVISIVEL
function trocaDisplay() {
    const display = document.getElementById("bomQueSabe");
    const footer = document.getElementById("footer")

    if (window.getComputedStyle(display).display === "none") {
        display.style.display = "flex"; 
        footer.style.marginTop = "620px"
    } else {
        display.style.display = "none";
        footer.style.marginTop = "20px"
    }
}