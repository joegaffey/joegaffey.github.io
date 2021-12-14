function switchCard(selector) {
  document.querySelector('.currentCard').classList.remove('currentCard');
  document.querySelector(selector).classList.add('currentCard');
  if(selector === '.itch-container')
    updateItchCard();
}

function updateItchCard() {
  document.querySelector('.itch-container').innerHTML = 
    `<iframe frameborder="0" src="https://itch.io/embed/1266121"><a href="https://joegaffey.itch.io/bugvsboxes">Bug vs. Boxes</a></iframe>
    <iframe frameborder="0" src="https://itch.io/embed/196876"><a href="https://joegaffey.itch.io/galaxeroids">Galaxeroids</a></iframe>`;
}

const particlesEl = document.querySelector('.particles');
setupParticles();

function setupParticles() {
  for(let i = 0; i < 50; i++) {
    const part = document.createElement('div');
    setupParticle(part);
    particlesEl.append(part);
  }
}

function setupParticle(part) {
  part.x = Math.random() * particlesEl.clientWidth;
  part.y = Math.random() * particlesEl.clientHeight;
  part.style.left = part.x + 'px';
  part.style.top = part.y + 'px';
  part.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  const size = 10 + Math.random() * 20 + 'px';
  part.style.width = part.style.height = size; 
  part.speed = Math.random();
  part.direction = Math.random() * 90;
}

let lastTS = 0;
function step(timestamp) {
  if(timestamp > lastTS + 50) {
    [...particlesEl.children].forEach(part => {
      part.x += part.speed * Math.sin(part.direction);
      part.y += part.speed * Math.cos(part.direction);
      if(part.x < 0 || part.x > particlesEl.offsetWidth || 
         part.y < 0 || part.y > particlesEl.offsetHeight)
        setupParticle(part);
      else {
        part.style.left = part.x + 'px';
        part.style.top = part.y + 'px';
      }
    });
    lastTS = timestamp;
  }
  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

function resize() {
  particlesEl.innerHTML = '';
  setupParticles();
}

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
  
window.onresize = debounce(resize, 200);