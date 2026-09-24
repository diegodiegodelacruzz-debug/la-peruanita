import './style.css'

type MenuItem = {
  name: string
  price?: string
  image?: string
}

type MenuSection = {
  title: string
  description?: string
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    title: 'ENTRADAS',
    items: [
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
    title: 'SOPAS',
    items: [
      { name: 'Caldo de gallina', price: '$15.000' },
      { name: 'Caldo de pollo', price: '$15.000', image: '/images/caldo-de-pollo.png' },
      { name: 'Caldo de mote', price: '$15.000', image: '/images/caldo-de-mote.png' },
      { name: 'Caldo de patasca', price: '$15.000' },
      { name: 'Sustancia de pollo', price: '$15.000' },
      { name: 'Sustancia de carne', price: '$15.000' },
      { name: 'Chilcano (sopa de pez)', price: '$15.000' },
      { name: 'Minutas', price: '$15.000' },
      { name: 'Shambar', price: '$15.000' },
    ],
  },
  {
    title: 'PLATOS CRIOLLOS',
    items: [
      { name: 'Mostrito a la brasa', price: '$15.000', image: '/images/mostrito.png' },
      { name: 'Mostrito broaster', price: '$18.000', image: '/images/mostrito.png' },
      { name: 'Mostrito broaster entero', price: '$40.000' },
      { name: 'Salchipapas', price: 'Consultar' },
      { name: 'Salchipollo', price: 'Consultar' },
      { name: 'Broaster', price: 'Consultar', image: '/images/pollo-broaster.png' },
      { name: 'Arroz a la cubana', price: 'Consultar' },
      { name: 'Arroz con cerdo', price: 'Consultar', image: '/images/arroz-con-cerdo.png' },
      { name: 'Lomo saltado de carne', price: '$18.000', image: '/images/lomo-saltado.png' },
      { name: 'Lomo saltado de pollo', price: '$15.000' },
      { name: 'Lomo saltado mixto', price: '$18.000' },
      { name: 'Lomo saltado a caballo', price: 'Consultar', image: '/images/lomo-saltado-a-caballo.png' },
      { name: 'Lomo saltado con chaufa', price: 'Consultar', image: '/images/lomo-saltado-con-chaufa.png' },
      { name: 'Tallarín saltado de pollo', price: 'Consultar' },
      { name: 'Tallarín saltado de carne', price: 'Consultar' },
      { name: 'Tallarín saltado mixto', price: 'Consultar' },
      { name: 'Arroz con pollo y papa a la huancaína', price: 'Consultar', image: '/images/arroz-con-pollo-y-papas-a-la-huacaina.png' },
      { name: 'Tallarín verde con pollo frito', price: 'Consultar', image: '/images/tallarin-verde-con-pollo-frito.png' },
      { name: 'Tallarín verde con bistec', price: 'Consultar', image: '/images/tallarin-verde-con-bistec-y-papas-a-la-huacaina.png' },
      { name: 'Tallarín rojo con papa a la huancaína', price: 'Consultar', image: '/images/tallarin-rojo-con-papas-a-la-huacaina.png' },
      { name: 'Pollo sillao', price: 'Consultar' },
      { name: 'Escabeche de pollo', price: 'Consultar' },
      { name: 'Ají de gallina', price: 'Consultar' },
      { name: 'Alitas broaster', price: 'Consultar' },
      { name: 'Tallarines con tuco de pollo', price: 'Consultar' },
      { name: 'Tallarines con tuco de carne', price: 'Consultar' },
      { name: 'Seco de pollo', price: 'Consultar' },
      { name: 'Seco de carne', price: 'Consultar', image: '/images/seco-de-carne-con-arroz-y-frijoles.png' },
      { name: 'Tacu-tacu con bistec', price: 'Consultar' },
      { name: 'Seco de cordero', price: 'Consultar' },
      { name: 'Pachamanka', price: 'Consultar' },
      { name: 'Arroz con pato', price: 'Consultar' },
      { name: 'Carapulcra', price: 'Consultar' },
      { name: 'Bistec a lo pobre', price: 'Consultar', image: '/images/bistec-a-lo-pobre.png' },
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
    title: 'CHIFA',
    items: [
      { name: 'Chaufa especial de pollo', price: 'Consultar' },
      { name: 'Chaufa especial de carne', price: 'Consultar' },
      { name: 'Chaufa especial de chancho', price: 'Consultar' },
      { name: 'Arroz chaufa de pollo', price: 'Consultar', image: '/images/arroz-chaufa.png' },
      { name: 'Arroz chaufa de carne', price: '$15.000' },
      { name: 'Arroz chaufa mixto', price: '$15.000' },
      { name: 'Arroz chaufa de cerdo', price: '$15.000' },
      { name: 'Tallarín saltado Chifa de pollo', price: 'Consultar' },
      { name: 'Tallarín saltado Chifa mixto', price: 'Consultar' },
      { name: 'Tallarín saltado de cerdo', price: 'Consultar' },
      { name: 'Aeropuerto de pollo o carne', price: '$18.000', image: '/images/aeropuerto.png' },
      { name: 'Aeropuerto mixto', price: 'Consultar', image: '/images/aeropuerto.png' },
      { name: 'Combinado de pollo o carne', price: 'Consultar' },
      { name: 'Combinado mixto', price: '$18.000' },
      { name: 'Sopa Wantán', price: 'Consultar' },
      { name: 'Wantán frito, porción', price: 'Consultar' },
      { name: 'Chijaukay', price: 'Consultar' },
    ],
  },
  {
    title: 'COMBINADO 3 COLORES',
    description: 'Ceviche + tallarín rojo + huancaína',
    items: [
      { name: 'Combinado 3 colores', price: '$20.000', image: '/images/combinados-3-colores.png' },
    ],
  },
  {
    title: 'POLLO A LA BRASA',
    items: [
      { name: 'Pollo entero + fritas + ensalada + cremas', price: '$35.000', image: '/images/pollo-a-la-brasa.png' },
      { name: 'Pollo + fritas + ensalada + gaseosa', price: 'Consultar' },
      { name: '1/2 pollo + fritas + ensalada', price: 'Consultar' },
    ],
  },
  {
    title: 'ANTICUCHOS / PARRILLA',
    items: [
      { name: 'Anticucho', price: 'Consultar' },
      { name: 'Pancita', price: 'Consultar' },
      { name: 'Rachi', price: 'Consultar' },
      { name: 'Mollejitas', price: 'Consultar' },
      { name: 'Anticucho especial, bife con fritas', price: 'Consultar' },
      { name: 'Parrillada', price: 'Consultar' },
    ],
  },
  {
    title: 'MARISCOS / PESCADOS',
    items: [
      { name: 'Ceviche', price: 'Consultar', image: '/images/ceviche.png' },
      { name: 'Leche de tigre', price: 'Consultar', image: '/images/leche-de-tigre.png' },
      { name: 'Dúo marino', price: 'Consultar', image: '/images/duo-marino.png' },
      { name: 'Arroz con mariscos', price: '$25.000', image: '/images/arroz-con-mariscos.png' },
      { name: 'Chicharrón de pescado mixto', price: 'Consultar', image: '/images/chicharron-de-pescado-mixto.png' },
    ],
  },
]

const featuredDishes: MenuItem[] = [
  { name: 'Aeropuerto', image: '/images/aeropuerto.png', price: '$18.000' },
  { name: 'Arroz chaufa', image: '/images/arroz-chaufa.png', price: 'Consultar' },
  { name: 'Arroz con cerdo', image: '/images/arroz-con-cerdo.png', price: 'Consultar' },
  { name: 'Arroz con mariscos', image: '/images/arroz-con-mariscos.png', price: '$25.000' },
  { name: 'Arroz con pollo y papa a la huancaína', image: '/images/arroz-con-pollo-y-papas-a-la-huacaina.png', price: 'Consultar' },
  { name: 'Bistec a lo pobre', image: '/images/bistec-a-lo-pobre.png', price: 'Consultar' },
  { name: 'Caldo de mote', image: '/images/caldo-de-mote.png', price: '$15.000' },
  { name: 'Caldo de pollo', image: '/images/caldo-de-pollo.png', price: '$15.000' },
  { name: 'Ceviche', image: '/images/ceviche.png', price: 'Consultar' },
  { name: 'Chicharrón de pescado mixto', image: '/images/chicharron-de-pescado-mixto.png', price: 'Consultar' },
  { name: 'Combinado 3 colores', image: '/images/combinados-3-colores.png', price: '$20.000' },
  { name: 'Dúo marino', image: '/images/duo-marino.png', price: 'Consultar' },
  { name: 'Leche de tigre', image: '/images/leche-de-tigre.png', price: 'Consultar' },
  { name: 'Lomo saltado a caballo', image: '/images/lomo-saltado-a-caballo.png', price: 'Consultar' },
  { name: 'Lomo saltado con chaufa', image: '/images/lomo-saltado-con-chaufa.png', price: 'Consultar' },
  { name: 'Lomo saltado', image: '/images/lomo-saltado.png', price: '$18.000' },
  { name: 'Mostrito', image: '/images/mostrito.png', price: '$15.000' },
  { name: 'Papa a la huancaína, papa rellena y tamales', image: '/images/papa-huacaina-papa-rellena-tamales.png', price: 'Consultar' },
  { name: 'Pollo a la brasa', image: '/images/pollo-a-la-brasa.png', price: '$35.000' },
  { name: 'Pollo broaster con papas y ensalada', image: '/images/pollo-broaster-con-papas-y-ensalada.png', price: 'Consultar' },
  { name: 'Pollo broaster', image: '/images/pollo-broaster.png', price: 'Consultar' },
  { name: 'Seco de carne con arroz y frijoles', image: '/images/seco-de-carne-con-arroz-y-frijoles.png', price: 'Consultar' },
  { name: 'Tallarín rojo con papa a la huancaína', image: '/images/tallarin-rojo-con-papas-a-la-huacaina.png', price: 'Consultar' },
  { name: 'Tallarín verde con bistec y papa a la huancaína', image: '/images/tallarin-verde-con-bistec-y-papas-a-la-huacaina.png', price: 'Consultar' },
  { name: 'Tallarín verde con pollo frito', image: '/images/tallarin-verde-con-pollo-frito.png', price: 'Consultar' },
]

function renderFeatured() {
  return featuredDishes
    .map(
      (dish) => `
        <article class="featured-card">
          <img src="${dish.image}" alt="${dish.name}" loading="lazy">
          <div class="featured-card-content">
            <h3>${dish.name}</h3>
            <span>${dish.price}</span>
          </div>
        </article>
      `,
    )
    .join('')
}

function renderSection(section: MenuSection) {
  return `
    <section class="menu-section">
      <h2 class="section-title">${section.title}</h2>
      ${section.description ? `<p class="section-description">${section.description}</p>` : ''}
      <div class="menu-list">
        ${section.items
          .map(
            (item) => `
              <div class="menu-item">
                <div class="dish-name">${item.name}</div>
                <div class="dish-price">${item.price ?? 'Consultar'}</div>
              </div>
            `,
          )
          .join('')}
      </div>
    </section>
  `
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="site">

    <header class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="eyebrow">RESTAURANTE PERUANO</p>
        <h1>LA PERUANITA</h1>
        <div class="hero-divider"></div>
        <p class="tagline">Sabores auténticos de la cocina peruana</p>
      </div>
    </header>

    <main>

      <section class="promotions">
        <div class="section-title">
          <span>Promociones</span>
        </div>

        <div class="promo-grid">
          <article class="promo-card">
            <p class="promo-label">2 PLATOS A ELECCIÓN</p>
            <strong>$25.000</strong>
            <p>Consultar qué platos entran en la promoción.</p>
          </article>

          <article class="promo-card">
            <p class="promo-label">2 PLATOS DE MARISCOS</p>
            <strong>$50.000</strong>
          </article>
        </div>
      </section>

      <section class="featured">
        <div class="menu-container">
          <h2 class="section-title light">PLATOS DESTACADOS</h2>
          <p class="section-description">
            Una selección de nuestros platos, preparados con el sabor de la cocina peruana.
          </p>

          <div class="featured-grid">
            ${renderFeatured()}
          </div>
        </div>
      </section>

      <section class="menu">
        <div class="menu-container">
          <h2 class="section-title">NUESTRA CARTA</h2>
          ${menuSections.map(renderSection).join('')}
        </div>
      </section>

      <section class="contact">
        <div class="menu-container">
          <h2 class="section-title">CONTACTO</h2>

          <div class="contact-actions">
            <a
              class="contact-button whatsapp"
              href="https://wa.me/5491163086444"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp · 11 6308-6444
            </a>

            <a
              class="contact-button whatsapp"
              href="https://wa.me/5491168690581"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp · 11 6869-0581
            </a>

            <a
              class="contact-button maps"
              href="https://www.google.com/maps/search/?api=1&query=Av.+Saenz+575,+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar · Av. Sáenz 575
            </a>
          </div>

          <div class="opening-hours">
            <span>HORARIO</span>
            <strong>Todos los días · 09:00 a 00:00</strong>
          </div>
        </div>
      </section>

    </main>

    <footer class="footer">
      <div class="footer-inner">
        <h2>LA PERUANITA</h2>
        <p class="footer-tagline">Sabores auténticos de la cocina peruana</p>
        <p class="copyright">© ${new Date().getFullYear()} La Peruanita</p>
      </div>
    </footer>

  </div>
`
