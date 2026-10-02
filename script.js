document.addEventListener('DOMContentLoaded', function() {
    const toggleMapBtn = document.querySelector('.toggle-map');
    const mapWrapper = document.querySelector('.map-wrapper');

    if (toggleMapBtn && mapWrapper) {
        if (window.innerWidth < 768) {
            mapWrapper.classList.add('collapsed');
            updateMapToggleText(toggleMapBtn, true);
        }

        toggleMapBtn.addEventListener('click', function() {
            mapWrapper.classList.toggle('collapsed');
            const isCollapsed = mapWrapper.classList.contains('collapsed');
            updateMapToggleText(toggleMapBtn, isCollapsed);
        });
    }
});

function updateMapToggleText(button, isCollapsed) {
    button.textContent = isCollapsed ? 'Показати карту' : 'Сховати карту';
}

function launchConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#FF61A6', '#7B5BE6', '#FFD166', '#06D6A0', '#118AB2'];

    confettiContainer.innerHTML = '';

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.position = 'absolute';
        confetti.style.top = '-10px';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.opacity = Math.random() + 0.5;

        confettiContainer.appendChild(confetti);

        confetti.animate([
            { transform: `translateY(-10px) rotate(0deg)`, opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${360 * Math.random()}deg)`, opacity: 0.3 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.37, 1.04, 0.68, 0.98)',
            fill: 'forwards'
        }).onfinish = () => confetti.remove();
    }
}

function launchBalloons() {
    const balloonContainer = document.getElementById('balloon-container');
    const balloonEmojis = ['🎈'];

    balloonContainer.innerHTML = '';

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
            balloon.style.fontSize = Math.random() * 20 + 30 + 'px';
            balloon.style.left = Math.random() * 90 + 5 + 'vw';
            balloon.style.bottom = '0';

            balloonContainer.appendChild(balloon);

            balloon.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
                { transform: 'translateY(-20vh) rotate(-5deg)', opacity: 1, offset: 0.2 },
                { transform: 'translateY(-100vh) rotate(5deg)', opacity: 0.7 }
            ], {
                duration: Math.random() * 10000 + 10000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                fill: 'forwards'
            }).onfinish = () => balloon.remove();
        }, i * 500);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        launchConfetti();
        launchBalloons();
    }, 1000);
});
