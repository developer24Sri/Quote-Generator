let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes =[
  '"You can get everything in life you want if you will just help enough other people get what they want.  —Zig Ziglar"',
'"Inspiration does exist, but it must find you working.—Pablo Picasso"',
'"Dont settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had. -Angela Bassett"',
'"Show up, show up, show up, and after a while the muse shows up, too. —Isabel Allende"',
'"Dont bunt. Aim out of the ballpark. Aim for the company of immortals. ―David Ogilvy"',
'"I have stood on a mountain of nos for one yes. —Barbara Elaine Smith"',
'"If you believe something needs to exist, if its something you want to use yourself, dont let anyone ever stop you from doing it. —Tobias Lütke"',
'"You ve gotta dance like theres nobody watching, love like youll never be hurt, sing like theres nobody listening, and live like it’s heaven on earth. -William W. Purkey"',
'"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten. -Neil Gaiman"',
'"Everything you can imagine is real. -Pablo Picasso"',
'"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us. -Helen Keller"',
'"Do one thing every day that scares you. -Eleanor Roosevelt"',
'"Its no use going back to yesterday, because I was a different person then. -Lewis Carroll"',
'"Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. -Socrates"',
'"Do what you feel in your heart to be right―for youll be criticized anyway. -Eleanor Roosevelt"',
'"Happiness is not something ready made. It comes from your own actions. -Dalai Lama XIV"',
'"Whatever you are, be a good one. -Abraham Lincoln"',
'"Its important to learn and not repeat the same mistakes. Whats done is done. -MS Dhoni"',
'"If you dont really have a dream, you cant really push yourself; you dont really know what the target is. -MS Dhoni"',
];

btn.addEventListener('click', function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  output.innerHTML = randomQuote;
})