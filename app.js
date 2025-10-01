export function initializeApp() {
  const app = document.getElementById('app')
  
  app.innerHTML = `
    <!-- Header -->
    <header class="header" id="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            Alloy Heat Sales
          </div>
          <nav class="nav">
            <ul class="nav-links">
              <li><a href="#products" class="nav-link">Products</a></li>
              <li><a href="#industries" class="nav-link">Industries</a></li>
              <li><a href="#capabilities" class="nav-link">Capabilities</a></li>
              <li><a href="#resources" class="nav-link">Resources</a></li>
              <li><a href="#about" class="nav-link">About</a></li>
              <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <a href="#rfq" class="btn btn-primary">Get a Quote</a>
            <button class="mobile-menu-toggle" aria-label="Toggle menu">☰</button>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Industrial Heating Coils & Resistance Wire—Built to Spec, Delivered Fast</h1>
          <p class="hero-subtitle">
            Nichrome & Kanthal alloys, engineered coils, and turnkey heater assemblies with ISO-grade quality control.
          </p>
          <div class="hero-cta">
            <a href="#rfq" class="btn btn-primary btn-lg">Request a Quote</a>
            <button class="btn btn-secondary btn-lg" onclick="downloadSpecSheets()">
              Download Spec Sheets
              <span style="font-size: 0.75rem; opacity: 0.8;">PDF • 1.2 MB</span>
            </button>
          </div>
          <div class="trust-strip">
            <div class="trust-badge">
              <span>✓</span> ISO 9001 Certified
            </div>
            <div class="trust-badge">
              <span>✓</span> UL Listed Components
            </div>
            <div class="trust-badge">
              <span>✓</span> RoHS Compliant
            </div>
            <div class="trust-badge">
              <span>✓</span> Automotive Grade
            </div>
            <div class="trust-badge">
              <span>✓</span> Aerospace Approved
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Grid -->
    <section class="section product-grid" id="products">
      <div class="container">
        <h2 class="text-center mb-lg">Precision Heat. Proven Materials.</h2>
        <div class="grid grid-3">
          <div class="card product-card">
            <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Nichrome resistance wire coil" class="card-image" loading="lazy">
            <h3>Nichrome (NiCr) Resistance Wire</h3>
            <ul class="product-specs">
              <li>Stable resistivity, high oxidation resistance</li>
              <li>400–1200°C continuous duty</li>
              <li>AWG 10-40+ available</li>
              <li>80/20 and 60/15 alloys in stock</li>
            </ul>
            <a href="#rfq" class="btn btn-outline">View Specs</a>
          </div>
          
          <div class="card product-card">
            <img src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Kanthal heating element" class="card-image" loading="lazy">
            <h3>Kanthal (FeCrAl) Wire</h3>
            <ul class="product-specs">
              <li>Higher max temp, long life</li>
              <li>Up to 1400°C in oxidizing atmospheres</li>
              <li>A-1 and APM grades available</li>
              <li>Superior oxidation resistance</li>
            </ul>
            <a href="#rfq" class="btn btn-outline">View Specs</a>
          </div>
          
          <div class="card product-card">
            <img src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Formed heating coils" class="card-image" loading="lazy">
            <h3>Formed Heating Coils</h3>
            <ul class="product-specs">
              <li>Open/embedded coils wound to spec</li>
              <li>Target Ω/m, pitch, and coil OD</li>
              <li>Custom lead configurations</li>
              <li>Ceramic insulator options</li>
            </ul>
            <a href="#rfq" class="btn btn-outline">View Specs</a>
          </div>
          
          <div class="card product-card">
            <img src="https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Kiln and furnace elements" class="card-image" loading="lazy">
            <h3>Kiln & Furnace Elements</h3>
            <ul class="product-specs">
              <li>Custom spirals, tails, and supports</li>
              <li>Ceramic mounting hardware</li>
              <li>High-temperature applications</li>
              <li>Made-to-print specifications</li>
            </ul>
            <a href="#rfq" class="btn btn-outline">View Specs</a>
          </div>
          
          <div class="card product-card">
            <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Tubular cartridge heaters" class="card-image" loading="lazy">
            <h3>Tubular/Cartridge/Strip Heaters</h3>
            <ul class="product-specs">
              <li>Complete heater assemblies</li>
              <li>Custom wattage and voltage</li>
              <li>Thermocouple integration</li>
              <li>Industrial-grade construction</li>
            </ul>
            <a href="#rfq" class="btn btn-outline">View Specs</a>
          </div>
          
          <div class="card product-card">
            <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Custom coil winding" class="card-image" loading="lazy">
            <h3>Custom Coil Winding & Assemblies</h3>
            <ul class="product-specs">
              <li>Precision winding to your specs</li>
              <li>Rapid prototyping available</li>
              <li>PPAP documentation on request</li>
              <li>Volume production capabilities</li>
            </ul>
            <a href="#rfq" class="btn btn-outline">View Specs</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities & Quality -->
    <section class="section capabilities" id="capabilities">
      <div class="container">
        <div class="capabilities-grid">
          <div>
            <h2>Capabilities & Quality</h2>
            <p class="mb-lg">Material-matched to your environment with tight resistance tolerances and ISO-driven quality control.</p>
            
            <div class="capability-list">
              <div class="capability-item">
                <div class="capability-icon"></div>
                <div>
                  <strong>Coil Design</strong>
                  <p class="capability-text">Custom engineering for optimal heat distribution</p>
                </div>
              </div>
              
              <div class="capability-item">
                <div class="capability-icon"></div>
                <div>
                  <strong>Gauge Range</strong>
                  <p class="capability-text">AWG 10–40+ with precise diameter control</p>
                </div>
              </div>
              
              <div class="capability-item">
                <div class="capability-icon"></div>
                <div>
                  <strong>Resistance Targeting</strong>
                  <p class="capability-text">Accurate Ω/m specifications to ±5%</p>
                </div>
              </div>
              
              <div class="capability-item">
                <div class="capability-icon"></div>
                <div>
                  <strong>Heat Treatment</strong>
                  <p class="capability-text">Controlled annealing for optimal properties</p>
                </div>
              </div>
              
              <div class="capability-item">
                <div class="capability-icon"></div>
                <div>
                  <strong>Oxidation Protection</strong>
                  <p class="capability-text">Surface treatments for extended life</p>
                </div>
              </div>
              
              <div class="capability-item">
                <div class="capability-icon"></div>
                <div>
                  <strong>Welding/Termination</strong>
                  <p class="capability-text">Professional lead attachment and finishing</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div class="lead-time-callout">
              <h3>Typical Lead Times</h3>
              <p style="font-size: 1.5rem; margin: var(--spacing-sm) 0;">3–10 Business Days</p>
              <p style="margin-bottom: 0; opacity: 0.9;">(Rush orders available)</p>
            </div>
            
            <div style="margin-top: var(--spacing-lg); padding: var(--spacing-lg); background: var(--color-light-gray); border-radius: var(--border-radius-lg);">
              <h4>Value Propositions</h4>
              <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: var(--spacing-xs);">✓ Material-matched to your environment</li>
                <li style="margin-bottom: var(--spacing-xs);">✓ Tight resistance tolerances</li>
                <li style="margin-bottom: var(--spacing-xs);">✓ Rapid prototypes available</li>
                <li style="margin-bottom: var(--spacing-xs);">✓ ISO-driven quality control</li>
                <li style="margin-bottom: var(--spacing-xs);">✓ Made-to-print coils or finished heaters</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries Served -->
    <section class="section industries" id="industries">
      <div class="container">
        <h2 class="text-center mb-lg">Industries Served</h2>
        <div class="industry-chips">
          <div class="industry-chip">Appliances</div>
          <div class="industry-chip">Kilns/Ceramics</div>
          <div class="industry-chip">Automotive</div>
          <div class="industry-chip">Additive Manufacturing</div>
          <div class="industry-chip">Lab/Medical Devices</div>
          <div class="industry-chip">HVAC</div>
          <div class="industry-chip">Industrial Ovens</div>
        </div>
        <p class="text-center" style="max-width: 600px; margin: 0 auto;">
          Serving OEMs since 1970+ with precision heating solutions across diverse industrial applications.
        </p>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <h3>5M+</h3>
            <p>Feet of wire shipped</p>
          </div>
          <div class="stat-item">
            <h3>3-10</h3>
            <p>Day average lead time</p>
          </div>
          <div class="stat-item">
            <h3>0.3%</h3>
            <p>RMA rate</p>
          </div>
          <div class="stat-item">
            <h3>50+</h3>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Timeline -->
    <section class="section process">
      <div class="container">
        <h2 class="text-center mb-lg">Our Process</h2>
        <p class="text-center mb-lg" style="max-width: 600px; margin: 0 auto var(--spacing-lg);">
          We can quote from a drawing, sample, or target resistance.
        </p>
        <div class="process-steps">
          <div class="process-step">
            <div class="process-number">1</div>
            <h3>Requirements</h3>
            <p>Submit your specifications, drawings, or samples for evaluation</p>
          </div>
          <div class="process-step">
            <div class="process-number">2</div>
            <h3>Engineering Review</h3>
            <p>Our team analyzes requirements and recommends optimal materials</p>
          </div>
          <div class="process-step">
            <div class="process-number">3</div>
            <h3>Prototype/Approval</h3>
            <p>Rapid prototype development with performance validation</p>
          </div>
          <div class="process-step">
            <div class="process-number">4</div>
            <h3>Production & Delivery</h3>
            <p>ISO-controlled manufacturing with on-time delivery</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources Section -->
    <section class="section" id="resources" style="background: var(--color-light-gray);">
      <div class="container text-center">
        <h2 class="mb-lg">Technical Resources</h2>
        <p class="mb-lg" style="max-width: 600px; margin: 0 auto var(--spacing-lg);">
          Download our comprehensive specification pack with alloy datasheets, design guides, and calculation tools.
        </p>
        <div class="grid grid-2" style="max-width: 800px; margin: 0 auto;">
          <div class="card">
            <h3>Alloy Datasheets</h3>
            <p>NiCr 80/20, 60/15, FeCrAl A-1, APM specifications</p>
            <button class="btn btn-secondary" onclick="downloadSpecSheets()">Download PDF • 1.2 MB</button>
          </div>
          <div class="card">
            <h3>Design Tools</h3>
            <p>Coil calculator, temperature charts, ampacity tables</p>
            <button class="btn btn-secondary" onclick="downloadSpecSheets()">Download CSV • 0.8 MB</button>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq">
      <div class="container">
        <h2 class="text-center mb-lg">Technical FAQ</h2>
        <div style="max-width: 800px; margin: 0 auto;">
          <div class="faq-item">
            <button class="faq-question">
              When should I choose NiCr vs. Kanthal?
              <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
              <p>NiCr offers stable resistivity and ductility, ideal for precision applications up to 1200°C. Kanthal provides higher maximum temperature capability (up to 1400°C) and longer life in oxidizing atmospheres, making it perfect for furnace and kiln applications.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <button class="faq-question">
              What information do you need to provide a quote?
              <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
              <p>We need voltage, wattage, target resistance or Ω/m, operating temperature, environment conditions, dimensions, quantity, and any technical drawings. No drawing? Tell us your wattage, voltage, and form factor—we'll spec it.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <button class="faq-question">
              What are typical continuous operating temperatures?
              <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
              <p>NiCr 80/20: up to 1200°C, NiCr 60/15: up to 1150°C, Kanthal A-1: up to 1400°C, Kanthal APM: up to 1350°C. These are continuous duty ratings in oxidizing atmospheres.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <button class="faq-question">
              How do I determine the right coil sizing?
              <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
              <p>Coil sizing depends on wire gauge, pitch (spacing between turns), stretch ratio, and target resistance. Our engineers can calculate optimal dimensions based on your power requirements and space constraints.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <button class="faq-question">
              What about international shipping and MOQs?
              <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
              <p>We ship worldwide with proper export documentation. Minimum orders vary by product: wire typically 25 lbs, custom coils 10 pieces, assemblies 5 pieces. Contact us for specific requirements.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <button class="faq-question">
              Do you provide safety and clearance recommendations?
              <span class="faq-icon">▼</span>
            </button>
            <div class="faq-answer">
              <p>Yes, we provide safety guidelines including minimum clearances, insulation requirements, and thermal considerations. All recommendations follow UL and international safety standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RFQ Form -->
    <section class="section rfq-form" id="rfq">
      <div class="container">
        <h2 class="text-center mb-lg">Request a Quote</h2>
        <p class="text-center mb-lg">Need a part fast? We can quote from a drawing, sample, or target resistance.</p>
        
        <form id="rfq-form" style="max-width: 1000px; margin: 0 auto;">
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label" for="name">Name *</label>
              <input type="text" id="name" name="name" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="company">Company *</label>
              <input type="text" id="company" name="company" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="email">Email *</label>
              <input type="email" id="email" name="email" class="form-input" required>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" class="form-input">
            </div>
            
            <div class="form-group">
              <label class="form-label" for="industry">Application/Industry</label>
              <select id="industry" name="industry" class="form-select">
                <option value="">Select Industry</option>
                <option value="appliances">Appliances</option>
                <option value="kilns">Kilns/Ceramics</option>
                <option value="automotive">Automotive</option>
                <option value="additive">Additive Manufacturing</option>
                <option value="medical">Lab/Medical Devices</option>
                <option value="hvac">HVAC</option>
                <option value="industrial">Industrial Ovens</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="product-type">Product Type</label>
              <select id="product-type" name="product-type" class="form-select">
                <option value="">Select Product</option>
                <option value="nichrome-wire">Nichrome Wire</option>
                <option value="kanthal-wire">Kanthal Wire</option>
                <option value="formed-coils">Formed Coils</option>
                <option value="kiln-elements">Kiln Elements</option>
                <option value="heater-assemblies">Heater Assemblies</option>
                <option value="custom-winding">Custom Winding</option>
              </select>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="alloy">Alloy/Grade</label>
              <input type="text" id="alloy" name="alloy" class="form-input" placeholder="e.g., NiCr 80/20, Kanthal A-1">
            </div>
            
            <div class="form-group">
              <label class="form-label" for="gauge">Wire Gauge or Ω/m Target</label>
              <input type="text" id="gauge" name="gauge" class="form-input" placeholder="e.g., AWG 20, 2.5 Ω/m">
            </div>
            
            <div class="form-group">
              <label class="form-label" for="quantity">Quantity/Length</label>
              <input type="text" id="quantity" name="quantity" class="form-input" placeholder="e.g., 100 ft, 50 pieces">
            </div>
            
            <div class="form-group">
              <label class="form-label" for="temperature">Operating Temperature</label>
              <input type="text" id="temperature" name="temperature" class="form-input" placeholder="e.g., 1000°C continuous">
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="drawing">Attach Drawing/Specification</label>
            <div class="form-file" onclick="document.getElementById('drawing').click()">
              <input type="file" id="drawing" name="drawing" style="display: none;" accept=".pdf,.dwg,.jpg,.png">
              <p>Click to upload or drag and drop</p>
              <p style="font-size: 0.875rem; color: var(--color-medium-gray);">PDF, DWG, JPG, PNG (max 10MB)</p>
            </div>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="notes">Additional Notes</label>
            <textarea id="notes" name="notes" class="form-textarea" placeholder="Special requirements, environment conditions, or other details..."></textarea>
          </div>
          
          <div class="form-checkbox">
            <input type="checkbox" id="nda" name="nda">
            <label for="nda">Request NDA for proprietary information</label>
          </div>
          
          <div class="form-checkbox">
            <input type="checkbox" id="privacy" name="privacy" required>
            <label for="privacy">I agree to the privacy policy and terms of service *</label>
          </div>
          
          <div style="text-align: center; margin-top: var(--spacing-lg);">
            <button type="submit" class="btn btn-primary btn-lg">Submit RFQ</button>
          </div>
        </form>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer" id="contact">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h4>Alloy Heat Sales, LLC</h4>
            <p>123 Industrial Way<br>
            Manufacturing City, OH 44000</p>
            <p>Phone: <a href="tel:+15555432100">+1-555-HEAT-123</a><br>
            Email: <a href="mailto:info@alloyheat.com">info@alloyheat.com</a></p>
          </div>
          
          <div class="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#products">Nichrome Wire</a></li>
              <li><a href="#products">Kanthal Wire</a></li>
              <li><a href="#products">Heating Coils</a></li>
              <li><a href="#products">Kiln Elements</a></li>
              <li><a href="#products">Heater Assemblies</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#resources">Spec Sheets</a></li>
              <li><a href="#faq">Technical FAQ</a></li>
              <li><a href="#capabilities">Capabilities</a></li>
              <li><a href="#industries">Industries</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4>Certifications</h4>
            <p>ISO 9001:2015<br>
            UL Listed Components<br>
            RoHS Compliant<br>
            AS9100 (Aerospace)</p>
            <div style="margin-top: var(--spacing-sm);">
              <a href="#" style="color: var(--color-accent-red);">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Alloy Heat Sales, LLC. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>

    <!-- Sticky CTA for Mobile -->
    <div class="sticky-cta">
      <a href="#rfq" class="btn btn-primary">Get Quote</a>
    </div>

    <!-- Thank You Modal -->
    <div class="modal" id="thank-you-modal">
      <div class="modal-content">
        <button class="modal-close" onclick="closeModal()">&times;</button>
        <h3>Thank You!</h3>
        <p>Your RFQ has been submitted successfully. We'll review your requirements and respond within 24 hours.</p>
        <div style="margin-top: var(--spacing-lg);">
          <a href="#" class="btn btn-primary">Book a Quick Call</a>
          <button class="btn btn-outline" onclick="closeModal()">Close</button>
        </div>
      </div>
    </div>
  `
}