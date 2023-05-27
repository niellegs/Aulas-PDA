var agente = document.querySelector('#agente');

agente.addEventListener("change", mudarAgente => {
    const agenteChecked = agente.value;
    var video = document.querySelector('#background-video');
    switch(agenteChecked) {
        case 'killjoy':
            video.src = 'videos/killjoy.mp4';
        break;
        case 'raze':
            video.src = 'videos/raze.mp4';
        break;
        case 'chamber':
            video.src = 'videos/chamber.mp4';
        break;
        case 'phoenix':
            video.src = 'videos/phoenix.mp4';
        break;
        default:
            video.src = ''
            window.document.body.style.backgroundColor = '#191825'
        break;
    }
})
