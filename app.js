let app = {

    init: function() {
        console.log('Initialisation');
    },
}

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(function() {
        let img = document.getElementById('profile-picture')
        img.style.opacity = 1
    }, 500); 

    setTimeout(function() {
        let title = document.getElementById('first_title')
        title.style.opacity = 1
    }, 700);

    setTimeout(function() {
        let about = document.getElementById('about')
        let competences = document.getElementById('competences')
        let projects = document.getElementById('projects')
        let footer = document.getElementById('contact')
        let description = document.getElementById('description')
        let pictures = document.getElementById('pictures')
        let technos = document.getElementById('technos')
        let github = document.getElementById('github')
        if (about) {
            about.style.opacity = 1
        }
        if (competences) {
            competences.style.opacity = 1
        }
        if (projects) {
            projects.style.opacity = 1
        }
        if (footer) {
            footer.style.opacity = 1
        }
        if (description) {
            description.style.opacity = 1
        }
        if(pictures) {
            pictures.style.opacity = 1
        }
        if (technos) {
            technos.style.opacity = 1
        }
        if (github) {
            github.style.opacity = 1
        }
    }, 1200);
});