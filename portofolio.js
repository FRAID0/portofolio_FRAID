document.addEventListener("DOMContentLoaded", function () {
    /* ─── i18n dictionaries ─── */
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
            contact: {
                pageTitle: "Kontaktieren Sie mich.",
                namePlaceholder: "Ihr Name",
                emailPlaceholder: "Ihre E-Mail",
                projectPlaceholder: "Projekt, das Sie interessiert hat",
                commentPlaceholder: "Hinterlassen Sie einen öffentlichen Kommentar.",
                sendComment: "Kommentar senden",
                contactQuestion: "Möchten Sie mich direkt kontaktieren?",
                yes: "ja",
                no: "nein",
                privateNamePlaceholder: "Ihr Name",
                privateEmailPlaceholder: "Ihre E-Mail",
                privateMessagePlaceholder: "Ihre Nachricht",
                sendPrivate: "Private Nachricht senden",
                commentsTitle: "Kommentare der Besucher.",
                sending: "Senden…",
                successComment: "Ihr Kommentar wurde erfolgreich gesendet!",
                errorComment: "Kommentar gespeichert, aber der E-Mail-Versand ist fehlgeschlagen.",
                successPrivate: "Ihre Nachricht wurde erfolgreich gesendet!",
                errorPrivate: "Fehler beim Senden der Nachricht.",
                fillAll: "Bitte füllen Sie die Pflichtfelder aus.",
                writeMessage: "Bitte verfassen Sie eine Nachricht, bevor Sie senden.",
                privateProject: "Private Nachricht"
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
            contact: {
                pageTitle: "Contactez-moi.",
                namePlaceholder: "Votre nom",
                emailPlaceholder: "Votre e-mail",
                projectPlaceholder: "Projet qui vous a intéressé",
                commentPlaceholder: "Laissez un commentaire public.",
                sendComment: "Envoyer le commentaire",
                contactQuestion: "Souhaitez-vous me contacter directement ?",
                yes: "oui",
                no: "non",
                privateNamePlaceholder: "Votre nom",
                privateEmailPlaceholder: "Votre e-mail",
                privateMessagePlaceholder: "Votre message",
                sendPrivate: "Envoyer le message privé",
                commentsTitle: "Commentaires des visiteurs.",
                sending: "Envoi…",
                successComment: "Votre commentaire a bien été envoyé !",
                errorComment: "Commentaire enregistré, mais l'envoi par e-mail a échoué.",
                successPrivate: "Votre message a bien été envoyé !",
                errorPrivate: "Erreur lors de l'envoi du message.",
                fillAll: "Veuillez remplir les champs obligatoires.",
                writeMessage: "Veuillez rédiger un message avant d'envoyer.",
                privateProject: "Message privé"
            },
            home: {
                introTitle: "Introduction",
                introP1: "Bonjour ! Je suis <strong>FRAID</strong>, étudiant en <strong>informatique appliquée</strong> à la <strong>Hochschule Worms</strong> et passionné de développement logiciel.",
                introP2: "Avec ce site, je partage mes expériences et projets – de mes débuts en programmation jusqu'à des solutions logicielles avancées.",
                skillsTitle: "💻 Mon parcours en développement :",
                skillsIntro: "J'ai commencé avec le C et le C++, puis j'ai étendu mes compétences vers des technologies modernes. Aujourd'hui je travaille sur des projets variés :",
                skillWeb: "🖥 <strong>Développement Web</strong> → HTML, CSS, JavaScript, Angular, Node.js",
                skillMobile: "📱 <strong>Applications Mobile</strong> → Flutter, Firebase",
                skillGui: "💾 <strong>Interfaces Graphiques</strong> → PyQt6, TinyDB, Qt Designer",
                skillBackend: "🔗 <strong>Back‑End & Bases</strong> → PostgreSQL, Express.js, Docker",
                skillIoT: "🌍 <strong>IoT & Automatisation</strong> → Raspberry Pi, MQTT, Tkinter",
                whyTitle: "🔍 Pourquoi ce site ?",
                whyP1: "Ce portfolio documente mon <strong>évolution</strong>, mes <strong>apprentissages</strong> et mes <strong>projets pratiques</strong>. Que vous soyez curieux ou en recherche d'un développeur – vous êtes au bon endroit !",
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
            contact: {
                pageTitle: "Contact me.",
                namePlaceholder: "Your name",
                emailPlaceholder: "Your e-mail",
                projectPlaceholder: "Project you were interested in",
                commentPlaceholder: "Leave a public comment.",
                sendComment: "Send comment",
                contactQuestion: "Would you like to contact me directly?",
                yes: "yes",
                no: "no",
                privateNamePlaceholder: "Your name",
                privateEmailPlaceholder: "Your e-mail",
                privateMessagePlaceholder: "Your message",
                sendPrivate: "Send private message",
                commentsTitle: "Visitor comments.",
                sending: "Sending…",
                successComment: "Your comment has been sent successfully!",
                errorComment: "Comment saved, but email sending failed.",
                successPrivate: "Your message has been sent successfully!",
                errorPrivate: "Error sending the message.",
                fillAll: "Please fill in the required fields.",
                writeMessage: "Please write a message before sending.",
                privateProject: "Private message"
            },
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
                whyP1: "This portfolio documents my <strong>development</strong>, <strong>learning</strong> and <strong>hands‑on projects</strong>. Whether you're curious or looking for a developer – you're in the right place!",
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

    /* ─── Language helpers ─── */
    function getLang() { return localStorage.getItem('lang') || 'de'; }
    function setLang(lang) { localStorage.setItem('lang', lang); }

    function applyTranslations(lang) {
        const dict = dictionaries[lang];
        if (!dict) return;
        function resolve(path) {
            const keys = path.split('.');
            let node = dict;
            for (const k of keys) { node = node && node[k]; }
            return typeof node === 'string' ? node : null;
        }
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const val = resolve(el.getAttribute('data-i18n'));
            if (val !== null) el.innerHTML = val;
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const val = resolve(el.getAttribute('data-i18n-placeholder'));
            if (val !== null) el.placeholder = val;
        });
        document.querySelectorAll('[data-i18n-value]').forEach(el => {
            const val = resolve(el.getAttribute('data-i18n-value'));
            if (val !== null) el.textContent = val;
        });
        phrases = dict.typing;
        phraseIndex = 0;
        charIndex = 0;
        isDeleting = false;
    }

    /* ─── Typing animation ─── */
    const vorstellung = document.getElementById("typing");
    let phrases = dictionaries[getLang()].typing;
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100;
    const eraseSpeed = 50;
    const delayBetweenPhrases = 1500;
    const colors = ["green", "blue", "red", "purple", "pink", "black"];

    function typeWriter() {
        if (!vorstellung) return;
        const currentPhrase = phrases[phraseIndex];
        if (!isDeleting) {
            vorstellung.innerText = currentPhrase.substring(0, charIndex);
            vorstellung.classList.add("texteAnime");
            vorstellung.style.color = colors[phraseIndex % colors.length];
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
                charIndex = 0;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
        }
        setTimeout(typeWriter, isDeleting ? eraseSpeed : speed);
    }

    if (vorstellung) { typeWriter(); }

    /* ─── Language switcher ─── */
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

    /* ─── Burger menu ─── */
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('primary-navigation');
    const navigation = document.querySelector('.navigation');
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', (!expanded).toString());
            if (expanded) {
                if (navigation) navigation.classList.remove('nav-open');
            } else {
                if (navigation) navigation.classList.add('nav-open');
            }
        });
    }

    /* ─── Footer year ─── */
    const yearEl = document.getElementById('year');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

    /* ─── Carousel clone ─── */
    const track = document.querySelector(".carousel-track");
    if (track) {
        track.innerHTML += track.innerHTML;
    }

    /* ─── Fade-in sections ─── */
    const fadeEls = document.querySelectorAll(".fade-in");
    fadeEls.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, index * 300);
    });

    /* ─── Scroll reveal for projects ─── */
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
    if (projects.length) {
        window.addEventListener("scroll", revealProjects);
        revealProjects();
    }

    /* ─── Swiper (projects page only) ─── */
    if (typeof Swiper !== 'undefined' && document.querySelector(".mySwiper")) {
        new Swiper(".mySwiper", {
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
    }

    /* ─── Contact form (contact page only) ─── */
    const sendCommentBtn = document.getElementById("send-comment");
    const sendPrivateMsgBtn = document.getElementById("send-private-message");
    const commentsList = document.getElementById("comments-list");
    const privateMessageForm = document.getElementById("private-message-form");
    const contactChoices = document.getElementsByName("contact-choice");

    /* helper: show a status message in a given element */
    function showStatus(el, msg, isError) {
        if (!el) return;
        el.textContent = msg;
        el.className = "form-status " + (isError ? "form-status--error" : "form-status--ok");
    }

    if (sendCommentBtn && commentsList) {
        if (typeof emailjs !== 'undefined') {
            emailjs.init("WjR0gy-0XG0CaBQgL");
        }

        contactChoices.forEach(choice => {
            choice.addEventListener("change", function () {
                if (privateMessageForm) {
                    privateMessageForm.style.display = this.value === "ja" ? "block" : "none";
                }
            });
        });

        const commentStatus = document.getElementById("comment-status");

        sendCommentBtn.addEventListener("click", function () {
            const lang = getLang();
            const t = dictionaries[lang] && dictionaries[lang].contact || {};
            const fromName = document.getElementById("from-name") ? document.getElementById("from-name").value.trim() : "";
            const email = document.getElementById("email").value.trim();
            const project = document.getElementById("project").value.trim();
            const publicComment = document.getElementById("public-comment").value.trim();
            if (!email || !project || !publicComment) {
                showStatus(commentStatus, t.fillAll || "Veuillez remplir tous les champs.", true);
                return;
            }
            const comment = { from: fromName ? fromName + " <" + email + ">" : email, project, message: publicComment };
            saveComment(comment);
            displayComment(comment);

            if (typeof emailjs !== 'undefined') {
                sendCommentBtn.disabled = true;
                sendCommentBtn.textContent = t.sending || "Envoi…";
                emailjs.send("service_m282g53", "template_wh3zu2k", {
                    from_name: fromName || email,
                    reply_to: email,
                    email,
                    project,
                    message: publicComment
                }).then(function () {
                    sendCommentBtn.disabled = false;
                    sendCommentBtn.setAttribute('data-i18n-value', 'contact.sendComment');
                    sendCommentBtn.textContent = t.sendComment || "Envoyer le commentaire";
                    showStatus(commentStatus, t.successComment || "Votre commentaire a bien été envoyé !", false);
                    document.getElementById("comment-form").reset();
                }).catch(function () {
                    sendCommentBtn.disabled = false;
                    sendCommentBtn.setAttribute('data-i18n-value', 'contact.sendComment');
                    sendCommentBtn.textContent = t.sendComment || "Envoyer le commentaire";
                    showStatus(commentStatus, t.errorComment || "Commentaire enregistré, mais l'envoi par e-mail a échoué.", true);
                });
            } else {
                showStatus(commentStatus, t.errorComment || "Commentaire enregistré, mais l'envoi par e-mail a échoué.", true);
            }
        });

        if (sendPrivateMsgBtn) {
            const privateStatus = document.getElementById("private-status");

            sendPrivateMsgBtn.addEventListener("click", function () {
                const lang = getLang();
                const t = dictionaries[lang] && dictionaries[lang].contact || {};
                const privateName = document.getElementById("private-name") ? document.getElementById("private-name").value.trim() : "";
                const privateEmail = document.getElementById("private-email") ? document.getElementById("private-email").value.trim() : "";
                const privateMessage = document.getElementById("private-message").value.trim();
                if (!privateEmail || !privateMessage) {
                    showStatus(privateStatus, t.fillAll || "Veuillez remplir tous les champs.", true);
                    return;
                }
                if (typeof emailjs !== 'undefined') {
                    sendPrivateMsgBtn.disabled = true;
                    sendPrivateMsgBtn.textContent = t.sending || "Envoi…";
                    emailjs.send("service_m282g53", "template_wh3zu2k", {
                        from_name: privateName || privateEmail,
                        reply_to: privateEmail,
                        email: privateEmail,
                        project: t.privateProject || "Message privé",
                        message: privateMessage
                    }).then(function () {
                        sendPrivateMsgBtn.disabled = false;
                        sendPrivateMsgBtn.setAttribute('data-i18n-value', 'contact.sendPrivate');
                        sendPrivateMsgBtn.textContent = t.sendPrivate || "Envoyer le message privé";
                        showStatus(privateStatus, t.successPrivate || "Votre message a bien été envoyé !", false);
                        document.getElementById("private-message-form").reset();
                    }).catch(function () {
                        sendPrivateMsgBtn.disabled = false;
                        sendPrivateMsgBtn.setAttribute('data-i18n-value', 'contact.sendPrivate');
                        sendPrivateMsgBtn.textContent = t.sendPrivate || "Envoyer le message privé";
                        showStatus(privateStatus, t.errorPrivate || "Erreur lors de l'envoi du message.", true);
                    });
                } else {
                    showStatus(privateStatus, t.errorPrivate || "Erreur lors de l'envoi du message.", true);
                }
            });
        }

        loadComments();
    }

    function saveComment(comment) {
        let comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.push(comment);
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    function displayComment(comment) {
        if (!commentsList) return;
        const div = document.createElement("div");
        div.classList.add("comment");
        const strong = document.createElement("strong");
        strong.textContent = comment.from || comment.email;
        const meta = document.createTextNode(` (Projet : ${comment.project})`);
        const br = document.createElement("br");
        const msg = document.createTextNode(comment.message);
        div.append(strong, meta, br, msg);
        commentsList.prepend(div);
    }

    function loadComments() {
        const comments = JSON.parse(localStorage.getItem("comments")) || [];
        comments.forEach(displayComment);
    }
});

/* ─── Card flip (used via inline onclick) ─── */
function flipCard(element) {
    element.classList.add("flipped");
    setTimeout(() => {
        element.classList.remove("flipped");
    }, 3000);
}

/* ─── Project details toggle (used via inline onclick) ─── */
function toggleDetails(button) {
    const details = button.parentElement.parentElement.nextElementSibling;
    if (!details) return;
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
    const details = button.parentElement;
    const mainButton = details.previousElementSibling && details.previousElementSibling.querySelector(".details-btn");
    details.style.maxHeight = "0";
    details.style.opacity = "0";
    details.classList.remove("show");
    if (mainButton) { mainButton.textContent = "Mehr anzeigen"; }
}
