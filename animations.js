export function initializeAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up')
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.card, .stat-item, .process-step, .capability-item')
  animateElements.forEach(el => observer.observe(el))

  // Parallax effect for hero (subtle)
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector('.hero')
    if (hero && scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.1}px)`
    }
  })

  // Counter animation for stats
  const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-item h3')
    counters.forEach(counter => {
      const target = counter.textContent
      const numericValue = target.match(/[\d.]+/)?.[0]
      
      if (numericValue) {
        let current = 0
        const increment = parseFloat(numericValue) / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= parseFloat(numericValue)) {
            counter.textContent = target
            clearInterval(timer)
          } else {
            const suffix = target.replace(/[\d.]+/, '')
            counter.textContent = current.toFixed(numericValue.includes('.') ? 1 : 0) + suffix
          }
        }, 30)
      }
    })
  }

  // Trigger counter animation when stats section is visible
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters()
        statsObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.5 })

  const statsSection = document.querySelector('.stats')
  if (statsSection) {
    statsObserver.observe(statsSection)
  }

  // Smooth hover effects for cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)'
    })
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)'
    })
  })
}