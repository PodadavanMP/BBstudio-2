console.log ("výtej v JavaScriptu")
// Zajištění plynulého scrollování na sekce
function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Funkce pro návrat nahoru
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Zobrazení tlačítka pro návrat nahoru při scrollování
window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (window.scrollY > 300) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// Přidání event listeneru pro externí odkazy
document.addEventListener('DOMContentLoaded', function () {
    // Odkaz na Instagram
    const instagramLink = document.querySelector('#kontakty a[href*="instagram.com"]');
    if (instagramLink) {
        instagramLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(this.href, '_blank');
        });
    }

    // Odkaz na mapu
    const mapLink = document.querySelector('#kontakty a[href*="maps"]');
    if (mapLink) {
        mapLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(this.href, '_blank');
        });
    }
});
