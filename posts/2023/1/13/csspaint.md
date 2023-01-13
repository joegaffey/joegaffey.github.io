## Painting with CSS

### 13 Jan 2023

I had an idea to brighten up the site a little and took the opportunity to try out the [CSS Paint API](https://www.w3.org/TR/css-paint-api-1/).

This nifty standard allows the creation of a paint worklet in JavaScript that can be applied via CSS.
The actual drawing API uses the HTML5 canvas that is already familiar to many web developers.

To use it you can define a class with a _paint_ render method and register it as a paint worklet via the _registerPaint_ global function.
Check out [_particles.js_](https://github.com/joegaffey/joegaffey.github.io/blob/master/particles.js) to see what my worklet looks like:

    class Particles {

      static get inputProperties() {
        return [ '--partOpacity', '--partCount', '--partMinSize', '--partMaxSize'];
      }

      setupParticles(containerSize, props) {
        this.particlesArray = [];
        for(let i = 0; i < parseInt(props.get('--partCount')); i++) {
          const particle = {};
          this.setupParticle(particle,
                             containerSize,
                             parseInt(props.get('--partMinSize')),
                             parseInt(props.get('--partMaxSize')));
          this.particlesArray.push(particle);
        }
      }

      setupParticle(part, containerSize, min, max) {
        part.x = Math.random() * containerSize.width;
        part.y = Math.random() * containerSize.height;
        part.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        part.size = min + Math.random() * max;
      }

      paint(ctx, size, props) {
        this.setupParticles(size, props);
        ctx.globalAlpha = parseFloat(props.get('--partOpacity'));
        this.particlesArray.forEach(part => {
          ctx.fillStyle = part.color;
          ctx.beginPath();
          ctx.arc(part.x, part.y, part.size, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();
        });
      }
    }

    registerPaint('particles', Particles);

Hold on a sec there, that looks like a bunch of JavaScript, where's my CSS at? Bait and switch much.

Yes, its true you need to write a bit of JavaScript. Think of this like defining the paintbrush that you will then apply using CSS.

As for the JS code then, you can see its a basic particle renderer that draws the semi-transparent circles in the background of tis page - HT to Paul Irish for the now classic [16777215](https://www.paulirish.com/2009/random-hex-color-code-snippets/) random Hex color hack.

Note the _inputProperties_ method that defines the CSS variables that are used to control the paint worklet from CSS.

Also note that these properties are [_CSSUnparsedValue_](https://developer.mozilla.org/en-US/docs/Web/API/CSSUnparsedValue) type so best to explicitly parse to the correct number format.

The particle variables are then defined in [_main.css_](https://github.com/joegaffey/joegaffey.github.io/blob/master/main.css) (finally some actual CSS):

    .dark {
      --bgColor: #050505;
      --partOpacity: 0.08;
      --partCount: 150;
      --partMinSize: 5;
      --partMaxSize: 20;
      --color: #bababa;
      --link-color: DarkSeaGreen;
      --card-color: rgba(10, 10, 10, 0.7);
    }

Finally the paint worklet is applied to the container element for the particles.

    .particles-container {
      z-index: -1000;
      pointer-events: none;
      padding: 0;
      border: 0;
      margin: 0;
      position: fixed;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: paint(particles);
    }

We also need to explicitly load the JavaScript module that contains the worklet. This is done in the main site JavaScript file [_main.js_](https://github.com/joegaffey/joegaffey.github.io/blob/master/main.js):

    CSS.paintWorklet.addModule('./particles.js');

This is everything that is needed to get CSS painting in a fully compliant browser.
Unfortunately not all browsers support the standard (looking at you [Safari and Firefox](https://caniuse.com/mdn-api_css_paintworklet)).
However, given that the standard reuses the HTML5 canvas API I guess it's a pretty easy API to [Polyfill](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill).

I included Google's Polyfill [script](https://github.com/GoogleChromeLabs/css-paint-polyfill) in the site's [_index.html_](https://github.com/joegaffey/joegaffey.github.io/blob/master/index.html) to use the worklet in non-natively-supporting browsers:

    <script src="https://unpkg.com/css-paint-polyfill" defer></script>

If you follow the links above to the source code on GitHub you'll see some additional code that's been commented out.
This is placeholder code for animation to make the particles randomly drift slowly across the screen.

The code works but the animation is quite janky as if it needs double buffering.
I'm not sure if I am missing something or if this is just a limitation of the API, perhaps intended to avoid performance issues.
Let me know if you have any further knowledge or thoughts on this.

This limitation aside I was quite happy with the result and the customization possibilities via CSS.
It seems somehow less clunky than including an explicit background HTML canvas or SVG element.

It should also be more lightweight than a similar resolution raster image with the additional benefits of visual randomness and responsive design friendliness.

Thanks for reading to here! Hope this post has provided some useful info or even inspiration for your own CSS Paint Worklet.