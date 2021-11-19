const aboutMeEl = document.querySelector("#aboutMe");
const workEl = document.querySelector("#work");
const resumeEl = document.querySelector("#resume");
const linksEl = document.querySelector("#links");
const contactMeEl = document.querySelector("#contactMe");

const aboutMeButton = document.querySelector("#aboutMeButton");
const workButton = document.querySelector("#workButton");
const resumeButton = document.querySelector("#resumeButton");
const linksButton = document.querySelector("#linksButton");
const contactMeButton = document.querySelector("#contactMeButton")

aboutMeButton.addEventListener("click", function() {
    aboutMeEl.style.display = "flex";
    workEl.style.display = "none";
    linksEl.style.display = "none";
    resumeEl.style.display = "none";
    contactMeEl.style.display = "none";
})

workButton.addEventListener("click", function() {
    aboutMeEl.style.display = "none";
    workEl.style.display = "block";
    linksEl.style.display = "none";
    resumeEl.style.display = "none";
    contactMeEl.style.display = "none";
})

linksButton.addEventListener("click", function() {
    aboutMeEl.style.display = "none";
    workEl.style.display = "none";
    linksEl.style.display = "flex";
    resumeEl.style.display = "none";
    contactMeEl.style.display = "none";
})

resumeButton.addEventListener("click", function() {
    aboutMeEl.style.display = "none";
    workEl.style.display = "none";
    linksEl.style.display = "none";
    resumeEl.style.display = "flex";
    contactMeEl.style.display = "none";
})

contactMeButton.addEventListener("click", function() {
    aboutMeEl.style.display = "none";
    workEl.style.display = "none";
    linksEl.style.display = "none";
    resumeEl.style.display = "none";
    contactMeEl.style.display = "flex";
})