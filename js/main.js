const collapsibles = document.querySelectorAll(".collapsibles ");
collapsibles.forEach((item) =>
    item.addEventListener("click", function() {
        this.classList.toggle("collapsible--expanded");
    })
);

