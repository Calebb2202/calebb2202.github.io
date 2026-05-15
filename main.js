// Adjust line height of project descriptions based on long description is
const projectDescriptions = document.getElementsByClassName("project-description")
for (let i = 0; i < projectDescriptions.length; i++){
    let textLength = projectDescriptions[i].querySelector('p').textContent.length;
    projectDescriptions[i].querySelector('p').style.lineHeight = 500 / textLength
}

// make experience arrow height
const arrowLine = document.getElementById("arrow-line")
const experiencesContainer = document.getElementById("experiences-container")
arrowLine.style.height = `${experiencesContainer.offsetHeight - 20}px`

