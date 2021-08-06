const hamIcon = document.getElementById("ham-icon");
const myNavigation = document.getElementById("close-btn");

hamIcon.addEventListener("click", function() {
    document.getElementById("my-nav").style.display = "block";
});

myNavigation.addEventListener("click", function() {
    document.getElementById("my-nav").style.display = "none";
});
