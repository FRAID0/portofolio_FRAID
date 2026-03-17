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
            about: {
                title: "Über mich",
                p1: "Ich bin ein Student der Angewandten Informatik mit einer großen Leidenschaft für Softwareentwicklung, Systemengineering und neue Technologien. Mein akademischer Werdegang hat mir solide Kenntnisse in der Web- und Mobile-Entwicklung, in Datenbankmanagement und in der Automatisierung von Prozessen vermittelt.",
                p2: "Im Laufe meines Studiums hatte ich die Gelegenheit, an verschiedenen Projekten zu arbeiten – von der Entwicklung von Anwendungen mit Flutter und Python (PyQt6) bis hin zur Implementierung von Softwarelösungen mit TinyDB und PostgreSQL. Darüber hinaus habe ich mich mit der Entwicklung von Webanwendungen mit Angular sowie mit IoT (Internet of Things) und Software-Defined Vehicles (SDV) beschäftigt.",
                p3: "Ich liebe es, mich neuen Herausforderungen zu stellen und mein Wissen durch praxisnahe und kollaborative Projekte zu erweitern, wobei ich moderne Methoden wie Continuous Integration und automatisierte Deployments anwende.",
                contactBtn: "Kontakt aufnehmen"
            },
            projekts: {
                techTitle: "Verwendete Technologien und Fähigkeiten",
                contribTitle: "Meine Arbeit an diesem Projekt",
                mediaTitle: "Projektmedien",
                showMore: "Mehr anzeigen",
                showLess: "weniger anzeigen",
                close: "Schließen",
                viewOnGitHub: "Das Projekt auf GitHub ansehen",
                viewOnLinkedIn: "Das Projekt auf LinkedIn ansehen",
                videoNotSupported: "Ihr Browser unterstützt das Video nicht.",
                iotTitle: "IOT (Sudokuspiel)",
                iotDesc: "Entwicklung eines interaktiven Sudoku-Spiels mit Python und MQTT\n\nErstellung eines Multiplayer-Sudoku-Spiels mit <strong>Python</strong>, das <strong>die MQTT-Protokollarchitektur</strong> für die Echtzeitkommunikation zwischen Spielern verwendet. Implementierung eines MQTT-Dienstes zur Verwaltung mehrerer Topics, um Spielinformationen wie Spieleraktionen, Zeitlimits und Punktestände zu synchronisieren. Gestaltung und Programmierung der Benutzeroberfläche mit <strong>Tkinter</strong> zur Darstellung des Sudoku-Gitters und dynamischen Interaktionen. Entwicklung eines Services zur Übertragung von Spielständen zwischen den Teilnehmern und zur Synchronisierung des Fortschritts in Echtzeit. Verwendung von <strong>Python-Threads</strong> zur Steuerung des Spielablaufs, einschließlich Timer, Score-Tracking und Interaktionen zwischen den Spielern.",
                iotContrib: "<p><strong>1. Entwicklung der Sudoku-Spiel-Logik</strong><br>Das Herzstück des Projekts bildet die Spiel-Logik von Sudoku, und ich war für die Konzeption und Implementierung dieser wesentlichen Funktion verantwortlich. Dazu gehören:</p><ul><li><strong>Validierung der Eingaben der Spieler</strong>: Ich entwickelte einen Algorithmus, um sicherzustellen, dass die eingegebenen Zahlen die Sudoku-Regeln einhalten (keine Duplikate in Zeilen, Spalten und Unterfeldern).</li><li><strong>Verwaltung des Rasters</strong>: Ich programmierte die dynamische Erstellung eines Sudoku-Rasters und implementierte Mechanismen, um die Felder basierend auf den Aktionen der Spieler zu füllen und zu aktualisieren.</li><li><strong>Synchronisation des Spiels</strong>: Durch MQTT stellte ich die Echtzeit-Synchronisation des Spielzustands zwischen den Spielern sicher.</li></ul><p><strong>2. Gestaltung der Benutzeroberfläche mit Tkinter</strong><br>Die grafische Benutzeroberfläche wurde mit <strong>Tkinter</strong> erstellt. Die wichtigsten Funktionen sind:</p><ul><li><strong>Dynamische Anzeige des Rasters</strong>: Interaktive Anzeige, die es Spielern ermöglicht, Zahlen einzugeben und Updates in Echtzeit zu sehen.</li><li><strong>Verwaltung der Interaktionen</strong>: Benutzerereignisse wie Klicks und Logik zur Aktualisierung des Spielzustands.</li><li><strong>Anzeigen der Ergebnisse</strong>: Funktion zur Anzeige von Punktzahlen und Gewinner in einem Popup-Fenster.</li></ul><p><strong>3. Integration der Echtzeit-Kommunikation über MQTT</strong><br>Ich richtete ein <strong>MQTT</strong>-System ein, das die Synchronisation von Spieleraktionen, Punktständen und Zeitlimits ermöglichte:</p><ul><li><strong>Konfiguration des MQTT-Servers</strong>: Installation und Konfiguration eines <strong>dockerisierten MQTT-Servers</strong>.</li><li><strong>Verwaltung der MQTT-Topics</strong>: Erstellung mehrerer Topics zur Verwaltung von Spieleraktionen, Punktaktualisierungen und Zeitänderungen.</li><li><strong>Verwaltung der Nachrichten und Abonnements</strong>: Logik zum Veröffentlichen und Abonnieren von MQTT-Nachrichten.</li></ul>",
                webTitle: "Webentwicklung (DriveDeal)",
                webDesc: "Deal Drive ist eine interaktive Webseite, die mit <strong>HTML, CSS und JavaScript</strong> entwickelt wurde. Sie ermöglicht es den Nutzern, ein individuelles Fahrzeug zu konfigurieren, indem sie verschiedene Teile wie Räder, Karosserie und Türen auswählen. Jede Auswahl beeinflusst sowohl das Erscheinungsbild des Fahrzeugs als auch den Preis, wodurch eine dynamische und ansprechende Nutzererfahrung entsteht. Das Projekt basiert auf dem <strong>„Pick and Build&#34;-Konzept</strong>, bei dem der Nutzer sein eigenes Modell zusammenstellen kann. Ziel war es, eine intuitive Benutzeroberfläche bereitzustellen, die Änderungen in Echtzeit visuell darstellt.",
                webContrib: "<p><strong>Meine Rolle – Bezahlen-Seite (Warenkorb) – Projekt Deal Drive</strong></p><p>Im Rahmen des <strong>Deal Drive</strong>-Projekts war ich für die Entwicklung der <strong>Bezahlen-Seite</strong> (Warenkorb) verantwortlich.</p><p><strong>1. Weiterleitung nach der Konfiguration:</strong><br>Nachdem der Benutzer sein Fahrzeug personalisiert hatte, wurde er automatisch zur <strong>Bezahlen-Seite</strong> weitergeleitet.</p><p><strong>2. Auswahl der Zahlungsmethode:</strong><br><strong>PayPal-Option:</strong> Der Benutzer gibt seine E-Mail-Adresse ein. Eine simulierte Zahlungsbestätigung wird angezeigt.<br><strong>Kreditkarten-Option:</strong> Das System erkennt automatisch ob es sich um eine <strong>Visa</strong> oder <strong>Maestro</strong>-Karte handelt und überprüft die Gültigkeit der Nummer mittels <strong>regulärer Ausdrücke (Regex)</strong>.</p>",
                topTitle: "TOP – TeamOrientesProjekt – Workshop-Management",
                topDesc: "Entwicklung einer Full-Stack-Webanwendung zur vollständigen Verwaltung des Workshop-Prozesses im Rahmen des Projekts TOP. Das System deckt den gesamten Ablauf ab – von der anfänglichen Anfrage der Schulen über die Genehmigung bis zur Veröffentlichung – und ermöglicht den Mitgliedern eine interaktive Bewerbung.",
                topContrib: "<p><strong>Mein persönlicher Beitrag:</strong></p><p><strong>1. Backend und Datenbank:</strong><br>Administration und Einrichtung der PostgreSQL-Datenbank in einem Backend-Container. Entwicklung von REST-Endpunkten mit Node.js, Express und dem ORM Sequelize.</p><p><strong>2. Frontend und Integration:</strong><br>Konzeption und Implementierung von Frontend-Services zur Anzeige von Profilen sowie zur Realisierung der Dokumenten-Upload-Funktionalität.</p><p><strong>3. Cloud-Deployment:</strong><br>Einrichtung einer CI/CD-Pipeline und Deployment der Anwendung auf einer AWS EC2-Instanz.</p>"
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
            about: {
                title: "À propos de moi",
                p1: "Je suis un étudiant en informatique appliquée avec une grande passion pour le développement logiciel, l'ingénierie système et les nouvelles technologies. Mon parcours académique m'a apporté des connaissances solides en développement web et mobile, en gestion de bases de données et en automatisation des processus.",
                p2: "Au cours de mes études, j'ai eu l'opportunité de travailler sur divers projets – du développement d'applications avec Flutter et Python (PyQt6) à l'implémentation de solutions logicielles avec TinyDB et PostgreSQL. J'ai également exploré le développement d'applications web avec Angular ainsi que l'IoT (Internet des objets) et les véhicules définis par logiciel (SDV).",
                p3: "J'aime relever de nouveaux défis et élargir mes connaissances à travers des projets pratiques et collaboratifs, en appliquant des méthodes modernes telles que l'intégration continue et les déploiements automatisés.",
                contactBtn: "Me contacter"
            },
            projekts: {
                techTitle: "Technologies et compétences utilisées",
                contribTitle: "Mon travail sur ce projet",
                mediaTitle: "Médias du projet",
                showMore: "Voir plus",
                showLess: "Voir moins",
                close: "Fermer",
                viewOnGitHub: "Voir le projet sur GitHub",
                viewOnLinkedIn: "Voir le projet sur LinkedIn",
                videoNotSupported: "Votre navigateur ne prend pas en charge la vidéo.",
                iotTitle: "IoT (Jeu de Sudoku)",
                iotDesc: "Développement d'un jeu de Sudoku interactif avec Python et MQTT\n\nCréation d'un jeu de Sudoku multijoueur avec <strong>Python</strong>, utilisant <strong>l'architecture du protocole MQTT</strong> pour la communication en temps réel entre les joueurs. Implémentation d'un service MQTT pour gérer plusieurs topics afin de synchroniser les informations de jeu telles que les actions des joueurs, les limites de temps et les scores. Conception et programmation de l'interface utilisateur avec <strong>Tkinter</strong> pour afficher la grille de Sudoku et les interactions dynamiques. Développement d'un service de transfert d'état de jeu entre les participants et de synchronisation de la progression en temps réel. Utilisation de <strong>threads Python</strong> pour gérer le déroulement du jeu, y compris le minuteur, le suivi des scores et les interactions entre joueurs.",
                iotContrib: "<p><strong>1. Développement de la logique du jeu Sudoku</strong><br>Le cœur du projet est la logique de jeu du Sudoku, dont j'ai été responsable de la conception et de l'implémentation :</p><ul><li><strong>Validation des entrées des joueurs</strong> : Algorithme garantissant que les chiffres respectent les règles du Sudoku (pas de doublons dans les lignes, colonnes et sous-grilles).</li><li><strong>Gestion de la grille</strong> : Création dynamique d'une grille de Sudoku avec des mécanismes de remplissage et de mise à jour.</li><li><strong>Synchronisation du jeu</strong> : Utilisation de MQTT pour assurer la synchronisation en temps réel de l'état du jeu entre les joueurs.</li></ul><p><strong>2. Conception de l'interface utilisateur avec Tkinter</strong><br>L'interface graphique a été créée avec <strong>Tkinter</strong> :</p><ul><li><strong>Affichage dynamique de la grille</strong> : Interface interactive permettant aux joueurs de saisir des chiffres et de voir les mises à jour en temps réel.</li><li><strong>Gestion des interactions</strong> : Événements utilisateur tels que les clics et la logique de mise à jour de l'état du jeu.</li><li><strong>Affichage des résultats</strong> : Fonction affichant les scores et le gagnant dans une fenêtre popup.</li></ul><p><strong>3. Intégration de la communication en temps réel via MQTT</strong><br>Mise en place d'un système <strong>MQTT</strong> pour synchroniser les actions, les scores et les limites de temps :</p><ul><li><strong>Configuration du serveur MQTT</strong> : Installation et configuration d'un <strong>serveur MQTT dockerisé</strong>.</li><li><strong>Gestion des topics MQTT</strong> : Création de plusieurs topics pour gérer les actions des joueurs, les mises à jour de scores et les changements de temps.</li><li><strong>Gestion des messages et abonnements</strong> : Logique de publication et d'abonnement aux messages MQTT.</li></ul>",
                webTitle: "Développement Web (DriveDeal)",
                webDesc: "Deal Drive est un site web interactif développé avec <strong>HTML, CSS et JavaScript</strong>. Il permet aux utilisateurs de configurer un véhicule personnalisé en sélectionnant différentes pièces telles que les roues, la carrosserie et les portes. Chaque choix influence à la fois l'apparence du véhicule et son prix, créant ainsi une expérience utilisateur dynamique et attrayante. Le projet est basé sur le <strong>concept « Pick and Build »</strong>, où l'utilisateur peut assembler son propre modèle selon ses préférences.",
                webContrib: "<p><strong>Mon rôle – Page de paiement (Panier) – Projet Deal Drive</strong></p><p>Dans le cadre du projet <strong>Deal Drive</strong>, j'ai été responsable du développement de la <strong>page de paiement</strong> (panier).</p><p><strong>1. Redirection après la configuration :</strong><br>Après avoir personnalisé son véhicule, l'utilisateur est automatiquement redirigé vers la <strong>page de paiement</strong>.</p><p><strong>2. Sélection du mode de paiement :</strong><br><strong>Option PayPal :</strong> L'utilisateur saisit son adresse e-mail. Une confirmation de paiement simulée est affichée.<br><strong>Option carte de crédit :</strong> Le système reconnaît automatiquement s'il s'agit d'une carte <strong>Visa</strong> ou <strong>Maestro</strong> et vérifie la validité du numéro grâce aux <strong>expressions régulières (Regex)</strong>.</p>",
                topTitle: "TOP – Projet en équipe – Gestion d'ateliers",
                topDesc: "Développement d'une application web full-stack pour la gestion complète du processus d'ateliers dans le cadre du projet TOP. Le système couvre l'ensemble du flux – de la demande initiale des écoles à l'approbation jusqu'à la publication – et permet aux membres de postuler de manière interactive.",
                topContrib: "<p><strong>Ma contribution personnelle :</strong></p><p><strong>1. Backend et base de données :</strong><br>Administration et configuration de la base de données PostgreSQL dans un conteneur backend. Développement de points d'API REST avec Node.js, Express et l'ORM Sequelize.</p><p><strong>2. Frontend et intégration :</strong><br>Conception et implémentation de services frontend pour l'affichage des profils et la fonctionnalité d'upload de documents.</p><p><strong>3. Déploiement cloud :</strong><br>Mise en place d'un pipeline CI/CD et déploiement de l'application sur une instance AWS EC2.</p>"
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
            about: {
                title: "About me",
                p1: "I am an Applied Computer Science student with a great passion for software development, system engineering, and new technologies. My academic path has given me solid knowledge in web and mobile development, database management, and process automation.",
                p2: "During my studies I had the opportunity to work on various projects – from developing applications with Flutter and Python (PyQt6) to implementing software solutions with TinyDB and PostgreSQL. I also explored web application development with Angular as well as IoT (Internet of Things) and Software-Defined Vehicles (SDV).",
                p3: "I love facing new challenges and expanding my knowledge through hands-on and collaborative projects, applying modern methods such as continuous integration and automated deployments.",
                contactBtn: "Contact me"
            },
            projekts: {
                techTitle: "Technologies and Skills Used",
                contribTitle: "My Work on This Project",
                mediaTitle: "Project Media",
                showMore: "Show more",
                showLess: "Show less",
                close: "Close",
                viewOnGitHub: "View project on GitHub",
                viewOnLinkedIn: "View project on LinkedIn",
                videoNotSupported: "Your browser does not support video.",
                iotTitle: "IoT (Sudoku Game)",
                iotDesc: "Development of an interactive Sudoku game with Python and MQTT\n\nCreation of a multiplayer Sudoku game with <strong>Python</strong>, using <strong>MQTT protocol architecture</strong> for real-time communication between players. Implementation of an MQTT service to manage multiple topics to synchronise game information such as player actions, time limits and scores. Design and programming of the user interface with <strong>Tkinter</strong> to display the Sudoku grid and dynamic interactions. Development of a service for transferring game states between participants and synchronising progress in real time. Use of <strong>Python threads</strong> to control the game flow, including timer, score tracking and interactions between players.",
                iotContrib: "<p><strong>1. Development of the Sudoku game logic</strong><br>The core of the project is the Sudoku game logic, which I was responsible for designing and implementing:</p><ul><li><strong>Validation of player inputs</strong>: Algorithm ensuring that entered numbers comply with Sudoku rules (no duplicates in rows, columns and sub-grids).</li><li><strong>Grid management</strong>: Dynamic creation of a Sudoku grid with mechanisms to fill and update cells based on player actions.</li><li><strong>Game synchronisation</strong>: Using MQTT to ensure real-time synchronisation of game state between players.</li></ul><p><strong>2. Designing the user interface with Tkinter</strong><br>The graphical user interface was created with <strong>Tkinter</strong>:</p><ul><li><strong>Dynamic grid display</strong>: Interactive display allowing players to enter numbers and see updates in real time.</li><li><strong>Interaction management</strong>: User events such as clicks and logic to update game state based on player actions.</li><li><strong>Results display</strong>: Function displaying scores and the winner in a popup window.</li></ul><p><strong>3. Integration of real-time communication via MQTT</strong><br>Setting up an <strong>MQTT</strong> system to synchronise actions, scores and time limits:</p><ul><li><strong>MQTT server configuration</strong>: Installation and configuration of a <strong>dockerised MQTT server</strong>.</li><li><strong>MQTT topic management</strong>: Creation of multiple topics to manage player actions, score updates and time changes.</li><li><strong>Message and subscription management</strong>: Logic for publishing and subscribing to MQTT messages.</li></ul>",
                webTitle: "Web Development (DriveDeal)",
                webDesc: "Deal Drive is an interactive website developed with <strong>HTML, CSS and JavaScript</strong>. It allows users to configure a personalised vehicle by selecting different parts such as wheels, body and doors. Each choice influences both the appearance of the vehicle and its price, creating a dynamic and engaging user experience. The project is based on the <strong>\"Pick and Build\" concept</strong>, where the user can assemble their own model according to their preferences.",
                webContrib: "<p><strong>My role – Payment page (Shopping Cart) – Deal Drive project</strong></p><p>As part of the <strong>Deal Drive</strong> project, I was responsible for developing the <strong>payment page</strong> (shopping cart).</p><p><strong>1. Redirect after configuration:</strong><br>After the user personalised their vehicle, they were automatically redirected to the <strong>payment page</strong>.</p><p><strong>2. Payment method selection:</strong><br><strong>PayPal option:</strong> The user enters their email address. A simulated payment confirmation is displayed.<br><strong>Credit card option:</strong> The system automatically detects whether it is a <strong>Visa</strong> or <strong>Maestro</strong> card and verifies the validity of the number using <strong>regular expressions (Regex)</strong>.</p>",
                topTitle: "TOP – Team-Oriented Project – Workshop Management",
                topDesc: "Development of a full-stack web application for the complete management of the workshop process as part of the TOP project. The system covers the entire workflow – from the initial request from schools through approval to publication – and allows members to apply interactively.",
                topContrib: "<p><strong>My personal contribution:</strong></p><p><strong>1. Backend and database:</strong><br>Administration and setup of the PostgreSQL database in a backend container. Development of REST API endpoints with Node.js, Express and the Sequelize ORM.</p><p><strong>2. Frontend and integration:</strong><br>Design and implementation of frontend services for displaying profiles and the document upload functionality.</p><p><strong>3. Cloud deployment:</strong><br>Setting up a CI/CD pipeline and deploying the application on an AWS EC2 instance.</p>"
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
        // After translation, ensure open project details sections fit their new content
        // and that their corresponding buttons show the "show less" label.
        document.querySelectorAll('.project-details.show').forEach(details => {
            // Recompute maxHeight based on updated scrollHeight to avoid truncation.
            details.style.maxHeight = details.scrollHeight + 'px';

            // Try to find the associated details button within the same container.
            let container = details.closest('.project-card');
            if (!container) {
                container = details.parentElement;
            }
            if (!container) {
                return;
            }
            const btn = container.querySelector('.details-btn');
            if (!btn) {
                return;
            }

            // If a specific i18n key for the "show less" state is provided, use it.
            const showLessKey = btn.getAttribute('data-i18n-showless');
            if (showLessKey) {
                const showLessLabel = resolve(showLessKey);
                if (showLessLabel !== null) {
                    btn.textContent = showLessLabel;
                }
            }
        });
        document.documentElement.lang = lang;
        phrases = dict.typing || phrases;
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
    const lang = localStorage.getItem('lang') || 'de';
    const showMore = { de: "Mehr anzeigen", fr: "Voir plus", en: "Show more" };
    const showLess = { de: "weniger anzeigen", fr: "Voir moins", en: "Show less" };
    if (!details.classList.contains("show")) {
        details.style.maxHeight = details.scrollHeight + "px";
        details.style.opacity = "1";
        details.classList.add("show");
        button.textContent = showLess[lang] || showLess.de;
    } else {
        details.style.maxHeight = "0";
        details.style.opacity = "0";
        details.classList.remove("show");
        button.textContent = showMore[lang] || showMore.de;
    }
}

function closeDetails(button) {
    const details = button.parentElement;
    const mainButton = details.previousElementSibling && details.previousElementSibling.querySelector(".details-btn");
    details.style.maxHeight = "0";
    details.style.opacity = "0";
    details.classList.remove("show");
    const lang = localStorage.getItem('lang') || 'de';
    const showMore = { de: "Mehr anzeigen", fr: "Voir plus", en: "Show more" };
    if (mainButton) { mainButton.textContent = showMore[lang] || showMore.de; }
}
