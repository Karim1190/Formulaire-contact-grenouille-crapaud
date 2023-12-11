document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez la boîte par défaut (box1) lors du chargement de la page
    slide('box1');
});

function slide(boxId) {
    // Sélectionnez les éléments nécessaires
    const slider = document.querySelector('.slider');
    const infoBox1 = document.getElementById('infoBox1');
    const infoBox2 = document.getElementById('infoBox2');

    // Sélectionnez la box sur laquelle vous voulez glisser
    const box = document.getElementById(boxId);

    // Obtenez les dimensions de la box et du conteneur du slider
    const boxRect = box.getBoundingClientRect();
    const sliderRect = slider.parentElement.getBoundingClientRect();

    // Calculez la position de la box par rapport au slider
    const offset = boxRect.left - sliderRect.left;
    const width = boxRect.width;

    // Appliquez la transformation et la largeur au slider pour obtenir l'effet de glissement
    slider.style.transform = `translateX(${offset}px)`;
    slider.style.width = `${width}px`;

    // Afficher le texte et l'image lorsque le slider est sur box1 ou box2
    if (boxId === 'box1') {
        infoBox1.classList.add('active');
        infoBox2.classList.remove('active');
    } else if (boxId === 'box2') {
        infoBox1.classList.remove('active');
        infoBox2.classList.add('active');
    }
}
