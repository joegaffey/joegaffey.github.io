let darkTheme = false;
if(document.body.classList.contains('dark'))
  darkTheme = true;

function switchCard(selector) {
  document.querySelector('.currentCard').classList.add('hidden');
  document.querySelector('.currentCard').classList.remove('currentCard');
  document.querySelector(selector).classList.add('currentCard');
  document.querySelector(selector).classList.remove('hidden');
  // Lazy load Itch and Twitter iframes for perf and to avoid layout issues
  if(selector === '.itch-card')
    updateItchCard();
  else if(selector === '.twitter-card')
    updateTwitterCard();
}

let itchLoaded = false;
function updateItchCard() {
  if(itchLoaded)
    return;
  let themeStr = '';
  if(darkTheme)  
    themeStr = '?dark=true';
  document.querySelector('.itch-card-main').innerHTML = 
    `<iframe frameborder="0" src="https://itch.io/embed/1266121${ themeStr }">
       <a href="https://joegaffey.itch.io/bugvsboxes">Bug vs. Boxes</a>
     </iframe>
     <iframe frameborder="0" src="https://itch.io/embed/196876${ themeStr }">
       <a href="https://joegaffey.itch.io/galaxeroids">Galaxeroids</a>
     </iframe>`;
  itchLoaded = true;
}

function updateTwitterCard() {
  twttr.widgets.load(
    document.querySelector('.twitter-card')
  );
}

CSS.paintWorklet.addModule('./particles.js')