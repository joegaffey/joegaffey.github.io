let darkTheme = false;
if(document.body.classList.contains('dark'))
  darkTheme = true;

function switchCard(selector) {
  document.querySelector('.currentCard').classList.remove('currentCard');
  document.querySelector(selector).classList.add('currentCard');
  // Lazy load Itch iframes to avoid layout issues
  if(selector === '.itch-container')
    updateItchCard();
}

function updateItchCard() {
  let themeStr = '';
  if(darkTheme)  
    themeStr = '?dark=true';
  document.querySelector('.itch-container').innerHTML = 
    `<iframe frameborder="0" src="https://itch.io/embed/1266121${ themeStr }">
       <a href="https://joegaffey.itch.io/bugvsboxes">Bug vs. Boxes</a>
     </iframe>
     <iframe frameborder="0" src="https://itch.io/embed/196876${ themeStr }">
       <a href="https://joegaffey.itch.io/galaxeroids">Galaxeroids</a>
     </iframe>`;
}

CSS.paintWorklet.addModule('./particles.js')