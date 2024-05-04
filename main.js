let darkTheme = false;
if(document.body.classList.contains('dark'))
  darkTheme = true;

const MASTODON_FEED_URL = 'https://mastodon.social/users/joegaffey.rss';
const LOCAL_FEED_URL  = `./feed.rss`;
const FEED_ERROR_TXT  = `Feed unavailble, check back later`;
const POST_ERROR_TXT  = `No post today`;

const contentEl = document.querySelector('.content');

function showRSS(RSS_URL) {
  contentEl.classList.add('noShiftHack');  
  fetch(RSS_URL)
    .then((response) => {
      if (response.ok) { return response.text(); }
      else throw new Error('Something went wrong'); })
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      const items = data.querySelectorAll("item");
      let html = ``;
      items.forEach((el, index) => {
        const titleEl = el.querySelector("title");
        const categoryEl = el.querySelector("category");
        const linkEl = el.querySelector("link");

        const pubDate = new Date(el.querySelector("pubDate").innerHTML).toDateString();
        const title = titleEl ? titleEl.innerHTML : pubDate;
        const link = linkEl.innerHTML;
        const category = categoryEl ? categoryEl.innerHTML : 'Link';
        const description = getDescription(el.querySelector("description").innerHTML);

        html += `
          <article style="--index:${index}">
            <h3>${title} [<a href="${link}">${category}</a>]</h3>
            ${(title == pubDate) ? `` : `<h4>${pubDate}</h4>`}
            <p>${description}</p>          
          </article>
        `;
      });
      contentEl.classList.add('fadeout');
      contentEl.innerHTML = html;
      contentEl.classList.remove('noShiftHack');
    })
    .catch(e => { contentEl.innerHTML = `<h3>${FEED_ERROR_TXT}</h3>`; });
}

function getDescription(textIn) {
  let doc = new DOMParser().parseFromString(textIn, "text/html");
  doc = new DOMParser().parseFromString(doc.documentElement.textContent, "text/html");
  const aElList = doc.querySelectorAll("a");
  
  aElList.forEach(el => { // Shorten URLs
    if(el.innerText.startsWith('https://'))
      el.innerText = el.href.substring(8, 26) + '...';
  });
  
  const pEl = doc.querySelector("p");
  return pEl ? `<p>${pEl.innerHTML}</p>` : textIn;
}

showRSS(MASTODON_FEED_URL);

const stuffEl = document.querySelector('.stuffSelect');
stuffEl.onclick = () => {
  contentEl.innerHTML = '<h3>Loading...</h3>';
  document.querySelector('.tabSelected').classList.remove('tabSelected');
  stuffEl.classList.add('tabSelected');
  showRSS(LOCAL_FEED_URL);
};

const socialEl = document.querySelector('.socialSelect');
socialEl.onclick = () => {
  contentEl.innerHTML = '<h3>Loading...</h3>';
  document.querySelector('.tabSelected').classList.remove('tabSelected');
  socialEl.classList.add('tabSelected');
  showRSS(MASTODON_FEED_URL);
};

const gamesEl = document.querySelector('.gamesSelect');
gamesEl.onclick = () => {
  contentEl.innerHTML = '<h3>Loading...</h3>';
  document.querySelector('.tabSelected').classList.remove('tabSelected');
  gamesEl.classList.add('tabSelected');
  loadMD('games.md', contentEl);
};

const appsEl = document.querySelector('.appsSelect');
appsEl.onclick = () => {
  contentEl.innerHTML = '<h3>Loading...</h3>';
  document.querySelector('.tabSelected').classList.remove('tabSelected');
  appsEl.classList.add('tabSelected');
  loadMD('apps.md', contentEl);
};

function loadMD(path, el) {
  fetch(path)
    .then((response) => {
      if (response.ok) { return response.text(); }
      else throw new Error('Something went wrong'); })
    .then(str => {
      el.innerHTML = marked.parse(str);
    });
}

  
CSS.paintWorklet.addModule('./particles.js');
