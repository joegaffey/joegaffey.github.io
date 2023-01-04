let darkTheme = false;
if(document.body.classList.contains('dark'))
  darkTheme = true;

const MASTODON_FEED_URL = 'https://mastodon.social/users/joegaffey.rss';
const LOCAL_FEED_URL  = `./feed.rss`;
const FEED_ERROR_TXT  = `Feed unavailble, check back later`;

const postsEl = document.querySelector('.posts');

function showRSS(RSS_URL) {
  fetch(RSS_URL)
    .then((response) => {
      if (response.ok) { return response.text(); }
      else throw new Error('Something went wrong'); })
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
      const items = data.querySelectorAll("item");
      let html = ``;
      items.forEach(el => {
        const titleEl = el.querySelector("title");
        const categoryEl = el.querySelector("category");
        const linkEl = el.querySelector("link");

        const pubDate = new Date(el.querySelector("pubDate").innerHTML).toDateString();
        const title = titleEl ? titleEl.innerHTML : pubDate;
        const link = linkEl.innerHTML;
        const category = categoryEl ? categoryEl.innerHTML : 'Link';
        const description = getDescription(el.querySelector("description").innerHTML);

        html += `
            <h3>${title} [<a href="${link}">${category}</a>]</h3>
            ${(title == pubDate) ? `` : `<h4>${pubDate}</h4>`}
            <p>${description}</p>          
        `;
      });
      postsEl.innerHTML = html;
    })
    .catch(e => { postsEl.innerHTML = `<h3>${FEED_ERROR_TXT}</h3>`; });
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

const stuffEl = document.querySelector('.stuffSelect');
const socialEl = document.querySelector('.socialSelect');

stuffEl.onclick = () => {
  postsEl.innerHTML = '<h3>Loading...</h3>';
  socialEl.classList.remove('h2Selected');
  stuffEl.classList.add('h2Selected');
  showRSS(LOCAL_FEED_URL);
};

socialEl.onclick = () => {
  postsEl.innerHTML = '<h3>Loading...</h3>';
  stuffEl.classList.remove('h2Selected');
  socialEl.classList.add('h2Selected');
  showRSS(MASTODON_FEED_URL);
};
  
showRSS(LOCAL_FEED_URL);

CSS.paintWorklet.addModule('./particles.js');
