const ap = new APlayer({
    container: document.getElementById('player'),
    mini: false,
    autoplay: false,
    theme: '#FADFA3',
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 90,
    // lrcType: 3,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: 'https://lc-gluttony.s3.amazonaws.com/xNikhpeIAjOL/3IqiHKmGfsm8Vu2ckB7s4k4c9O5cawrl/Childhood%20Memory.mp3',
            // cover: 'cover1.jpg',
            // lrc: 'lrc1.lrc',
            // theme: '#ebd0c2'
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'https://lc-gluttony.s3.amazonaws.com/xNikhpeIAjOL/3IqiHKmGfsm8Vu2ckB7s4k4c9O5cawrl/Childhood%20Memory.mp3',
            // cover: 'cover2.jpg',
            // lrc: 'lrc2.lrc',
            // theme: '#46718b'
        }
    ]
});