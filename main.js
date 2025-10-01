import './style.css'
import { initializeApp } from './components/app.js'
import { initializeNavigation } from './components/navigation.js'
import { initializeForms } from './components/forms.js'
import { initializeAnimations } from './components/animations.js'
import { initializeAnalytics } from './utils/analytics.js'

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  initializeApp()
  initializeNavigation()
  initializeForms()
  initializeAnimations()
  initializeAnalytics()
})