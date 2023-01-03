let darkTheme = false;
if(document.body.classList.contains('dark'))
  darkTheme = true;

const RSS_URL = `./feed.rss`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
          <h3>
            ${el.querySelector("title").innerHTML}
          </h3>
          <p>
            ${el.querySelector("description").innerHTML}
            <a href="${el.querySelector("link").innerHTML}">More..</a>
          </p>          
      `;
    });
    document.querySelector('.posts').insertAdjacentHTML("beforeend", html);
  });

CSS.paintWorklet.addModule('./particles.js');


// getRSS(MASTODON_RSS_URL);

// function switchCard(selector) {
//   document.querySelector('.currentCard').classList.add('hidden');
//   document.querySelector('.currentCard').classList.remove('currentCard');
//   document.querySelector(selector).classList.add('currentCard');
//   document.querySelector(selector).classList.remove('hidden');
//   // Lazy load cards with iframes for perf and to avoid layout issues
//   if(selector === '.itch-card')
//     updateItchCard();
//   else if(selector === '.twitter-card')
//     updateTwitterCard();
//   else if(selector === '.sketchfab-card')
//     updateSketchfabCard();
// }

// const MASTODON_RSS_URL = 'https://joegaffey-web.glitch.me/feed.rss';

// function getDescription(html) {
//   let doc = new DOMParser().parseFromString(html, "text/html");
//   doc = new DOMParser().parseFromString(doc.documentElement.textContent, "text/html");
//   const pEl = doc.querySelector("p");
//   const linkEl = pEl.querySelector("a[rel~=noopener]");
//   if(linkEl)
//     linkEl.innerText = 'More...'        
//   return `<p>${pEl.innerHTML}</p>`;
// }

// function getRSS(RSS_URL) {
//   fetch(RSS_URL) 
//     .then(response => response.text())
//     .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//     .then(data => {
//       const items = data.querySelectorAll("item");
//       let html = `<div class="posts">`;
//       items.forEach(el => {
//         const rssDesc = getDescription(el.querySelector("description").innerHTML);
//         const rssLink = el.querySelector("link").innerHTML;
//         const rssDate = new Date(el.querySelector("pubDate").innerHTML).toLocaleString();

//         html += `<h3><a href=${rssLink}>${rssDate}</a></h3>${rssDesc}`;
//       });
//       html += `</div>`;
//       document.querySelector('.currentCard').insertAdjacentHTML("beforeend", html);
//     });
// }