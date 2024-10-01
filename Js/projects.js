document.querySelector('.mult-odyssey').addEventListener('click', function(event) {
    event.preventDefault();
    
    // mostra o container
    const videoContainer = document.getElementById('videoContainer');
    videoContainer.style.display = 'block';
    
    // Inicia o vídeo
    const video = document.getElementById('projectVideo');
    video.play();
});

// fecha o video
document.getElementById('botaoFechar').addEventListener('click', function() {
    const videoContainer = document.getElementById('videoContainer');
    
    // Pausa o video e esconde o container
    const video = document.getElementById('projectVideo');
    video.pause();
    videoContainer.style.display = 'none';
});
