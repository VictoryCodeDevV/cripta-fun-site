const animItems = document.querySelectorAll("._animate");
$(window).on("load", function() {
    animItems.forEach((item, index) => {
        setTimeout(() => {
            $(item).addClass("_animate-Active");
        }, index * 500); // Задержка увеличивается для каждого следующего элемента
    });
});

// scroll

const page = document.querySelector(".page")
const items = document.querySelectorAll("section")

page.addEventListener('wheel', (event) => {
    event.preventDefault()
    const delta = event.deltaY

    page.scrollBy({
        top: delta,
        behavior: 'smooth',
    })
})