let button = document.getElementById("down_cv");
let detail = document.querySelector(".details");

function mouseEnter(event) {
    console.log("Click to download CV");
}
function down_cv() {
    alert("Downloading CV now...")
}

button.addEventListener("mouseenter", mouseEnter);
button.addEventListener("click", down_cv);

detail.style.color = '#17d1ac';

document.addEventListener("keyup", function(event) {
    console.log(event.key);
});