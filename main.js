let menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', function() {
    let nav = document.getElementById('nav');
    let content = document.querySelector('.row');

    nav.classList.toggle('show');
    content.classList.toggle('content')
})