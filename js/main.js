const animItems = document.querySelectorAll("._animate");
$(window).on("load", function() {
    animItems.forEach((item, index) => {
        setTimeout(() => {
            $(item).addClass("_animate-Active");
        }, index * 500); // Задержка увеличивается для каждого следующего элемента
    });
});