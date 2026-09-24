import './style.css'

const menuSections = [
  {
    title: 'ENTRADAS',
    items: [
      ['Tamales', '$10.000'],
      ['Papa a la huancaína', '$10.000'],
      ['Fritas', '$10.000'],
      ['Papa rellena', '$10.000'],
      ['Choro chalaca', '$20.000'],
      ['Ensalada de atún', '$18.000'],
      ['Porción de yucas fritas', '$10.000'],
      ['Causa rellena', '$12.000 / $20.000'],
      ['Ensaladas mixtas', '$10.000'],
      ['Ensalada rusa', '$12.000'],
    ],
  },
  {
    title: 'SOPAS',
    items: [
      ['Caldo de gallina', '$15.000'],
      ['Caldo de pollo', '$15.000'],
      ['Sustancia de pollo', '$15.000'],
      ['Sustancia de carne', '$15.000'],
      ['Patasca (sopa mote)', '$15.000'],
      ['Chilcano (sopa de pez)', '$15.000'],
      ['Minutas', '$15.000'],
      ['Shambar', '$15.000'],
    ],
  },
  {
    title: 'PLATOS CRIOLLOS',
    items: [
      ['Mostrito a la brasa', '$15.000'],
      ['Mostrito broaster', '$18.000'],
      ['Mostrito broaster entero', '$40.000'],
      ['Salchipapas', 'Consultar'],
      ['Salchipollo', 'Consultar'],
      ['Broaster', 'Consultar'],
      ['Arroz a la cubana', 'Consultar'],
      ['Lomo saltado de carne', '$18.000'],
      ['Lomo saltado de pollo', '$15.000'],
      ['Lomo saltado mixto', '$18.000'],
      ['Tallarín saltado de pollo', 'Consultar'],
      ['Tallarín saltado de carne', 'Consultar'],
      ['Tallarín saltado mixto', 'Consultar'],
      ['Arroz con pollo y huancaína', 'Consultar'],
      ['Tallarín verde con pollo frito', 'Consultar'],
      ['Tallarín verde con bistec', 'Consultar'],
      ['Pollo sillao', 'Consultar'],
      ['Escabeche de pollo', 'Consultar'],
      ['Ají de gallina', 'Consultar'],
      ['Alitas broaster', 'Consultar'],
      ['Tallarines con tuco de pollo', 'Consultar'],
      ['Tallarines con tuco de carne', 'Consultar'],
      ['Seco de pollo', 'Consultar'],
      ['Seco de carne', 'Consultar'],
      ['Tacu-tacu con bistec', 'Consultar'],
      ['Seco de cordero', 'Consultar'],
      ['Pachamanka', 'Consultar'],
      ['Arroz con pato', 'Consultar'],
      ['Carapulcra', 'Consultar'],
      ['Bistec a lo pobre', 'Consultar'],
      ['Pique a lo macho', 'Consultar'],
      ['Chicharrón de pollo', 'Consultar'],
      ['Chicharrón de cerdo', 'Consultar'],
      ['Milanesa de carne', 'Consultar'],
      ['Milanesa de pollo', 'Consultar'],
      ['Milanesa a la napolitana', 'Consultar'],
      ['Milanesa a caballo', 'Consultar'],
    ],
  },
  {
    title: 'CHIFA',
    items: [
      ['Chaufa especial de pollo', 'Consultar'],
      ['Chaufa especial de carne', 'Consultar'],
      ['Chaufa especial de chancho', 'Consultar'],
      ['Arroz chaufa de pollo', 'Consultar'],
      ['Arroz chaufa de carne', '$15.000'],
      ['Arroz chaufa mixto', '$15.000'],
      ['Arroz chaufa de cerdo', '$15.000'],
      ['Tallarín saltado Chifa de pollo', 'Consultar'],
      ['Tallarín saltado Chifa mixto', 'Consultar'],
      ['Tallarín saltado de cerdo', 'Consultar'],
      ['Aeropuerto de pollo o carne', '$18.000'],
      ['Aeropuerto mixto', 'Consultar'],
      ['Combinado de pollo o carne', 'Consultar'],
      ['Combinado mixto', '$18.000'],
      ['Sopa Wantán', 'Consultar'],
      ['Wantán frito, porción', 'Consultar'],
      ['Chijaukay', 'Consultar'],
    ],
  },
  {
    title: 'COMBINADO 3 COLORES',
    items: [
      ['Combinado 3 colores', '$20.000'],
    ],
    description: 'Ceviche + tallarín rojo + huancaína',
  },
  {
    title: 'POLLO A LA BRASA',
    items: [
      ['Pollo entero + fritas + ensalada + cremas', '$35.000'],
      ['Pollo + fritas + ensalada + gaseosa', 'Consultar'],
      ['1/2 pollo + fritas + ensalada', 'Consultar'],
    ],
  },
  {
    title: 'ANTICUCHOS / PARRILLA',
    items: [
      ['Anticucho', 'Consultar'],
      ['Pancita', 'Consultar'],
      ['Rachi', 'Consultar'],
      ['Mollejitas', 'Consultar'],
      ['Anticucho especial, bife con fritas', 'Consultar'],
      ['Parrillada', 'Consultar'],
    ],
  },
  {
    title: 'MARISCOS',
    items: [
      ['Arroz con mariscos', '$25.000'],
    ],
  },
]

