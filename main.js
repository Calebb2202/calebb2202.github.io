// main-burger menu
const mainBurger = document.getElementById("main-burger")
mainBurger.addEventListener("click", burger);

function burger () {
    mainBurger.querySelectorAll(".line").forEach(function(child) {
        child.classList.toggle("open");
    });
    document.getElementById("hamburger-container").classList.toggle("open")
    document.getElementById("main-burger").classList.toggle("open")
}

// Adjust line height of project descriptions based on long description length

const projectDescriptions = document.getElementsByClassName("project-description")
function updateProjectDescriptionLineHeight() {
    // const base = window.innerWidth < 900 ? 500 : 500;
    // for (let i = 0; i < projectDescriptions.length; i++) {
    //     const p = projectDescriptions[i].querySelector('p');
    //     const textLength = p.textContent.length;
    //     p.style.lineHeight = base / textLength;
    // }
}

function onResize() {
    

    updateProjectDescriptionLineHeight();
    // make experience arrow height
    const arrowLine = document.getElementById("arrow-line")
    const experiencesContainer = document.getElementById("experiences-container")
    arrowLine.style.height = 0;
    arrowLine.style.height = `${experiencesContainer.offsetHeight*0.90}px`

    const projectDivider = document.getElementsByClassName("project-divider")
    const projects = document.getElementById("projects")
    const projectDividerHorizontal = document.getElementsByClassName("project-divider-horizontal")

    for (let i = 0; i < projectDivider.length; i++){
        projectDivider[i].style.height = 0;
        if (window.innerWidth > 900) {
            projectDivider[i].style.height = `${projects.offsetHeight}px`
        }
        

        projectDividerHorizontal[i].style.width = 0
        if (window.innerWidth <= 900 || window.innerWidth < window.innerHeight) {
            projectDividerHorizontal[i].style.width = `${projects.offsetWidth*0.85}px`
        }
    }
}
onResize()
window.addEventListener('resize', onResize)


// email form using https://dashboard.emailjs.com/admin
emailjs.init("vChH8hiyvnHP8eToz");

document.querySelector("form").addEventListener("submit", handleContactForm);

function handleContactForm(e) {
    e.preventDefault();
    emailjs.sendForm("service_mmhnd6b", "template_yt5omxl", e.target)
        .then(() => alert("Message sent!"))
        .catch((err) => alert("Failed: " + err.text));
}