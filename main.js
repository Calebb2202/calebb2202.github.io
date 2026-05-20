// Adjust line height of project descriptions based on long description is
const projectDescriptions = document.getElementsByClassName("project-description")
for (let i = 0; i < projectDescriptions.length; i++){
    let textLength = projectDescriptions[i].querySelector('p').textContent.length;
    projectDescriptions[i].querySelector('p').style.lineHeight = 500 / textLength;
}

function onResize() {
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
        if (window.innerWidth >= 900) {
            projectDivider[i].style.height = `${projects.offsetHeight + 0}px`
        }
        

        projectDividerHorizontal[i].style.width = 0
        if (window.innerWidth <= 900) {
            projectDividerHorizontal[i].style.width = `${projects.offsetWidth*0.8}px`
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