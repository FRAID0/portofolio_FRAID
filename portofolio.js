document.addEventListener("DOMContentLoaded", function () {
    let vorstellung = document.getElementById("typing");
    let phrases = [
        "ich bin FRAID FOMEKONG.",
        "Ich begann mit der Webentwicklung.",
        "Dann wechselte ich zum Fullstack-Development.",
        "Anschließend vertiefte ich mich in die GUI-Entwicklung.",
        "Schließlich entdeckte ich das IoT.",
        "Heute habe ich eine solide Grundlage in vielen Bereichen der Softwareentwicklung.."
        
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100; 
    const eraseSpeed = 50; 
    const delayBetweenPhrases = 1500; 
    let colors = ["green", "blue", "red", "purple","pink","black"];

    function typeWriter() {
        let currentPhrase = phrases[phraseIndex];
        
        if (!isDeleting) {
            vorstellung.innerText = currentPhrase.substring(0, charIndex);
            vorstellung.classList.add("texteAnime")
            vorstellung.style.color = colors[phraseIndex];
            charIndex++;
            if (charIndex > currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeWriter, delayBetweenPhrases); 
                return;
            }
        } else {
            vorstellung.innerText = currentPhrase.substring(0, charIndex);
            charIndex--;
            if (charIndex < 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length; 
            }
        }


        setTimeout(typeWriter, isDeleting ? eraseSpeed : speed);
    }

    typeWriter(); 
});




function flipCard(element) {
    element.classList.add("flipped");

    setTimeout(() => {
        element.classList.remove("flipped");
    }, 3000); 
}


document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");

    let clones = track.innerHTML;
    track.innerHTML += clones; 
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 300);
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project");

    function revealProjects() {
        projects.forEach((project) => {
            const position = project.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (position < screenHeight - 100) {
                project.style.opacity = "1";
                project.style.transform = "scale(1)";
            }
        });
    }

    window.addEventListener("scroll", revealProjects);
    revealProjects();
});


function toggleDetails(button) {
    let details = button.parentElement.parentElement.nextElementSibling;

    if (!details.classList.contains("show")) {
        details.style.maxHeight = details.scrollHeight + "px"; 
        details.style.opacity = "1";
        details.classList.add("show");
        button.textContent = "weniger anzeigen";
    } else {
        details.style.maxHeight = "0"; 
        details.style.opacity = "0";
        details.classList.remove("show");
        button.textContent = "Mehr anzeigen";
    }
}

function closeDetails(button) {
    let details = button.parentElement;
    let mainButton = details.previousElementSibling.querySelector(".details-btn");

    details.style.maxHeight = "0";
    details.style.opacity = "0";
    details.classList.remove("show");
    mainButton.textContent = "Afficher plus";
}




document.addEventListener("DOMContentLoaded", function () {

    var swiper = new Swiper(".mySwiper", {
        loop: true, 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});







document.addEventListener("DOMContentLoaded", function () {
    const sendCommentBtn = document.getElementById("send-comment");
    const sendPrivateMsgBtn = document.getElementById("send-private-message");
    const commentsList = document.getElementById("comments-list");
    const privateMessageForm = document.getElementById("private-message-form");
    const contactChoices = document.getElementsByName("contact-choice");

    // Initialise EmailJS
    emailjs.init("WjR0gy-0XG0CaBQgL"); 

    contactChoices.forEach(choice => {
        choice.addEventListener("change", function () {
            if (this.value === "ja") {
                privateMessageForm.style.display = "block";
            } else {
                privateMessageForm.style.display = "none";
            }
        });
    });

    sendCommentBtn.addEventListener("click", function () {
        const email = document.getElementById("email").value;
        const project = document.getElementById("project").value;
        const publicComment = document.getElementById("public-comment").value;

        if (email && project && publicComment) {
            const comment = { email, project, message: publicComment };
            saveComment(comment);
            displayComment(comment);
        } else {
            alert("Veuillez remplir tous les champs.");
        }
    });

    function saveComment(comment) {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(comment);
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    function displayComment(comment) {
        const div = document.createElement("div");
        div.classList.add("comment");
        div.innerHTML = `<strong>${comment.email}</strong> (Projet : ${comment.project})<br>${comment.message}`;
        commentsList.prepend(div);
    }

    // Fonction pour envoyer un message privé par EmailJS
    sendPrivateMsgBtn.addEventListener("click", function () {
        const privateMessage = document.getElementById("private-message").value;

        if (privateMessage.trim() === "") {
            alert("Veuillez rédiger un message avant d'envoyer.");
            return;
        }

        emailjs.send("service_m282g53", "template_wh3zu2k", {
            message: privateMessage
        }).then(function () {
            alert("Votre message a bien été envoyé !");
        }).catch(function () {
            alert("Erreur lors de l'envoi du message.");
        });
    });

    // Charger les commentaires au chargement de la page
    loadComments();

    function loadComments() {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.forEach(displayComment);
    }
});








// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("comment-form");
//     const commentsList = document.getElementById("comments-list");

//     // Initialise EmailJS
//     emailjs.init("WjR0gy-0XG0CaBQgL"); // Remplace par ton User ID EmailJS

//     // Charger les commentaires stockés localement
//     loadComments();

//     // Soumission du formulaire
//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
        
//         const email = document.getElementById("email").value;
//         const project = document.getElementById("project").value;
//         const message = document.getElementById("message").value;

//         if (email && project && message) {
//             const comment = { email, project, message };
//             saveComment(comment);
//             displayComment(comment);
//             sendEmail(comment);
//             form.reset();
//         }
//     });

//     function saveComment(comment) {
//         let comments = JSON.parse(localStorage.getItem("comments")) || [];
//         comments.push(comment);
//         localStorage.setItem("comments", JSON.stringify(comments));
//     }

//     function loadComments() {
//         let comments = JSON.parse(localStorage.getItem("comments")) || [];
//         comments.forEach(displayComment);
//     }

//     function displayComment(comment) {
//         const div = document.createElement("div");
//         div.classList.add("comment");
//         div.innerHTML = `<strong>${comment.email}</strong> (projet : ${comment.project}) <br> ${comment.message}`;
//         commentsList.prepend(div); 
//     }

//     function sendEmail(comment) {
//         emailjs.send("service_m282g53", "template_wh3zu2k", {
//             email: comment.email,
//             project: comment.project,
//             message: comment.message
//         }).then(function(response) {
//             alert("Email envoyé avec succès !");
//         }, function(error) {
//             alert("Erreur lors de l'envoi de l'email.");
//         });
//     }
// });
