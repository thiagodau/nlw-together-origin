{
  /** abre e fecha menu */
  const nav = document.querySelector('#header nav')
  const toggle = document.querySelectorAll('nav .toggle')

  for (const element of toggle) {
    element.addEventListener('click', function () {
      nav.classList.toggle(
        'show'
      ) /** se tiver o show tira se nao tiver coloca é o que o '.toggle('')' faz */
    })
  }

  /** Fechar menu quando clicar em algum item da lista */
  const links = document.querySelectorAll('nav ul li a')
  for (link of links) {
    link.addEventListener('click', function () {
      nav.classList.remove('show')
    })
  }

  /** mudar o header da page quando der scroll */
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
      //scroll e maior que a altura do header
      header.classList.add('scroll')
    } else {
      //scroll e menor que a altura do header
      header.classList.remove('scroll')
    }
  })

  /* Swiper JS */
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    loop: true
  })

  /* Scroll Reveal, mostra elementos conforme scroll na pagina */
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
  })

  scrollReveal.reveal(
    `#home .image, #home .texr, #about .image, #about .text, #services header, #services .card, #testimonials header, #testimonials .testimonials, #contact .text, #contact .links`,
    { interval: 100 }
  )
}