const renderSection = (section: typeof menuSections[number]) => `
  <section class="menu-section">
    <div class="section-title">
      <span></span>
      <h2>${section.title}</h2>
      <span></span>
    </div>
    ${section.description ? `<p class="section-description">${section.description}</p>` : ''}
    <div class="menu-list">
      ${section.items.map(([name, price]) => `
        <div class="menu-item">
          <span class="dish-name">${name}</span>
          <span class="dish-price">${price}</span>
        </div>
      `).join('')}
    </div>
  </section>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="hero">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p class="eyebrow">RESTAURANTE PERUANO</p>
      <h1>LA PERLA</h1>
      <p class="tagline">Sabores auténticos de la cocina peruana</p>
    </div>
  </header>

  <main>
    <section class="promotions">
      <div class="section-title light">
        <span></span>
        <h2>PROMOCIONES</h2>
        <span></span>
      </div>

      <div class="promo-grid">
        <article class="promo-card">
          <p class="promo-label">PROMOCIÓN</p>
          <h3>2 PLATOS A ELECCIÓN</h3>
          <strong>$25.000</strong>
          <p>Consultar qué platos entran en la promoción.</p>
        </article>

        <article class="promo-card featured">
          <p class="promo-label">PROMOCIÓN</p>
          <h3>2 PLATOS DE MARISCOS</h3>
          <strong>$50.000</strong>
        </article>
      </div>
    </section>

    <div class="menu-container">
      ${menuSections.map(renderSection).join('')}
    </div>
  </main>

  <footer class="footer">
    <div class="footer-inner">
      <h2>LA PERLA</h2>
      <p class="footer-tagline">Sabores auténticos de la cocina peruana</p>

      <div class="contact-actions">
        <a class="contact-button whatsapp" href="https://wa.me/5491163086444" target="_blank" rel="noopener">
          WhatsApp · 11 6308-6444
        </a>

        <a class="contact-button whatsapp" href="https://wa.me/5491168690581" target="_blank" rel="noopener">
          WhatsApp · 11 6869-0581
        </a>

        <a class="contact-button maps" href="https://www.google.com/maps/search/?api=1&query=Av.+Saenz+575,+Buenos+Aires" target="_blank" rel="noopener">
          Cómo llegar · Av. Sáenz 575
        </a>
      </div>

      <div class="opening-hours">
        <span>HORARIO</span>
        <strong>Todos los días · 09:00 a 00:00</strong>
      </div>

      <p class="copyright">© ${new Date().getFullYear()} La Perla</p>
    </div>
  </footer>
`
