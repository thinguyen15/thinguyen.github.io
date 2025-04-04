document.addEventListener('DOMContentLoaded', function() {
    // Haetaan hamburger-nappi ja valikon lista
    const hamburger = document.getElementById('hamburger');  // Tämä pitää olla id=hamburger
    const menu = document.getElementById('tableOfContent');  // Tämä hakee koko tableOfContent-divin

    // Lisätään tapahtumakuuntelija hamburger-napille
    hamburger.addEventListener('click', function() {
        menu.classList.toggle('show'); // Toggle (vaihdetaan) 'show' luokan tilaa
    });
});

