// on initial load
$( document ).ready(function() {
    onPlayaLoad();
});

// initiate API
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

// read player state
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        onPlaying();
    } else if (event.data == YT.PlayerState.PAUSED) {
        onPaused();
    } else if (event.data == YT.PlayerState.ENDED) {
        onEnded();
    } else if (event.data == YT.PlayerState.BUFFERING) {
        onBuffering();
    } else if (event.data == YT.PlayerState.CUED) {
        onCued();
    } else if (event.data == YT.PlayerState.UNSTARTED) {
        onCued();
    }
}

    // respond to states
var playButton = $('#playButton'),
    poster = $('#poster'),
    socialButtons = $('.embed-social-button'),
    suggestedVideoThumbs = $('.suggested-video-thumb');
    
    function onPlayaLoad() {
        playButton.show();
        var onEmbedLoad = new TimelineMax();
        onEmbedLoad
        .fromTo(playButton,0.25, {autoAlpha: "0"}, {autoAlpha: "1"}, "0.5")
        .fromTo(playButton,0.7, {scale: "0", rotation: "50"}, {scale: "1.3", rotation: "-15", ease:Sine.easeInOut}, "0.5")
        .to(playButton,0.55, {scale: "0.8", rotation: "12"})
        .to(playButton,0.52, {scale: "1.2", rotation: "-10"})
        .to(playButton,0.51, {scale: "0.85", rotation: "8"})
        .to(playButton,0.505, {scale: "1.15", rotation: "-6"})
        .to(playButton,0.5, {scale: "0.9", rotation: "3"})
        .to(playButton,0.5, {scale: "1.1", rotation: "-3", repeat: -1, yoyo:true, ease:Sine.easeInOut});
    }

    function onBuffering() {
    //    explode(emitter);
        var onBufferingTimeline = new TimelineMax();
        onBufferingTimeline
        .to(playButton,0.25, {scale: "1.5", ease:Sine.easeInOut})
        .to(playButton,0.25, {scale: "1", ease:Sine.easeInOut});
    }
    function onCued() { 
    }
    function onPlaying() {
        var onPlayingTimeline = new TimelineMax();
        onPlayingTimeline
            .to(playButton,0.35, {scale: "1.5", rotation: "-30", ease:Sine.easeInOut})
            .to(playButton,1, {scale: "0", rotation: "75", ease:Power3.easeOut})
            .to(playButton,0.5, {autoAlpha: "0", delay: "0.5", ease:Power1.easeInOut}, "0")
        .to(poster, 1.69, {autoAlpha: "0", scale: "1.15", rotation: "-1.8", ease:Sine.easeInOut}, "0")
    //    .staggerTo(socialButtons,2.5, {x: "75%", scale: "0", rotation:"45", ease:Elastic.easeIn}, 0.25, "0")
        .staggerTo(suggestedVideoThumbs,2.5, {x: "-75%", scale: "0", rotation:"-45", ease:Elastic.easeIn}, 0.25, "0");
    }
    function onPaused() {
        var onPausedTimeline = new TimelineMax();
        onPausedTimeline
            .fromTo(playButton,0.35, {autoAlpha: "0"}, {autoAlpha: "1"}, "0")
            .fromTo(playButton,3, {scale: "0.25", rotation: "50"}, {scale: "1", rotation: "0", ease:Elastic.easeOut}, "0")
            .to(playButton,0.5, {scale: "0.9", rotation: "5", repeat: -1, yoyo:true, ease:Sine.easeInOut}, "-=2.7")
        .fromTo(poster, 0.55, {autoAlpha: "0", scale:"1.05", rotation:"-0.4"}, {autoAlpha: "0.9899", scale:"1",rotation:"0",ease:Sine.easeInOut}, "0")
    //    .to(socialButtons,0,{display: "block"},0)
    //    .staggerFromTo(socialButtons,2.5, {x: "75%", scale: "0", rotation:"45"}, {x: "0%", scale: "1", rotation:"0", ease:Elastic.easeOut},0.25, "0")
        .to(suggestedVideoThumbs,0,{display: "block"},0)
        .staggerFromTo(suggestedVideoThumbs,2.5, {x: "-75%", scale: "0", rotation:"-45"}, {x: "0%", scale: "1", rotation:"0", ease:Elastic.easeOut}, 0.25, "0");
            
    }
    function onEnded() {
        //do stuff
    }
    function onUnstarted() {
        //do stuff
    }

