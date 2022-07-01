var drums = new Howl({
    src: ['./audio/drums.mp3']
});
var guitar = new Howl({
    src: ['./audio/guitar.mp3']
});
var mic = new Howl({
    src: ['./audio/mic.mp3']
});
var piano = new Howl({
    src: ['./audio/piano.mp3']
});

drums.play();
guitar.play();
mic.play();
piano.play();

// function playGuitar() {
// 	guitar.play();
// }
// function pauseGuitar() {
// 	guitar.pause();
// }
// function stopGuitar() {
// 	guitar.stop();
// }
// function muteGuitar() {
// 	guitar.mute(true);
// }
// function unmuteGuitar() {
// 	guitar.mute(false);
// }

window.onload = function () {
    const drumsMarker = document.getElementById('drums-marker');
    const guitarMarker = document.getElementById('guitar-marker');
    const micMarker = document.getElementById('mic-marker');
    const pianoMarker = document.getElementById('piano-marker');

    drumsMarker.addEventListener('markerFound', function() {
    	// console.log('marker found');
    	drums.mute(false);
    });
    drumsMarker.addEventListener('markerLost', function() {
    	// console.log('marker lost');
    	drums.mute(true);
    });
    guitarMarker.addEventListener('markerFound', function() {
        guitar.mute(false);
    });
    guitarMarker.addEventListener('markerLost', function() {
        guitar.mute(true);
    });
    micMarker.addEventListener('markerFound', function() {
        mic.mute(false);
    });
    micMarker.addEventListener('markerLost', function() {
        mic.mute(true);
    });
    pianoMarker.addEventListener('markerFound', function() {
        piano.mute(false);
    });
    pianoMarker.addEventListener('markerLost', function() {
        piano.mute(true);
    });
}