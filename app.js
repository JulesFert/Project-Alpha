let app = {

    init: function() {
        console.log('Initialisation');

        // je met l'écouteur d'évènement sur les images projets
        const projects = document.querySelectorAll('#list-projects li')
        projects.forEach(projet => {
            projet.addEventListener("mouseenter", app.handleMouse)
            projet.addEventListener("mouseleave", app.handleMouse)
        });
    },

    handleMouse: function(e) {
        console.log('on passe la souris sur une image')
        const target = e.target.children[1];
        target.classList.toggle('default')

    }





}

document.addEventListener("DOMContentLoaded", (event) => {
    app.init()
  });