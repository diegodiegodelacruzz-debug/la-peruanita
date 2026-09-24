import './style.css'

type Dish = {
  name: string
  price?: string
}

type Section = {
  title: string
  dishes: Dish[]
}

const featuredDishes = [
  ['ceviche.png', 'Ceviche', 'Especialidad de la casa'],
  ['leche-de-tigre.png', 'Leche de tigre', 'Sabor peruano'],
  ['duo-marino.png', 'Dúo marino', 'Mariscos y pescados'],
  ['arroz-con-mariscos.png', 'Arroz con mariscos', '$25.000'],
  ['chicharron-de-pescado-mixto.png', 'Chicharrón de pescado mixto', 'Consultar'],
  ['lomo-saltado.png', 'Lomo saltado', 'Consultar'],
  ['lomo-saltado-a-caballo.png', 'Lomo saltado a caballo', 'Consultar'],
  ['lomo-saltado-con-chaufa.png', 'Lomo saltado con chaufa', 'Consultar'],
  ['arroz-con-cerdo.png', 'Arroz con cerdo', 'Consultar'],
  ['arroz-con-pollo-y-papas-a-la-huacaina.png', 'Arroz con pollo y papa a la huancaína', 'Consultar'],
  ['tallarin-verde-con-pollo-frito.png', 'Tallarín verde con pollo frito', 'Consultar'],
  ['tallarin-verde-con-bistec-y-papas-a-la-huacaina.png', 'Tallarín verde con bistec', 'Consultar'],
  ['tallarin-rojo-con-papas-a-la-huacaina.png', 'Tallarín rojo con papa a la huancaína', 'Consultar'],
  ['aeropuerto.png', 'Aeropuerto', '$18.000'],
  ['arroz-chaufa.png', 'Arroz chaufa de pollo', 'Consultar'],
  ['mostrito.png', 'Mostrito', 'Consultar'],
  ['pollo-a-la-brasa.png', 'Pollo a la brasa', '$35.000'],
  ['pollo-broaster.png', 'Pollo broaster', 'Consultar'],
  ['pollo-broaster-con-papas-y-ensalada.png', 'Pollo broaster con papas y ensalada', 'Consultar'],
  ['bistec-a-lo-pobre.png', 'Bistec a lo pobre', 'Consultar'],
  ['seco-de-carne-con-arroz-y-frijoles.png', 'Seco de carne', 'Consultar'],
  ['caldo-de-mote.png', 'Caldo de mote', '$15.000'],
  ['caldo-de-pollo.png', 'Caldo de pollo', '$15.000'],
  ['combinados-3-colores.png', 'Combinado 3 colores', '$20.000'],
  ['papa-huacaina-papa-rellena-tamales.png', 'Papa a la huancaína, papa rellena y tamales', 'Especialidades'],
]

