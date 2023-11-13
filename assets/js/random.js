const subtitle = document.getElementById('random-s')

const phrases = [
    '"so good, it reminds me of dino nuggets!"',
    'possibly the best thing ever',
    'steve jobs would be proud',
    'for the players, by the players',
    'the best thing since sliced bread',
    'i love cats :3',
    'it\'s like a warm hug on a cold day',
    'it\'s like a ray of sunshine on a cloudy day',
    'it\'s like a breath of fresh air',
    'i love you <3',
    '100% organic',
    'made with ❤️',
    '(used to be) ran in a shed'
]

subtitle.innerHTML = phrases[Math.floor(Math.random() * phrases.length)]