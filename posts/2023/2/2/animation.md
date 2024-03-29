## Smooth surfing with CSS Animation

### 02 Feb 2023

The abrupt loading and content transitions on this site were starting to grate on me so I decided to do something about it.

First thing was to add define some basic fade-in/fade-out animation [keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes) in the sites [_main.css_](https://github.com/joegaffey/joegaffey.github.io/blob/2359c817a9c4dd5663de50acbaa8558b62471ce0/main.css).

    @keyframes fadein {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }

    @keyframes fadeout {
      0% { opacity: 0; }
      100% {opacity: 1; }
    }
    
Then I applied the animation to the _body_ element for a smoother site load.

    body {
      ...
      animation: fadein 0.4s linear forwards;
    }
    
Next I wanted to make the RSS feed items animate in smoothly but with a staggered effect.

To do this I first needed to modify the _article_ markup generated by my RSS [renderer](https://gist.github.com/joegaffey/46a44c45399afb5f89efef9d1bd5f247) to include a [CSS variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to indicate its index in the feed as CSS currently has no native way to query this dynamically.

    <article style="--index:${index}">
    
Now back in [_main.css_](https://github.com/joegaffey/joegaffey.github.io/blob/7633be6ca0c9df93580e83c2c50319c50d08b3d9/main.css) I added the _fadein_ animation to the _arcticle_ element with an [animation-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay) [calculated](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) based on the _index_ variable.

    article {
      opacity: 0;
      animation: fadein 0.2s linear forwards;
      animation-delay: calc(var(--index) * 0.1s);
    }
    
That was as much as I had intially intended do with the site but once I had addressed these few issues, much like house decorating, the more things I noticed that needed attention...

First of these was the feed selection indicator, the underline that informs the reader which feed is selected (i.e. Stuff vs Social).

To make this transition a little less harsh I also added a fade in/out animation here too. 
This time I used a [CSS transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) on the element's [text-decoration](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) property to transition the underline color from transparent on hover or when the _tabSelected_ class is present.

    .selectTab {
      padding-right: 12px;
      text-decoration: underline transparent;
      transition: text-decoration-color 0.3s;
    }

    .selectTab:hover {
      text-decoration: underline;
    }

    .tabSelected {
      text-decoration: underline;
    }

Finally I wanted to match the grow/shrink effect on my social/link icons with the transition smoothing animations from the rest of the page.

To do this I edited the dedicated icons CSS file [_icons.css_](https://github.com/joegaffey/joegaffey.github.io/blob/7633be6ca0c9df93580e83c2c50319c50d08b3d9/icons.css).

The _.icon_ class already had the _.icon:hover_ pseudo class defined with a scale transform so all I did was add a suitable transition to the _.fa_ class.

    .icon {
      ...
      transition: all .05s ease-in-out; 
    }

    .icon:hover {
      transform: scale(1.25);
    }

That's all the animation based improvements I thought to add so far. 
When combined I think they add a lot to the overall usability and friendliness of the site.

I had initially thought to use some fly-in animations for the post article elements but I think the fade-in more subtle and less intrusive.
In general I would say less is more when it comes to animation so good to keep it low key.

Hopefully someone will find something here useful or interesting at least. 
Let me know what you think via the social links above. Thanks for reading!
