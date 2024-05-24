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