## Posting Posts Post

### 06 Jan 2023

I wanted the ability to write blog posts in markdown on the web for my static site hosted on GitHub. I also wanted to use the same tools I use to author the site i.e. [GitHub](https://github.com/joegaffey/joegaffey.github.io) and [Glitch](https://glitch.com/~joegaffey-web).

I thought the quickest way to get started was to create a new .md file using the GitHub editor. I am currently typing that file as 'posts.md' 😊 including emojis as appropriate of course.

This seems to be working nicely. I can edit the file and preview the generated output in the GitHub editor. Helpfully, GitHub automatically created the directory structure for the post files when I entered the file name with the path -
posts/2023/1/6/posts.md. This will also set the URL path to the post for retrieval later by the browser and for the displayed path in the address bar.

Next I want to see the post rendered in place on my site. For this I'm going to hop over to Glitch - back soon! (Clicks "Commit to Master")

Ok, back now. Having played around with some options in Glitch, the most simple option to start with seems to be a new HTML page 'post.html' to host the post content. This page would fetch the markdown file using client side JavaScript and render it using [Marked](https://marked.js.org/).

The 'post' HTML page uses client side (hash) routing to find which .md file to load, for example, this file is represented as 'posts#2023/1/6/posts' in the URL as you should be able to see in the browser address bar if you're reading this post at joegaffey.com.

The final step is to add the post to my RSS feed that is a simple static XML file that I can also edit in Glitch or GitHub - brb.

Ok, feed updated and the solution and first post is complete. Before I sign off I would only offer some defence of the approach I've implemented here and advice for others that may consider doing something similar.

Firstly, my main driver is to have something simple and lightweight that I am in significant control over.
My secondary driver is the ability to post an update using most any web browser while staying with GitHub static hosting only.

Of course nothing is free in this world and the major trade off I have accepted is the use of client side rendering using JavaScript.
This means the site requires JavaScript to be available and enabled and is not as lightweight and could ultimately be if it was prerendered. 

I could have researched SSG based static hosting options that output prerendered HTML but that would likely require additional services and certainly require a build step. Also I prefer to spend time in functional site code vs build configuration.  

Another limitation of my approach is that the functionality implemented here is very basic and and additional capabilities such as analytics or comments will require additional integration that may be provided out of the box with the common off the shelf solutions.
If you would like to reprimand me on the approach taken, feel free to reach out via one of the socials above.

I think that about covers it. Now I just have to figure out something to write about...