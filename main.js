let darkTheme = false;
if(document.body.classList.contains('dark'))
  darkTheme = true;

function switchCard(selector) {
  document.querySelector('.currentCard').classList.add('hidden');
  document.querySelector('.currentCard').classList.remove('currentCard');
  document.querySelector(selector).classList.add('currentCard');
  document.querySelector(selector).classList.remove('hidden');
  // Lazy load cards with iframes for perf and to avoid layout issues
  if(selector === '.itch-card')
    updateItchCard();
  else if(selector === '.twitter-card')
    updateTwitterCard();
  else if(selector === '.sketchfab-card')
    updateSketchfabCard();
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

let sfLoaded = false;
function updateSketchfabCard(){
  if(sfLoaded)
    return;
  document.querySelector('.sketchfab-card-main').innerHTML = 
  `<div class="sketchfab-embed-wrapper"> <iframe title="Compact steel and wood simrig" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/e61f0f1db22746c782021229dc042cea/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/compact-steel-and-wood-simrig-e61f0f1db22746c782021229dc042cea?utm_medium=embed&utm_campaign=share-popup&utm_content=e61f0f1db22746c782021229dc042cea" target="_blank" style="font-weight: bold; color: #1CAAD9;"> Compact steel and wood simrig </a> by <a href="https://sketchfab.com/joe.gaffey?utm_medium=embed&utm_campaign=share-popup&utm_content=e61f0f1db22746c782021229dc042cea" target="_blank" style="font-weight: bold; color: #1CAAD9;"> joegaffey </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=e61f0f1db22746c782021229dc042cea" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
   <div class="sketchfab-embed-wrapper"> <iframe title="Modular Arcade Machine (bartop)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/9b5c692ee3144c849f347e21e86d62c9/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/modular-arcade-machine-bartop-9b5c692ee3144c849f347e21e86d62c9?utm_medium=embed&utm_campaign=share-popup&utm_content=9b5c692ee3144c849f347e21e86d62c9" target="_blank" style="font-weight: bold; color: #1CAAD9;"> Modular Arcade Machine (bartop) </a> by <a href="https://sketchfab.com/joe.gaffey?utm_medium=embed&utm_campaign=share-popup&utm_content=9b5c692ee3144c849f347e21e86d62c9" target="_blank" style="font-weight: bold; color: #1CAAD9;"> joegaffey </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9b5c692ee3144c849f347e21e86d62c9" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
   <div class="sketchfab-embed-wrapper"> <iframe title="Modular Arcade Machine (complete)" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/1297dec87bf1428a98748757b8e8df93/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/modular-arcade-machine-complete-1297dec87bf1428a98748757b8e8df93?utm_medium=embed&utm_campaign=share-popup&utm_content=1297dec87bf1428a98748757b8e8df93" target="_blank" style="font-weight: bold; color: #1CAAD9;"> Modular Arcade Machine (complete) </a> by <a href="https://sketchfab.com/joe.gaffey?utm_medium=embed&utm_campaign=share-popup&utm_content=1297dec87bf1428a98748757b8e8df93" target="_blank" style="font-weight: bold; color: #1CAAD9;"> joegaffey </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=1297dec87bf1428a98748757b8e8df93" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
   <div class="sketchfab-embed-wrapper"> <iframe title="Fireplace" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/foN6Q4NWXAlfXHGTgoKaHC81qK6/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/fireplace-foN6Q4NWXAlfXHGTgoKaHC81qK6?utm_medium=embed&utm_campaign=share-popup&utm_content=foN6Q4NWXAlfXHGTgoKaHC81qK6" target="_blank" style="font-weight: bold; color: #1CAAD9;"> Fireplace </a> by <a href="https://sketchfab.com/joe.gaffey?utm_medium=embed&utm_campaign=share-popup&utm_content=foN6Q4NWXAlfXHGTgoKaHC81qK6" target="_blank" style="font-weight: bold; color: #1CAAD9;"> joegaffey </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=foN6Q4NWXAlfXHGTgoKaHC81qK6" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
   <div class="sketchfab-embed-wrapper"> <iframe title="Gate 4" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/alRvYCokrYdf2rLPskdfncSMIt/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/gate-4-alRvYCokrYdf2rLPskdfncSMIt?utm_medium=embed&utm_campaign=share-popup&utm_content=alRvYCokrYdf2rLPskdfncSMIt" target="_blank" style="font-weight: bold; color: #1CAAD9;"> Gate 4 </a> by <a href="https://sketchfab.com/joe.gaffey?utm_medium=embed&utm_campaign=share-popup&utm_content=alRvYCokrYdf2rLPskdfncSMIt" target="_blank" style="font-weight: bold; color: #1CAAD9;"> joegaffey </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=alRvYCokrYdf2rLPskdfncSMIt" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
   <div class="sketchfab-embed-wrapper"> <iframe title="Living Room Set" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/cpgKPFYPd3ahvPUDt0ArTiKehe3/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/living-room-set-cpgKPFYPd3ahvPUDt0ArTiKehe3?utm_medium=embed&utm_campaign=share-popup&utm_content=cpgKPFYPd3ahvPUDt0ArTiKehe3" target="_blank" style="font-weight: bold; color: #1CAAD9;"> Living Room Set </a> by <a href="https://sketchfab.com/joe.gaffey?utm_medium=embed&utm_campaign=share-popup&utm_content=cpgKPFYPd3ahvPUDt0ArTiKehe3" target="_blank" style="font-weight: bold; color: #1CAAD9;"> joegaffey </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=cpgKPFYPd3ahvPUDt0ArTiKehe3" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>`;
  sfLoaded = true;
}

function updateTwitterCard() {
  twttr.widgets.load(
    document.querySelector('.twitter-card')
  );
}

CSS.paintWorklet.addModule('./particles.js')