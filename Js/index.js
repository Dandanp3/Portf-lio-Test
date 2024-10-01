document.getElementById('botaoAcesso').addEventListener('click', function(event) {
    document.body.style.background = 'linear-gradient(to left, rgba(255, 255, 255, 0.8) 85%, rgba(247, 247, 247, 0.8) 100%, rgba(252, 244, 103, 0.8) 100%)';
    event.preventDefault(); //impede o link
    
    const elementosFade = document.querySelectorAll('h1, p, .botao-home, .gojo');

    elementosFade.forEach(element => {
        element.classList.add('fade-out');
    });


    setTimeout(() => {
        document.body.style.backgroundColor = 'black';

        const video = document.createElement('video');
        video.src = './assets/domain-expansion.mp4'
        video.autoplay = true
        video.muted = true
        video.playsInline = true
        video.style.position = 'fixed'
        video.style.top = '0'
        video.style.left = '0'
        video.style.width = '100%'
        video.style.height = '100%'
        video.style.objectFit = 'cover'
        video.style.zIndex = '9999' //garante que o video fique acima
        video.controls = false 
        video.setAttribute('playsinline', '');
        document.body.appendChild(video)

        video.addEventListener('ended', function() {
            window.location.href = 'home.html'
        })
    }, 1000)
})