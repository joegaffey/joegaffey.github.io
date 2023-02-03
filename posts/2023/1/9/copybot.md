## ChatGPT Copybot

### 09 Jan 2023

I wasn't fully satisfied with the readability of my previous post so I asked (you guessed it) [ChatGPT](https://chat.openai.com/chat) to take a crack at improving it.

I typed:

*"Rewite the following blog post with improved grammar and readability."*

...and included the content from the original post [here](https://joegaffey.com/posts/#2023/1/6/posts) as ChatGPT can't make web requests.

ChatGPT promptly responded with the following:

> *"I wanted to be able to write blog posts in markdown on the web for my static site hosted on GitHub, using the same tools I use to author the site. I decided to create a new '.md' file using the GitHub editor, which is working well so far. I can edit the file and preview the generated output in the GitHub editor. When I entered the file name with the path, GitHub automatically created the directory structure for the post files. This also set the URL path for the post, which the browser can retrieve later and will be displayed in the address bar.*
> 
> *Next, I want to see the post rendered on my site. To do this, I'm going to use Glitch. After experimenting with some options, the simplest solution seems to be a new HTML page called 'post.html' to host the post content. This page will fetch the markdown file using client-side JavaScript and render it using Marked.*
> 
> *The 'post' HTML page uses client-side routing to find which '.md' file to load. For example, this file is represented as 'posts#2023/1/6/posts' in the URL.*
> 
> *The final step is to add the post to my RSS feed, which is a simple static XML file that I can also edit in Glitch or GitHub.*
> 
> *I chose this approach because I wanted something simple and lightweight that I had significant control over. My secondary goal was to be able to post updates using most any web browser while staying with GitHub static hosting only.*
> 
> *One trade-off I made was using client-side rendering with JavaScript, which means the site requires JavaScript to be available and enabled. This is not as lightweight as it could be if it was pre-rendered. I could have researched SSG-based static hosting options that output pre-rendered HTML, but that would likely require additional services and a build step. I prefer to spend time on functional site code rather than build configuration.*
> 
> *Another limitation of my approach is that the functionality is very basic and any additional capabilities, such as analytics or comments, will require additional integration that may be provided out of the box with off-the-shelf solutions. If you have any feedback or suggestions for improvement, feel free to reach out through social media.*
> 
> *Now, I just need to figure out what to write about..."*

Have to say I prefer the ChatGPT version. Seems a little less fussy and more readable while retaining all the discussion points.

I did expect it to do a lttle more sentence deconstruction which the post still could use I believe. Still I can see this as a useful tool that I might use in the future.

Seems to me this collaborative, iterative approach with a human in the loop is the best and safest way for now to use large language model based AIs such as ChatGPT. 

What do you think?

**UPDATE:** 

It occurred to me that I should have asked ChatGPT to simplify the sentence structure so I tried that.

*"Restructure the sentences to be more consice."*

ChatGPT:

> *"I created a new '.md' file on GitHub to write blog posts for my static site using the same tools I use for authoring. 
Previewing the generated output in the GitHub editor works well, and the directory structure for the post files was automatically created when I entered the file name with the path. 
Next, I will use Glitch to render the post on my site. 
The simplest solution is to use a new HTML page called 'post.html' that will fetch the markdown file using client-side JavaScript and render it with Marked. 
The 'post' HTML page uses client-side routing to determine which '.md' file to load. 
I will then add the post to my RSS feed, which is a simple static XML file that I can edit on Glitch or GitHub. 
My goal was to have a simple and lightweight solution with significant control, and the trade-off was using client-side rendering with JavaScript, which requires JavaScript to be available and enabled. 
Limitations of this approach include basic functionality, and additional capabilities such as analytics or comments would require additional integration."*

This version is far less impressive. While shorter overall it doesn't do much for sentence structure and removes the paragraph structure completely.
It also introduces factual errors and removes salient detail to the point that some sentences (last one in particular) don't really make sense any more.

It appears I had already found the sweet spot for my AI copyeditor in the original post. Perhaps additional optimizations couild be discovered with further interrogation but this would push into questionable returns on time invested for such a short post.

I also just noticed the typo in the first request to ChatGPT. Doesn't seem to have bothered it much.