document.addEventListener("DOMContentLoaded", function () {
    let vorstellung = document.getElementById("typing");
    const dictionaries = {
        de: {
            typing: [
                "ich bin FRAID FOMEKONG.",
                "Ich begann mit der Webentwicklung.",
                "Dann wechselte ich zum Fullstack-Development.",
                "Anschließend vertiefte ich mich in die GUI-Entwicklung.",
                "Schließlich entdeckte ich das IoT.",
                "Heute habe ich eine solide Grundlage in vielen Bereichen der Softwareentwicklung.."
            ],
            nav: { home: "Home", about: "about", projects: "projects", contact: "kontakt" },
            link: { gotoProject: "Go to the Projekt" },
            hero: {
                greeting: "👋 Hallo, ich bin",
                subtitle: "Student der Angewandten Informatik · Hochschule Worms",
                cta: "Meine Projekte ansehen",
                contact: "Kontakt aufnehmen"
            },
            home: {
                introTitle: "Introduction",
                introP1: "Hallo! Ich bin <strong>FRAID</strong>, Student der <strong>Angewandten Informatik</strong> an der <strong>Hochschule Worms</strong> und begeisterter Softwareentwickler. ",
                introP2: "Mit dieser Website möchte ich meine Erfahrungen und Projekte teilen  von meinen ersten Schritten in der Programmierung bis hin zu anspruchsvollen Softwarelösungen.",
                skillsTitle: "💻 Mein Weg in der Entwicklung:",
                skillsIntro: "Ich begann mit C und C++, bevor ich meine Kenntnisse auf moderne Technologien ausweitete. Heute arbeite ich an vielseitigen Projekten in verschiedenen Bereichen:",
                skillWeb: "🖥 <strong>Webentwicklung</strong> → HTML, CSS, JavaScript, Angular, Node.js",
                skillMobile: "📱 <strong>Mobile Apps</strong> → Flutter, Firebase",
                skillGui: "💾 <strong>Grafische Benutzeroberflächen</strong> → PyQt6, TinyDB, Qt Designer",
                skillBackend: "🔗 <strong>Back-End & Datenbanken</strong> → PostgreSQL, Express.js, Docker",
                skillIoT: "🌍 <strong>IoT & Automatisierung</strong> → Raspberry Pi, MQTT, Tkinter",
                whyTitle: "🔍 Warum diese Website?",
                whyP1: "Dieses Portfolio dokumentiert meine <strong>Entwicklung</strong>, meine <strong>Lernprozesse</strong> und meine <strong>praktischen Projekte</strong>. Ob du einfach neugierig bist oder einen Entwickler für dein Projekt suchst – hier bist du genau richtig!",
                moreAbout: "📌 Mehr über mich erfahren"
            },
            footer: {
                about: "À propos",
                aboutText: "FRAID — Étudiant en informatique appliquée, passionné par le développement logiciel.",
                nav: "Navigation",
                linkAbout: "À propos",
                linkProjects: "Projets",
                linkContact: "Contact",
                contact: "Contact",
                email: "Email",
                rights: "Tous droits réservés."
            }
        },
        fr: {
            typing: [
                "je suis FRAID FOMEKONG.",
                "J'ai commencé par le développement web.",
                "Puis je suis passé au full‑stack.",
                "Ensuite, je me suis plongé dans les interfaces GUI.",
                "Enfin, j'ai découvert l'IoT.",
                "Aujourd'hui, j'ai une base solide dans de nombreux domaines du logiciel."
            ],
            nav: { home: "Accueil", about: "À propos", projects: "Projets", contact: "Contact" },
            link: { gotoProject: "Voir le projet" },
            home: {
                introTitle: "Introduction",
                introP1: "Bonjour ! Je suis <strong>FRAID</strong>, étudiant en <strong>informatique appliquée</strong> à la <strong>Hochschule Worms</strong> et passionné de développement logiciel.",
                introP2: "Avec ce site, je partage mes expériences et projets – de mes débuts en programmation jusqu’à des solutions logicielles avancées.",
                skillsTitle: "💻 Mon parcours en développement :",
                skillsIntro: "J’ai commencé avec le C et le C++, puis j’ai étendu mes compétences vers des technologies modernes. Aujourd’hui je travaille sur des projets variés :",
                skillWeb: "🖥 <strong>Développement Web</strong> → HTML, CSS, JavaScript, Angular, Node.js",
                skillMobile: "📱 <strong>Applications Mobile</strong> → Flutter, Firebase",
                skillGui: "💾 <strong>Interfaces Graphiques</strong> → PyQt6, TinyDB, Qt Designer",
                skillBackend: "🔗 <strong>Back‑End & Bases</strong> → PostgreSQL, Express.js, Docker",
                skillIoT: "🌍 <strong>IoT & Automatisation</strong> → Raspberry Pi, MQTT, Tkinter",
                whyTitle: "🔍 Pourquoi ce site ?",
                whyP1: "Ce portfolio documente mon <strong>évolution</strong>, mes <strong>apprentissages</strong> et mes <strong>projets pratiques</strong>. Que vous soyez curieux ou en recherche d’un développeur – vous êtes au bon endroit !",
                moreAbout: "📌 En savoir plus sur moi"
            },
            footer: {
                about: "À propos",
                aboutText: "FRAID — Étudiant en informatique appliquée, passionné par le développement logiciel.",
                nav: "Navigation",
                linkAbout: "À propos",
                linkProjects: "Projets",
                linkContact: "Contact",
                contact: "Contact",
                email: "Email",
                rights: "Tous droits réservés."
            }
        },
        en: {
            typing: [
                "I am FRAID FOMEKONG.",
                "I started with web development.",
                "Then I moved to full‑stack.",
                "After that I dived into GUI development.",
                "Finally I discovered IoT.",
                "Today I have a solid foundation across many software areas."
            ],
            nav: { home: "Home", about: "About", projects: "Projects", contact: "Contact" },
            link: { gotoProject: "Go to project" },
            home: {
                introTitle: "Introduction",
                introP1: "Hello! I am <strong>FRAID</strong>, an <strong>Applied Computer Science</strong> student at <strong>Hochschule Worms</strong> and a passionate software developer.",
                introP2: "With this website I share my experiences and projects – from my programming beginnings to advanced solutions.",
                skillsTitle: "💻 My path in development:",
                skillsIntro: "I started with C and C++, then expanded to modern technologies. Today I work on diverse projects across several areas:",
                skillWeb: "🖥 <strong>Web Development</strong> → HTML, CSS, JavaScript, Angular, Node.js",
                skillMobile: "📱 <strong>Mobile Apps</strong> → Flutter, Firebase",
                skillGui: "💾 <strong>Graphical Interfaces</strong> → PyQt6, TinyDB, Qt Designer",
                skillBackend: "🔗 <strong>Back‑End & Databases</strong> → PostgreSQL, Express.js, Docker",
                skillIoT: "🌍 <strong>IoT & Automation</strong> → Raspberry Pi, MQTT, Tkinter",
                whyTitle: "🔍 Why this website?",
                whyP1: "This portfolio documents my <strong>development</strong>, <strong>learning</strong> and <strong>hands‑on projects</strong>. Whether you’re curious or looking for a developer – you’re in the right place!",
                moreAbout: "📌 Learn more about me"
            },
            footer: {
                about: "About",
                aboutText: "FRAID — Applied Computer Science student, passionate about software development.",
                nav: "Navigation",
                linkAbout: "About",
                linkProjects: "Projects",
                linkContact: "Contact",
                contact: "Contact",
                email: "Email",
                rights: "All rights reserved."
            }
        }
    };

    function getLang() { return localStorage.getItem('lang') || 'de'; }
    function setLang(lang) { localStorage.setItem('lang', lang); }

    function applyTranslations(lang) {
        const dict = dictionaries[lang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const path = el.getAttribute('data-i18n');
            const keys = path.split('.');
            let node = dict;
            for (const k of keys) { node = node && node[k]; }
            if (typeof node === 'string') {
                // Permet du HTML dans certaines chaînes (strong)
                el.innerHTML = node;
            }
        });
        phrases = dict.typing;
    }

    let phrases = dictionaries[getLang()].typing;

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

    // Lang switcher
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
        langSelect.value = getLang();
        applyTranslations(getLang());
        langSelect.addEventListener('change', () => {
            const lang = langSelect.value;
            setLang(lang);
            applyTranslations(lang);
        });
    } else {
        applyTranslations(getLang());
    }
});

// Navigation burger et année dans le footer
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-navigation');
    const navigation = document.querySelector('.navigation');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', (!expanded).toString());
            // Ajouter/retirer une classe pour le CSS si :has() n'est pas supporté
            if (expanded) {
                if (navigation) navigation.classList.remove('nav-open');
            } else {
                if (navigation) navigation.classList.add('nav-open');
            }
        });
    }

    const yearEl = document.getElementById('year');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
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
