const aboutMeEl = document.querySelector("#aboutMe");
const workEl = document.querySelector("#work");

const aboutMeButton = document.querySelector("#aboutMeButton");
const workButton = document.querySelector("#workButton");

aboutMeButton.addEventListener("click", function() {
    aboutMeEl.style.display = "flex";
    workEl.style.display = "none";
})

workButton.addEventListener("click", function() {
    aboutMeEl.style.display = "none";
    workEl.style.display = "block";
})