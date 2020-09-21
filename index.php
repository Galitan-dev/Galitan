<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://galitan.fr">
    <meta property="og:title" content="Galitan | Développeur Web">
    <meta name="og:description" content="Besoin d'un Site Internet ou d'un Bot Discord pour vos services ? N'hésitez plus !">
    <meta property="og:image" content="https://galitan.000webhostapp.com/images/logo.png">
    <title>Galitan | Développeur Web</title>
    <link rel="icon" href="images/logo.png">
    <?php echo 
        "<link rel='stylesheet' href='css/style.css'>" .
        "<script src='js/app.js'></script>"
    ; ?>
</head>
<body>
    <div class="navbar">
        <div class="logo">
            <img src="images/logo.png">
            <h1><span class="remove">G</span>alitan</h1>
        </div>
        <div class="items">
            <a class="navbar-item" id="services" onclick="scrollView(this.id);">Services</a>
            <a class="navbar-item" id="about" onclick="scrollView(this.id);">À propos</a>
            <a class="navbar-item" id="projects" onclick="scrollView(this.id);">Mes projets</a>
            <a class="navbar-item" id="contact" onclick="scrollView(this.id);">Me contacter</a>
        </div>
    </div>
    <div class="content">
        <div class="preambule">
            <h1 class="blue">Galitan</h1>
            <h3>Développeur <span class="blue">Web</span></h1>
            <br>
            <p>Besoin d'un Site Internet ou d'un Bot Discord pour vos services ?</p>
            <p class="blue">N'hésitez plus !</p>
        </div>
        <div class="categories">
            <div class="services">
                <h2>Services</h2>
                <div class="content">
                    <a class="service" onclick="scrollView('contact');">
                            <img src="images/website.png">
                            <h3 class="blue">Développement Web</h3>
                            <p>Création de <span class="blue">Site Internet</span>, selon vos choix, afin de <span class="blue">mettre en avant</span> vos services.</p>
                    </a>
                    <a class="service" onclick="scrollView('contact');">
                            <img src="images/discord.png">
                            <h3 class="blue">Bot Discord</h3>
                            <p>Création de <span class="blue">Bot Discord</span>, selon vos choix, afin d'<span class="blue">automatiser</span> votre serveur et de le rendre <span class="blue">unique</span>.</p>
                    </a>
                    <a class="service" onclick="scrollView('contact');">
                            <img src="images/application.png">
                            <h3 class="blue">Application Android</h3>
                            <p>Création d'<span class="blue">Application Android</span> afin de rendre vos services <span class="blue">accesibles</span> à <span class="blue">tout instant</span>.</p>
                    </a>
                </div>
            </div>
            <div class="about">
                <h2>À propos</h2>
                <div class="content">
                    <p class="presentation">Bonjour, c'est Galitan.<br><br>Je suis un <span class="blue">développeur web</span> depuis 2018, et j'offre maintenant mes services au publique.<br>Pour moi, chaque <span class="blue">nouveau projet</span> est une source d'<span class="blue">apprentissage</span>.</p>
                    <div class="informations">
                        <p>2007 ❤</p>
                        <p>Web et Java 🖥</p>
                        <p>Apprenti ⚙</p>
                    </div>
                </div>
            </div>
            <div class="projects">
                <h2>Mes projets</h2>
            </div>
            <div class="contact">
                <h2>Me contacter</h2>
            </div>
        </div>
    </div>
</body>
</html>