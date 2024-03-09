
    function showVideoBalloon(videoUrl) {

        var iframe = document.createElement('iframe');
        iframe.src = videoUrl;
        iframe.width = '560';
        iframe.height = '315';
        iframe.allow = 'autoplay; encrypted-media';
        iframe.setAttribute('allowfullscreen', '');

        var balloon = document.createElement('div');
        balloon.classList.add('video-balloon');
        balloon.appendChild(iframe);

        document.body.appendChild(balloon);
    }

    document.addEventListener('DOMContentLoaded', function() {
        var grid = document.querySelector('.grid-container');
        grid.style.animation = 'moveRight 3s ease-out';
    });
