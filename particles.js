class Particles {
  
  static get inputProperties() {
    return [ '--paint-tick', '--partOpacity', '--partCount', '--partMinSize', '--partMaxSize'];
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
    // Flicker in animation - reverting to static for now
    // part.speed =  0.1 + Math.random();
    // part.direction = Math.random() * 90;
  }

  paint(ctx, size, props) {
    // if(!this.particlesArray)
    this.setupParticles(size, props);
    ctx.globalAlpha = parseFloat(props.get('--partOpacity'));
    this.particlesArray.forEach(part => {
      // if(part.x < 0 || part.x > size.width || 
      //    part.y < 0 || part.y > size.height)
      //   this.setupParticle(part, size);
      // part.x += part.speed * Math.sin(part.direction);
      // part.y += part.speed * Math.cos(part.direction);
      ctx.fillStyle = part.color;
      ctx.beginPath();
      ctx.arc(part.x, part.y, part.size, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    });
  }    
}
  
registerPaint('particles', Particles);