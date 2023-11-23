let lists = document.getElementsByClassName("list");
let leftBox = document.querySelector(".left");
let RightBox = document.querySelector(".right");

for (list of lists) {
    list.addEventListener("dragstart", function(e) {
        let selected = e.target;

        RightBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        RightBox.addEventListener("drop", function() {
            RightBox.appendChild(selected);
            selected = null;
        });

        leftBox.addEventListener("dragover", function(e) {
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function() {
            leftBox.appendChild(selected);
            selected = null;
        });
    });
}