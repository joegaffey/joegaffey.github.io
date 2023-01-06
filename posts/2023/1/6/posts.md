## Posting Posts Post

### 6/1/2023

I wanted the ability to write blog posts on the web in markdown for my static site hosted on GitHub. I also wanted to use the same tools I use to author the site i.e. [GitHub](https://github.com/joegaffey/joegaffey.github.io) and [Glitch](https://glitch.com/~joegaffey-web).

I thought the quickest way to get started was to create a new .md file using the GitHub editor. I am currently typing that file 😊 including emojis as appropriate 👍.

This seems to be working nicely. I can edit the file and preview the generated output in the GitHub editor. Helpfully, GitHub automatically created the directory structure for the post files when I entered the file name with the path (
posts/2023/1/6/posts.md). This will also set the URL path to the post for retrieval later by the browser and for the displayed path in the address bar.

Next I want to see the post rendered in place on my site. For this I'm going to hop over to Glitch - back soon! (Clicks "Commit to Mster") 

Ok, back now. Having played around with some options in Glitch, the most simple one to start with seems to be a new HTML page to host the post. This page would fetch the markdown file using client side JavaScript and render it using [Marked](https://marked.js.org/).
