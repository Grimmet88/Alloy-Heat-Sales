export function initializeAnalytics() {
  // Google Analytics 4 setup (placeholder)
  if (typeof gtag !== 'undefined') {
    // Track page view
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: 'Industrial Heating Coils & Resistance Wire',
      page_location: window.location.href
    })
  }

  // Track important interactions
  trackClicks()
  trackScrollDepth()
  trackFormInteractions()
}

function trackClicks() {
  // Track CTA button clicks
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (window.gtag) {
        window.gtag('event', 'cta_click', {
          event_category: 'engagement',
          event_label: e.target.textContent.trim(),
          value: 1
        })
      }
    })
  })

  // Track phone number clicks
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
      if (window.gtag) {
        window.gtag('event', 'phone_click', {
          event_category: 'contact',
          event_label: 'phone_number'
        })
      }
    })
  })

  // Track email clicks
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
      if (window.gtag) {
        window.gtag('event', 'email_click', {
          event_category: 'contact',
          event_label: 'email_address'
        })
      }
    })
  })
}

function trackScrollDepth() {
  let maxScroll = 0
  const milestones = [25, 50, 75, 90]
  const tracked = new Set()

  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    )
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent
      
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !tracked.has(milestone)) {
          tracked.add(milestone)
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: `${milestone}%`,
              value: milestone
            })
          }
        }
      })
    }
  })
}

function trackFormInteractions() {
  // Track form field interactions
  document.querySelectorAll('#rfq-form input, #rfq-form select, #rfq-form textarea').forEach(field => {
    field.addEventListener('focus', () => {
      if (window.gtag) {
        window.gtag('event', 'form_field_focus', {
          event_category: 'form',
          event_label: field.name || field.id
        })
      }
    })
  })

  // Track FAQ interactions
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      if (window.gtag) {
        window.gtag('event', 'faq_click', {
          event_category: 'engagement',
          event_label: question.textContent.trim()
        })
      }
    })
  })
}

// Export for use in other modules
export { trackClicks, trackScrollDepth, trackFormInteractions }