const menuSections: Section[] = [
  {
    title: 'Entradas',
    dishes: [
      { name: 'Tamales', price: '$10.000' },
      { name: 'Papa a la huancaína', price: '$10.000' },
      { name: 'Fritas', price: '$10.000' },
      { name: 'Papa rellena', price: '$10.000' },
      { name: 'Choro chalaca', price: '$20.000' },
      { name: 'Ensalada de atún', price: '$18.000' },
      { name: 'Porción de yucas fritas', price: '$10.000' },
      { name: 'Causa rellena', price: '$12.000 / $20.000' },
      { name: 'Ensaladas mixtas', price: '$10.000' },
      { name: 'Ensalada rusa', price: '$12.000' },
    ],
  },
  {
    title: 'Sopas',
    dishes: [
      { name: 'Caldo de gallina', price: '$15.000' },
      { name: 'Caldo de pollo', price: '$15.000' },
      { name: 'Caldo de mote', price: '$15.000' },
      { name: 'Caldo de patasca', price: '$15.000' },
      { name: 'Sustancia de pollo', price: '$15.000' },
      { name: 'Sustancia de carne', price: '$15.000' },
      { name: 'Chilcano (sopa de pez)', price: '$15.000' },
      { name: 'Minutas', price: '$15.000' },
      { name: 'Shambar', price: '$15.000' },
    ],
  },
  {
    title: 'Platos criollos',
    dishes: [
      { name: 'Mostrito a la brasa', price: '$15.000' },
      { name: 'Mostrito broaster', price: '$18.000' },
      { name: 'Mostrito broaster entero', price: '$40.000' },
      { name: 'Salchipapas', price: 'Consultar' },
      { name: 'Salchipollo', price: 'Consultar' },
      { name: 'Broaster', price: 'Consultar' },
      { name: 'Arroz a la cubana', price: 'Consultar' },
      { name: 'Arroz con cerdo', price: 'Consultar' },
      { name: 'Lomo saltado de carne', price: '$18.000' },
      { name: 'Lomo saltado de pollo', price: '$15.000' },
      { name: 'Lomo saltado mixto', price: '$18.000' },
      { name: 'Lomo saltado a caballo', price: 'Consultar' },
      { name: 'Lomo saltado con chaufa', price: 'Consultar' },
      { name: 'Tallarín saltado de pollo', price: 'Consultar' },
      { name: 'Tallarín saltado de carne', price: 'Consultar' },
      { name: 'Tallarín saltado mixto', price: 'Consultar' },
      { name: 'Arroz con pollo y papa a la huancaína', price: 'Consultar' },
      { name: 'Tallarín verde con pollo frito', price: 'Consultar' },
      { name: 'Tallarín verde con bistec', price: 'Consultar' },
      { name: 'Tallarín rojo con papa a la huancaína', price: 'Consultar' },
      { name: 'Pollo sillao', price: 'Consultar' },
      { name: 'Escabeche de pollo', price: 'Consultar' },
      { name: 'Ají de gallina', price: 'Consultar' },
      { name: 'Alitas broaster', price: 'Consultar' },
      { name: 'Tallarines con tuco de pollo', price: 'Consultar' },
      { name: 'Tallarines con tuco de carne', price: 'Consultar' },
      { name: 'Seco de pollo', price: 'Consultar' },
      { name: 'Seco de carne', price: 'Consultar' },
      { name: 'Tacu-tacu con bistec', price: 'Consultar' },
      { name: 'Seco de cordero', price: 'Consultar' },
      { name: 'Pachamanka', price: 'Consultar' },
      { name: 'Arroz con pato', price: 'Consultar' },
      { name: 'Carapulcra', price: 'Consultar' },
      { name: 'Bistec a lo pobre', price: 'Consultar' },
      { name: 'Pique a lo macho', price: 'Consultar' },
      { name: 'Chicharrón de pollo', price: 'Consultar' },
      { name: 'Chicharrón de cerdo', price: 'Consultar' },
      { name: 'Milanesa de carne', price: 'Consultar' },
      { name: 'Milanesa de pollo', price: 'Consultar' },
      { name: 'Milanesa a la napolitana', price: 'Consultar' },
      { name: 'Milanesa a caballo', price: 'Consultar' },
    ],
  },
  {
    title: 'Chifa',
    dishes: [
      { name: 'Chaufa especial de pollo', price: 'Consultar' },
      { name: 'Chaufa especial de carne', price: 'Consultar' },
      { name: 'Chaufa especial de chancho', price: 'Consultar' },
      { name: 'Arroz chaufa de pollo', price: 'Consultar' },
      { name: 'Arroz chaufa de carne', price: '$15.000' },
      { name: 'Arroz chaufa mixto', price: '$15.000' },
      { name: 'Arroz chaufa de cerdo', price: '$15.000' },
      { name: 'Tallarín saltado Chifa de pollo', price: 'Consultar' },
      { name: 'Tallarín saltado Chifa mixto', price: 'Consultar' },
      { name: 'Tallarín saltado de cerdo', price: 'Consultar' },
      { name: 'Aeropuerto de pollo o carne', price: '$18.000' },
      { name: 'Aeropuerto mixto', price: 'Consultar' },
      { name: 'Combinado de pollo o carne', price: 'Consultar' },
      { name: 'Combinado mixto', price: '$18.000' },
      { name: 'Sopa Wantán', price: 'Consultar' },
      { name: 'Wantán frito, porción', price: 'Consultar' },
      { name: 'Chijaukay', price: 'Consultar' },
    ],
  },
  {
    title: 'Combinado 3 colores',
    dishes: [
      { name: 'Combinado 3 colores · Ceviche + tallarín rojo + huancaína', price: '$20.000' },
    ],
  },
  {
    title: 'Pollo a la brasa',
    dishes: [
      { name: 'Pollo entero + fritas + ensalada + cremas', price: '$35.000' },
      { name: 'Pollo + fritas + ensalada + gaseosa', price: 'Consultar' },
      { name: '1/2 pollo + fritas + ensalada', price: 'Consultar' },
    ],
  },
  {
    title: 'Anticuchos & parrilla',
    dishes: [
      { name: 'Anticucho', price: 'Consultar' },
      { name: 'Pancita', price: 'Consultar' },
      { name: 'Rachi', price: 'Consultar' },
      { name: 'Mollejitas', price: 'Consultar' },
      { name: 'Anticucho especial, bife con fritas', price: 'Consultar' },
      { name: 'Parrillada', price: 'Consultar' },
    ],
  },
  {
    title: 'Mariscos & pescados',
    dishes: [
      { name: 'Ceviche', price: 'Consultar' },
      { name: 'Leche de tigre', price: 'Consultar' },
      { name: 'Dúo marino', price: 'Consultar' },
      { name: 'Arroz con mariscos', price: '$25.000' },
      { name: 'Chicharrón de pescado mixto', price: 'Consultar' },
    ],
  },
]

