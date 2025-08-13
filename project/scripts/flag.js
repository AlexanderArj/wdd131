function mostrarBandera() {
    
    const container = document.querySelector('.flag-container');
    if (!container) return;

    const page = window.location.pathname.split('/').pop().split('.').shift();
    
    const flags = {
        estonia: 'estonia.jpg',
        colombia: 'colombia.jpg',
        finland: 'finland.jpg',
        amsterdam: 'netherlands.jpg',
        brazil: 'brazil.jpg'
    };

    const flagImage = flags[page];

    const img = document.createElement('img');
    img.src = `images/${flagImage}`;
    img.alt = `${page} flag`;
    img.loading = 'lazy';

    img.style.width = '100px';  
    img.style.height = 'auto';  
    
    
    container.appendChild(img);


  }
  
  mostrarBandera();