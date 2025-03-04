const heart = document.querySelector('.heart');
const message = document.querySelector('.message');

function animateHeart() {
    heart.classList.toggle('pulse');
    message.classList.toggle('pulse');
}

setInterval(animateHeart, 2000);

document.addEventListener('DOMContentLoaded', function() {
    const phrase = document.querySelector('.phrase');
    const text = phrase.textContent;
    phrase.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            phrase.textContent += text.charAt(i);
            phrase.style.opacity = '1';
            i++;
            setTimeout(typeWriter, 150); // Velocidad de escritura
        }
    }
    
    setTimeout(() => {
        typeWriter();
    }, 1000); // Espera 1 segundo antes de comenzar a escribir
});