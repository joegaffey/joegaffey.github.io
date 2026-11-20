let darkTheme = false;
if(document.body.classList.contains('dark'))
  darkTheme = true;

const MASTODON_FEED_URL = 'https://mastodon.social/users/joegaffey.rss';
const LOCAL_FEED_URL  = `./feed.rss`;
const FEED_ERROR_TXT  = `Mastodon feed is unavailble, please check back later.`;
const POST_ERROR_TXT  = `No post today 😞`;

const contentEl = document.querySelector('.content');

function showRSS(RSS_URL, onComplete) {
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
        const media = getMedia(el);

        html += `
          <article style="--index:${index}">
            <h3>${title} [<a href="${link}">${category}</a>]</h3>
            ${(title == pubDate) ? `` : `<h4>${pubDate}</h4>`}
            <p>${description}</p>
            ${media}
          </article>
        `;
      });
      contentEl.classList.add('fadeout');
      contentEl.innerHTML = html;
      if(onComplete)
        onComplete();
    })
    .catch(e => { 
      contentEl.innerHTML = `<h3>${FEED_ERROR_TXT}</h3>`; 
      if(onComplete) 
        onComplete();
    });
}

function getMedia(el) {
  const MEDIA_NS = 'http://search.yahoo.com/mrss/';
  const mediaEl = el.getElementsByTagNameNS(MEDIA_NS, 'content')[0]
    || el.querySelector('content');

  if(mediaEl) {
    const url = mediaEl.getAttribute('url');
    const type = mediaEl.getAttribute('type') || '';
    const thumbEl = mediaEl.getElementsByTagNameNS(MEDIA_NS, 'thumbnail')[0];
    const poster = thumbEl ? thumbEl.getAttribute('url') : '';

    if(url && (type.startsWith('video/') || mediaEl.getAttribute('medium') === 'video'))
      return `<video class="feedMedia" controls playsinline preload="metadata"${poster ? ` poster="${poster}"` : ''}>
        <source src="${url}" type="${type}">
        <a href="${url}">View video</a>
      </video>`;

    if(url && (!type || type.startsWith('image/')))
      return `<img class="feedMedia" src="${url}" alt="" loading="lazy">`;
  }

  return getYouTubeEmbed(el);
}

function getYouTubeEmbed(el) {
  const YOUTUBE_RE = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([\w-]{11})/;
  let doc = new DOMParser().parseFromString(el.querySelector("description").innerHTML, "text/html");
  doc = new DOMParser().parseFromString(doc.documentElement.textContent, "text/html");

  const linkEl = [...doc.querySelectorAll("a")].find(a => YOUTUBE_RE.test(a.href));
  const match = linkEl && linkEl.href.match(YOUTUBE_RE);
  if(!match) return '';

  return `<iframe class="videoEmbed" src="https://www.youtube-nocookie.com/embed/${match[1]}"
    title="YouTube video" loading="lazy" allowfullscreen
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>`;
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

const TABS = {
  social: (onComplete) => showRSS(MASTODON_FEED_URL, onComplete),
  posts:  (onComplete) => showRSS(LOCAL_FEED_URL, onComplete),
  apps:   (onComplete) => loadMD('apps.md', contentEl, onComplete),
  games:  (onComplete) => loadMD('games.md', contentEl, onComplete),
};

function selectTab(name) {
  const load = TABS[name] || TABS.social;
  const selectEl = document.querySelector('.' + (name in TABS ? name : 'social') + 'Select');

  document.querySelector('.tabSelected')?.classList.remove('tabSelected');
  selectEl?.classList.add('tabSelected');
  contentEl.innerHTML = '<h3>Loading...</h3>';
  contentEl.classList.add('noShiftHack');
  load(() => contentEl.classList.remove('noShiftHack'));
}

selectTab(location.hash.slice(1));
window.addEventListener('hashchange', () => selectTab(location.hash.slice(1)));

function loadMD(path, el, onComplete) {
  fetch(path)
    .then((response) => {
      if (response.ok) { return response.text(); }
      else { 
        if(onComplete)
          onComplete();
        throw new Error('Something went wrong');
      }
    })
    .then(str => {
      el.innerHTML = marked.parse(str);
      if(onComplete)
        onComplete();
    });
}
  
CSS.paintWorklet.addModule('./particles.js');