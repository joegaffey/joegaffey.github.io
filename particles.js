class Particles {
  
  static get inputProperties() {
    return [ '--paint-tick', '--partOpacity'];
  }

  setupParticles(size) {
    this.particlesArray = [];
    for(let i = 0; i < 150; i++) {
      const part = {};
      this.setupParticle(part, size);
      this.particlesArray.push(part);
    }
  }

  setupParticle(part, size) {
    part.x = Math.random() * size.width;
    part.y = Math.random() * size.height;
    part.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    part.size = 5 + Math.random() * 20;
    // Flicker in animation - reverting to static for now
    // part.speed =  0.1 + Math.random();
    // part.direction = Math.random() * 90;
  }

  paint(ctx, size, properties) {
    // if(!this.particlesArray)
    this.setupParticles(size);
    ctx.globalAlpha = properties.get('--partOpacity');
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
  
registerPaint('particles', Particles)