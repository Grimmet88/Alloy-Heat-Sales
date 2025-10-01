export function initializeNavigation() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight
        const targetPosition = target.offsetTop - headerHeight
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    })
  })

  // Header scroll effect
  let lastScrollTop = 0
  const header = document.getElementById('header')
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    
    if (scrollTop > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)'
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)'
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)'
      header.style.boxShadow = 'none'
    }
    
    lastScrollTop = scrollTop
  })

  // Mobile menu toggle (basic implementation)
  const mobileToggle = document.querySelector('.mobile-menu-toggle')
  const navLinks = document.querySelector('.nav-links')
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'
    })
  }
}