const featuredHTML = featuredDishes.map(([image, name, detail], index) => `
  <article class="dish-card ${index === 0 ? 'dish-card-large' : ''}">
    <div class="dish-image">
      <img src="/images/${image}" alt="${name}" loading="${index < 4 ? 'eager' : 'lazy'}">
    </div>
    <div class="dish-info">
      <span>${detail}</span>
      <h3>${name}</h3>
    </div>
  </article>
`).join('')

const menuHTML = menuSections.map((section, index) => `
  <section class="menu-category" id="menu-${index}">
    <div class="menu-category-heading">
      <span>${String(index + 1).padStart(2, '0')}</span>
      <h3>${section.title}</h3>
    </div>
    <div class="menu-list">
      ${section.dishes.map(dish => `
        <div class="menu-row">
          <span class="menu-name">${dish.name}</span>
          <span class="menu-dots"></span>
          <span class="menu-price">${dish.price}</span>
        </div>
      `).join('')}
    </div>
  </section>
`).join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="hero">
    <div class="hero-decoration hero-decoration-one"></div>
    <div class="hero-decoration hero-decoration-two"></div>

    <nav class="topbar">
      <a href="#inicio" class="brand">LA PERUANITA</a>
      <a href="#carta" class="nav-link">Nuestra carta</a>
    </nav>

    <div class="hero-content" id="inicio">
      <div class="hero-kicker">
        <span></span>
        Restaurante peruano
        <span></span>
      </div>

      <h1>La<br><em>Peruanita</em></h1>

      <div class="hero-divider"></div>

      <p class="hero-description">
        Sabores auténticos de la cocina peruana
      </p>

      <p class="hero-address">Av. Sáenz 575 · Buenos Aires</p>

      <a href="#carta" class="hero-button">
        <span>Descubrir nuestra carta</span>
        <strong>↓</strong>
      </a>
    </div>
  </header>

  <main>

    <section class="intro">
      <div class="section-container intro-grid">
        <div>
          <span class="eyebrow">Una experiencia peruana</span>
          <h2>El sabor de Perú,<br><em>en cada plato.</em></h2>
        </div>
        <div class="intro-copy">
          <p>
            Una selección de platos criollos, mariscos, pescados,
            especialidades chifa y los clásicos que hacen única
            a la gastronomía peruana.
          </p>
        </div>
      </div>
    </section>

    <section class="promotions">
      <div class="section-container">
        <div class="section-heading">
          <span class="eyebrow">Para compartir</span>
          <h2>Promociones</h2>
        </div>

        <div class="promotion-grid">

          <article class="promotion-card">
            <div class="promotion-number">01</div>
            <div>
              <span class="promotion-label">Promoción</span>
              <h3>2 platos a elección</h3>
              <strong>$25.000</strong>
              <p>Consultar qué platos entran en la promoción.</p>
            </div>
          </article>

          <article class="promotion-card featured-promo">
            <div class="promotion-number">02</div>
            <div>
              <span class="promotion-label">Especial</span>
              <h3>2 platos de mariscos</h3>
              <strong>$50.000</strong>
              <p>Una propuesta especial para los amantes del mar.</p>
            </div>
          </article>

        </div>
      </div>
    </section>

    <section class="featured">
      <div class="section-container">

        <div class="section-heading light">
          <span class="eyebrow">Selección de la casa</span>
          <h2>Platos<br><em>destacados</em></h2>
          <p>Algunas de nuestras especialidades.</p>
        </div>

        <div class="dish-grid">
          ${featuredHTML}
        </div>

      </div>
    </section>

    <section class="menu-intro" id="carta">
      <div class="section-container">
        <span class="eyebrow">La experiencia</span>
        <h2>Nuestra<br><em>carta</em></h2>
        <p>
          Descubrí nuestra selección de cocina peruana,
          criolla, chifa, parrilla y especialidades del mar.
        </p>
      </div>
    </section>

    <section class="menu">
      <div class="section-container">
        ${menuHTML}
      </div>
    </section>

    <section class="visit">
      <div class="section-container">

        <div class="section-heading light">
          <span class="eyebrow">Te esperamos</span>
          <h2>Visitá<br><em>La Peruanita</em></h2>
        </div>

        <div class="contact-grid">

          <a class="contact-card whatsapp-card"
             href="https://wa.me/5491163086444"
             target="_blank"
             rel="noopener">
            <div class="contact-icon">W</div>
            <div class="contact-text">
              <span>WhatsApp</span>
              <strong>11 6308-6444</strong>
              <small>Escribinos directamente</small>
            </div>
            <b>↗</b>
          </a>

          <a class="contact-card whatsapp-card"
             href="https://wa.me/5491168690581"
             target="_blank"
             rel="noopener">
            <div class="contact-icon">W</div>
            <div class="contact-text">
              <span>WhatsApp</span>
              <strong>11 6869-0581</strong>
              <small>Escribinos directamente</small>
            </div>
            <b>↗</b>
          </a>

          <a class="contact-card maps-card"
             href="https://www.google.com/maps/search/?api=1&query=Av.+Saenz+575,+Buenos+Aires"
             target="_blank"
             rel="noopener">
            <div class="contact-icon">⌖</div>
            <div class="contact-text">
              <span>Encontranos</span>
              <strong>Av. Sáenz 575</strong>
              <small>Ver ubicación en Google Maps</small>
            </div>
            <b>↗</b>
          </a>

        </div>

        <div class="hours">
          <span>HORARIOS</span>
          <strong>Todos los días · 09:00 — 00:00</strong>
        </div>

      </div>
    </section>

  </main>

  <footer>
    <div class="footer-mark">LA PERUANITA</div>
    <p>Sabores auténticos de la cocina peruana</p>
    <span>Av. Sáenz 575 · Buenos Aires</span>
  </footer>
`
