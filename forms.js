export function initializeForms() {
  // RFQ Form submission
  const rfqForm = document.getElementById('rfq-form')
  if (rfqForm) {
    rfqForm.addEventListener('submit', handleRFQSubmission)
  }

  // FAQ toggles
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', toggleFAQ)
  })

  // File upload handling
  const fileInput = document.getElementById('drawing')
  const fileArea = document.querySelector('.form-file')
  
  if (fileInput && fileArea) {
    fileInput.addEventListener('change', handleFileUpload)
    
    // Drag and drop functionality
    fileArea.addEventListener('dragover', (e) => {
      e.preventDefault()
      fileArea.style.borderColor = 'var(--color-steel-blue)'
      fileArea.style.background = 'var(--color-light-gray)'
    })
    
    fileArea.addEventListener('dragleave', (e) => {
      e.preventDefault()
      fileArea.style.borderColor = '#e2e8f0'
      fileArea.style.background = 'transparent'
    })
    
    fileArea.addEventListener('drop', (e) => {
      e.preventDefault()
      fileArea.style.borderColor = '#e2e8f0'
      fileArea.style.background = 'transparent'
      
      const files = e.dataTransfer.files
      if (files.length > 0) {
        fileInput.files = files
        handleFileUpload({ target: fileInput })
      }
    })
  }
}

function handleRFQSubmission(e) {
  e.preventDefault()
  
  // Basic form validation
  const requiredFields = ['name', 'company', 'email', 'privacy']
  let isValid = true
  
  requiredFields.forEach(fieldName => {
    const field = document.getElementById(fieldName)
    if (!field.value && fieldName !== 'privacy') {
      isValid = false
      field.style.borderColor = 'var(--color-accent-red)'
    } else if (fieldName === 'privacy' && !field.checked) {
      isValid = false
      field.style.outline = '2px solid var(--color-accent-red)'
    } else {
      field.style.borderColor = '#e2e8f0'
      field.style.outline = 'none'
    }
  })
  
  if (!isValid) {
    alert('Please fill in all required fields.')
    return
  }
  
  // Simulate form submission
  const submitButton = e.target.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent
  
  submitButton.textContent = 'Submitting...'
  submitButton.disabled = true
  
  // Simulate API call
  setTimeout(() => {
    submitButton.textContent = originalText
    submitButton.disabled = false
    
    // Show thank you modal
    document.getElementById('thank-you-modal').classList.add('active')
    
    // Reset form
    e.target.reset()
    
    // Track event for analytics
    if (window.gtag) {
      window.gtag('event', 'rfq_submit', {
        event_category: 'form',
        event_label: 'rfq_form'
      })
    }
  }, 2000)
}

function toggleFAQ(e) {
  const question = e.currentTarget
  const answer = question.nextElementSibling
  const icon = question.querySelector('.faq-icon')
  
  // Close all other FAQs
  document.querySelectorAll('.faq-question').forEach(q => {
    if (q !== question) {
      q.classList.remove('active')
      q.nextElementSibling.classList.remove('active')
    }
  })
  
  // Toggle current FAQ
  question.classList.toggle('active')
  answer.classList.toggle('active')
}

function handleFileUpload(e) {
  const file = e.target.files[0]
  const fileArea = document.querySelector('.form-file')
  
  if (file) {
    const fileSize = (file.size / 1024 / 1024).toFixed(2) // MB
    fileArea.innerHTML = `
      <p><strong>${file.name}</strong></p>
      <p style="font-size: 0.875rem; color: var(--color-medium-gray);">${fileSize} MB</p>
      <p style="font-size: 0.75rem; color: var(--color-steel-blue);">Click to change file</p>
    `
  }
}

// Global functions for buttons
window.downloadSpecSheets = function() {
  // Show email gate modal or direct download
  const email = prompt('Enter your email to download spec sheets:')
  if (email && email.includes('@')) {
    // Track download event
    if (window.gtag) {
      window.gtag('event', 'spec_download', {
        event_category: 'resource',
        event_label: 'spec_sheets'
      })
    }
    
    // Simulate download
    alert('Download started! Check your downloads folder.')
  }
}

window.closeModal = function() {
  document.getElementById('thank-you-modal').classList.remove('active')
}