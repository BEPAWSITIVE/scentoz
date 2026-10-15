/**
 * SCENTOZ HAUTE PARFUMERIE - LUXURY STOREFRONT LOGIC
 * Inspired by reference design
 * Typography:
 *   Heading: Geo Sans Light
 *   Body:    Avenir
 * Currency: Default Indian Rupee (INR - ₹)
 * User Palette:
 *   (246,217,210) -> #F6D9D2
 *   (236,189,198) -> #ECBDC6
 *   (216,169,193) -> #D8A9C1
 *   (184,152,193) -> #B898C1
 *   (146,131,169) -> #9283A9
 */

// 1. STATE & GLOBAL CONFIGURATION
const APP_STATE = {
  currency: 'INR',
  currencyRates: {
    INR: { symbol: '₹', rate: 1, name: 'Indian Rupee' },
    USD: { symbol: '$', rate: 0.012, name: 'US Dollar' },
    EUR: { symbol: '€', rate: 0.011, name: 'Euro' },
    GBP: { symbol: '£', rate: 0.0094, name: 'British Pound' },
    AED: { symbol: 'AED ', rate: 0.044, name: 'UAE Dirham' }
  },
  cart: [],
  wishlist: [],
  appliedCoupon: null,
  trendingIndex: 0
};

// 2. CURATED PERFUMES (8 SIGNATURE MASTERPIECES)
const PERFUMES = [
  {
    id: 1,
    name: "AURA D'OR",
    concentration: "Extrait de Parfum",
    family: "Warm Amber Rose",
    gender: "for-her",
    price: 4995,
    origPrice: 5995,
    rating: 4.9,
    reviewsCount: 384,
    liquidColor: "#D8A9C1",
    boxColor: "#4A223B",
    character: "Kashmiri Saffron, Taif Damask Rose, and Mysore Sandalwood.",
    topNotes: ["Kashmiri Saffron", "Bergamot", "Blood Mandarin"],
    heartNotes: ["Taif Damask Rose", "Jasmine", "Honeycomb"],
    baseNotes: ["Mysore Sandalwood", "Liquid Amber", "White Musk"]
  },
  {
    id: 2,
    name: "NOIR OBSIDIAN",
    concentration: "Extrait Intense",
    family: "Smoky Leather Oud",
    gender: "for-him",
    price: 5495,
    origPrice: 6495,
    rating: 5.0,
    reviewsCount: 412,
    liquidColor: "#9283A9",
    boxColor: "#2A1E33",
    character: "Assam Smoked Agarwood, Black Leather, and Cardamom.",
    topNotes: ["Guatemalan Cardamom", "Black Pepper", "Bergamot"],
    heartNotes: ["Smoked Leather", "Birch Tar", "Dark Patchouli"],
    baseNotes: ["Pure Assam Oud", "Bourbon Vetiver", "Ambroxan"]
  },
  {
    id: 3,
    name: "FLEUR ÉTERNELLE",
    concentration: "Extrait de Parfum",
    family: "White Floral Nectar",
    gender: "for-her",
    price: 4495,
    origPrice: 5295,
    rating: 4.8,
    reviewsCount: 295,
    liquidColor: "#ECBDC6",
    boxColor: "#542540",
    character: "Grasse Tuberose, Madurai Jasmine Sambac, and Bourbon Vanilla.",
    topNotes: ["Bigarade Neroli", "Bergamot", "Pink Pepper"],
    heartNotes: ["Grasse Tuberose", "Madurai Jasmine", "Ylang-Ylang"],
    baseNotes: ["Bourbon Vanilla", "White Cedar", "Musc Blanc"]
  },
  {
    id: 4,
    name: "CYPRÈS ROYALE",
    concentration: "Eau de Parfum",
    family: "Fresh Woody Aromatic",
    gender: "for-him",
    price: 3995,
    origPrice: 4895,
    rating: 4.8,
    reviewsCount: 230,
    liquidColor: "#B898C1",
    boxColor: "#243242",
    character: "Tuscan Cypress, Siberian Pine, and Haitian Vetiver.",
    topNotes: ["Pink Grapefruit", "Italian Bergamot", "Juniper"],
    heartNotes: ["Tuscan Cypress", "Siberian Pine", "Geranium"],
    baseNotes: ["Haitian Vetiver", "Oakmoss", "Mineral Ambergris"]
  },
  {
    id: 5,
    name: "ROSE DE SHIRAZ",
    concentration: "Extrait Intense",
    family: "Imperial Floral Oud",
    gender: "for-her",
    price: 5995,
    origPrice: 6995,
    rating: 5.0,
    reviewsCount: 340,
    liquidColor: "#D8A9C1",
    boxColor: "#61163A",
    character: "Shiraz Damascena Rose, Wild Raspberry, and Cambodian Oud.",
    topNotes: ["Wild Raspberry", "Saffron Petals", "Pink Pepper"],
    heartNotes: ["Shiraz Rose", "Rose Absolute", "Labdanum"],
    baseNotes: ["Cambodian Oud", "Ambergris", "Patchouli"]
  },
  {
    id: 6,
    name: "VELVET SANTAL",
    concentration: "Eau de Parfum",
    family: "Creamy Woody Iris",
    gender: "unisex",
    price: 4295,
    origPrice: 4995,
    rating: 4.7,
    reviewsCount: 188,
    liquidColor: "#F6D9D2",
    boxColor: "#3B2E42",
    character: "Australian Sandalwood, Florentine Iris Root, and Cedarwood.",
    topNotes: ["Violet Leaf", "Green Cardamom", "Coriander"],
    heartNotes: ["Florentine Iris", "Papyrus", "Cedar"],
    baseNotes: ["Australian Sandalwood", "Cashmere Wood", "Amber"]
  },
  {
    id: 7,
    name: "AMBRE SOLEIL",
    concentration: "Eau de Parfum",
    family: "Warm Solar Gourmand",
    gender: "for-her",
    price: 3895,
    origPrice: 4495,
    rating: 4.9,
    reviewsCount: 275,
    liquidColor: "#ECBDC6",
    boxColor: "#6B3248",
    character: "Sun-drenched Orange Blossom, Benzoin Resin, and Creamy Coconut.",
    topNotes: ["Sunlit Bergamot", "Neroli", "Mandora"],
    heartNotes: ["Orange Blossom", "Coconut Nectar", "Ylang-Ylang"],
    baseNotes: ["Siam Benzoin", "Golden Amber", "White Musk"]
  },
  {
    id: 8,
    name: "L'ÉLIXIR BLEU",
    concentration: "Eau de Parfum",
    family: "Aquatic Mineral Fresh",
    gender: "for-him",
    price: 3495,
    origPrice: 4195,
    rating: 4.7,
    reviewsCount: 194,
    liquidColor: "#B898C1",
    boxColor: "#1B365D",
    character: "Mediterranean Sea Salt, Coastal Sage, and Sun-bleached Driftwood.",
    topNotes: ["Marine Sea Salt", "Italian Lemon", "Crisp Mint"],
    heartNotes: ["Coastal Sage", "Rosemary", "Water Lily"],
    baseNotes: ["Driftwood", "Grey Ambergris", "White Cedar"]
  }
];

// 3. SVG FLACON + LUXURY EMBOSSED BOX GENERATOR (MATCHING BLUE SKINN BOX IN REFERENCE)
function generateComboFlaconSVG(perfume) {
  const boxColor = perfume.boxColor || '#3D2947';
  const liquidColor = perfume.liquidColor || '#D8A9C1';

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 230" width="100%" height="100%">
      <defs>
        <!-- Shadow filter -->
        <filter id="boxShadow-${perfume.id}" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#584A63" flood-opacity="0.22" />
        </filter>

        <!-- Metallic Cap gradient -->
        <linearGradient id="capGradCombo-${perfume.id}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#9283A9" />
          <stop offset="35%" stop-color="#ECBDC6" />
          <stop offset="65%" stop-color="#F6D9D2" />
          <stop offset="100%" stop-color="#9283A9" />
        </linearGradient>

        <!-- Liquid gradient -->
        <linearGradient id="liquidGradCombo-${perfume.id}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F6D9D2" stop-opacity="0.4" />
          <stop offset="50%" stop-color="${liquidColor}" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#9283A9" stop-opacity="0.95" />
        </linearGradient>
      </defs>

      <!-- 1. Luxury Packaging Box (Behind & Left) -->
      <g filter="url(#boxShadow-${perfume.id})">
        <rect x="22" y="38" width="84" height="162" rx="4" fill="${boxColor}" stroke="#D8A9C1" stroke-width="0.8" />
        <rect x="27" y="43" width="74" height="152" rx="2" fill="none" stroke="rgba(236, 189, 198, 0.4)" stroke-width="0.6" />
        
        <!-- Box Embossed Typography -->
        <text x="64" y="74" font-family="'GeosansLight', sans-serif" font-size="8.5" fill="#F6D9D2" text-anchor="middle" letter-spacing="2.2" font-weight="400">SCENTOZ</text>
        <text x="64" y="86" font-family="'Avenir', sans-serif" font-size="4.2" fill="#ECBDC6" text-anchor="middle" letter-spacing="1.2" font-weight="600">PARFUM</text>
        <line x1="42" y1="92" x2="86" y2="92" stroke="#D8A9C1" stroke-width="0.5" opacity="0.6" />
        <text x="64" y="108" font-family="'GeosansLight', sans-serif" font-size="7" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">${perfume.name}</text>
        <text x="64" y="120" font-family="'Avenir', sans-serif" font-size="4" fill="#D4CADB" text-anchor="middle" letter-spacing="0.6">100 ML · 3.4 FL. OZ.</text>
      </g>

      <!-- 2. Perfume Crystal Flacon (Standing in Front, Shifted Right) -->
      <g filter="url(#boxShadow-${perfume.id})">
        <!-- Atomizer Neck -->
        <rect x="118" y="58" width="18" height="15" fill="url(#capGradCombo-${perfume.id})" rx="1" />
        
        <!-- Cap -->
        <rect x="106" y="38" width="42" height="22" fill="url(#capGradCombo-${perfume.id})" rx="2" />
        <line x1="106" y1="49" x2="148" y2="49" stroke="#9283A9" stroke-width="0.5" opacity="0.5" />

        <!-- Flacon Body (Crystal Glass) -->
        <rect x="84" y="72" width="86" height="138" rx="10" fill="#FFFFFF" fill-opacity="0.88" stroke="rgba(216, 169, 193, 0.65)" stroke-width="1.4" />
        
        <!-- Liquid Chamber -->
        <rect x="89" y="88" width="76" height="116" rx="6" fill="url(#liquidGradCombo-${perfume.id})" />

        <!-- Glass Highlights -->
        <line x1="93" y1="80" x2="93" y2="202" stroke="#FFFFFF" stroke-width="1.5" opacity="0.6" />
        <line x1="162" y1="80" x2="162" y2="202" stroke="#FFFFFF" stroke-width="0.8" opacity="0.3" />

        <!-- Flacon Label -->
        <rect x="95" y="115" width="64" height="52" rx="2" fill="#FFFFFF" stroke="#D8A9C1" stroke-width="0.8" opacity="0.98" />
        <text x="127" y="132" font-family="'GeosansLight', sans-serif" font-size="7.5" fill="#1F1726" text-anchor="middle" letter-spacing="1.5" font-weight="600">SCENTOZ</text>
        <line x1="108" y1="138" x2="146" y2="138" stroke="#D8A9C1" stroke-width="0.5" opacity="0.5" />
        <text x="127" y="148" font-family="'GeosansLight', sans-serif" font-size="6" fill="#852256" text-anchor="middle" letter-spacing="0.8" font-weight="600">${perfume.name}</text>
        <text x="127" y="158" font-family="'Avenir', sans-serif" font-size="3.5" fill="#584A63" text-anchor="middle" font-weight="600">EXTRAIT DE PARFUM</text>
      </g>
    </svg>
  `;
}

// 4. CURRENCY CONVERSION & FORMATTING
function formatPrice(inrAmount) {
  const current = APP_STATE.currencyRates[APP_STATE.currency] || APP_STATE.currencyRates.INR;
  const converted = inrAmount * current.rate;
  
  if (APP_STATE.currency === 'INR') {
    return '₹' + Math.round(converted).toLocaleString('en-IN');
  } else if (APP_STATE.currency === 'USD') {
    return '$' + Math.round(converted).toLocaleString();
  } else if (APP_STATE.currency === 'EUR') {
    return '€' + Math.round(converted).toLocaleString();
  } else if (APP_STATE.currency === 'GBP') {
    return '£' + Math.round(converted).toLocaleString();
  } else if (APP_STATE.currency === 'AED') {
    return 'AED ' + Math.round(converted).toLocaleString();
  }
  return '₹' + Math.round(inrAmount).toLocaleString('en-IN');
}

// 5. RENDER TRENDING PRODUCTS CAROUSEL
function renderTrendingProducts() {
  const track = document.getElementById('trendingProductsTrack');
  if (!track) return;

  // Render 4 products based on trendingIndex
  const count = 4;
  const start = APP_STATE.trendingIndex;
  const visible = [];
  for (let i = 0; i < count; i++) {
    const idx = (start + i) % PERFUMES.length;
    visible.push(PERFUMES[idx]);
  }

  track.innerHTML = visible.map(p => {
    return `
      <article class="product-showcase-card">
        <div class="card-visual-combo" onclick="openQuickViewModal(${p.id})">
          ${generateComboFlaconSVG(p)}
        </div>
        <div class="card-category-sub">${p.concentration}</div>
        <h3 class="card-perfume-name" onclick="openQuickViewModal(${p.id})" style="cursor: pointer;">${p.name}</h3>
        <div class="card-rating-row">
          <span class="stars-rating">★★★★★</span>
          <span style="color: var(--text-muted); font-size: 0.72rem;">${p.rating} (${p.reviewsCount})</span>
        </div>
        <div class="card-price-display">
          ${formatPrice(p.price)}
          <span style="font-size: 0.75rem; color: #847491; text-decoration: line-through; font-weight: 400; margin-left: 6px;">
            ${formatPrice(p.origPrice)}
          </span>
        </div>
        <button class="card-btn-add" onclick="addToCart(${p.id})">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
      </article>
    `;
  }).join('');
}

function nextTrendingSlide() {
  APP_STATE.trendingIndex = (APP_STATE.trendingIndex + 1) % PERFUMES.length;
  renderTrendingProducts();
}

function prevTrendingSlide() {
  APP_STATE.trendingIndex = (APP_STATE.trendingIndex - 1 + PERFUMES.length) % PERFUMES.length;
  renderTrendingProducts();
}

// 6. CART MANAGEMENT
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('scentoz_cart');
    if (saved) APP_STATE.cart = JSON.parse(saved);
  } catch (e) { APP_STATE.cart = []; }
}

function saveCartToStorage() {
  localStorage.setItem('scentoz_cart', JSON.stringify(APP_STATE.cart));
}

function addToCart(perfumeId, qty = 1) {
  const p = PERFUMES.find(item => item.id === perfumeId);
  if (!p) return;

  const existing = APP_STATE.cart.find(item => item.id === perfumeId);
  if (existing) {
    existing.qty += qty;
  } else {
    APP_STATE.cart.push({
      id: p.id,
      name: p.name,
      concentration: p.concentration,
      price: p.price,
      qty: qty
    });
  }

  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
  openCartDrawer();
  showToast(`Added ${p.name} to shopping bag`);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadgeCount');
  const total = APP_STATE.cart.reduce((sum, item) => sum + item.qty, 0);
  if (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}

function renderCartDrawer() {
  const list = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  const discountEl = document.getElementById('cartDiscount');
  const fill = document.getElementById('shippingProgressFill');

  if (!list) return;

  if (APP_STATE.cart.length === 0) {
    list.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <i class="fas fa-shopping-bag" style="font-size: 2.5rem; color: #D8A9C1; margin-bottom: 14px; display: block;"></i>
        <h4 style="font-size: 1.1rem; color: #1F1726; margin-bottom: 6px;">Your Bag is Empty</h4>
        <p style="font-size: 0.85rem; color: #584A63;">Explore our trending perfumes and add your signature scent.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0);
    if (totalEl) totalEl.textContent = formatPrice(0);
    if (discountEl) discountEl.textContent = formatPrice(0);
    if (fill) fill.style.width = '0%';
    return;
  }

  let subtotal = 0;
  list.innerHTML = APP_STATE.cart.map((item, idx) => {
    subtotal += item.price * item.qty;
    return `
      <div class="cart-item-row">
        <div class="cart-item-thumb">
          <i class="fas fa-wine-bottle" style="font-size: 1.5rem; color: #852256;"></i>
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <div class="cart-item-size">${item.concentration} (100ml)</div>
          <div class="cart-item-qty-wrap">
            <button class="qty-btn" onclick="updateItemQty(${idx}, -1)">-</button>
            <span style="font-size: 0.82rem; font-weight: 700;">${item.qty}</span>
            <button class="qty-btn" onclick="updateItemQty(${idx}, 1)">+</button>
          </div>
        </div>
        <div style="text-align: right;">
          <div class="cart-item-total">${formatPrice(item.price * item.qty)}</div>
          <button class="cart-item-remove-btn" onclick="removeCartItem(${idx})">Remove</button>
        </div>
      </div>
    `;
  }).join('');

  // Shipping progress (Free shipping over ₹1,995)
  const freeThreshold = 1995;
  const progressPct = Math.min(100, Math.round((subtotal / freeThreshold) * 100));
  if (fill) fill.style.width = `${progressPct}%`;

  let discount = 0;
  if (APP_STATE.appliedCoupon) {
    discount = (subtotal * APP_STATE.appliedCoupon.pct) / 100;
  }
  const total = Math.max(0, subtotal - discount);

  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
  if (discountEl) discountEl.textContent = '-' + formatPrice(discount);
  if (totalEl) totalEl.textContent = formatPrice(total);
}

function updateItemQty(index, change) {
  if (!APP_STATE.cart[index]) return;
  APP_STATE.cart[index].qty += change;
  if (APP_STATE.cart[index].qty <= 0) {
    APP_STATE.cart.splice(index, 1);
  }
  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
}

function removeCartItem(index) {
  APP_STATE.cart.splice(index, 1);
  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
  showToast('Item removed from shopping bag');
}

function openCartDrawer() {
  document.getElementById('cartDrawerOverlay')?.classList.add('active');
  document.getElementById('cartDrawer')?.classList.add('active');
}

function closeCartDrawer() {
  document.getElementById('cartDrawerOverlay')?.classList.remove('active');
  document.getElementById('cartDrawer')?.classList.remove('active');
}

function applyCouponCode() {
  const input = document.getElementById('couponCodeInput');
  if (!input) return;
  const code = input.value.trim().toUpperCase();

  if (code === 'NEW10' || code === 'SCENTOZ10') {
    APP_STATE.appliedCoupon = { code: code, pct: 10 };
    showToast(`Code ${code} applied! 10% discount added.`);
  } else {
    showToast('Invalid coupon. Try code NEW10');
  }
  renderCartDrawer();
}

// 7. STORE LOCATOR PINCODE SEARCH
function handleStoreSearch(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('storePincodeInput');
  const val = input ? input.value.trim() : '';

  if (!val) {
    showToast('Please enter a Pincode or City');
    return;
  }

  showToast(`Found 3 SCENTOZ Flagship Boutiques near ${val}! (Express pickup available)`);
}

function useCurrentLocation() {
  showToast('Detecting location... Closest Flagship: SCENTOZ Atelier, MG Road.');
}

// 8. SOCIAL REELS MODAL PREVIEW
function openReelModal(title) {
  showToast(`Playing video reel: "${title}"`);
}

// 9. QUICK VIEW MODAL
function openQuickViewModal(perfumeId) {
  const p = PERFUMES.find(item => item.id === perfumeId);
  if (!p) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;">
      <div style="height: 320px; display: flex; align-items: center; justify-content: center; background: #FAF6F5; border-radius: 8px;">
        ${generateComboFlaconSVG(p)}
      </div>
      <div>
        <div style="font-size: 0.74rem; letter-spacing: 0.2em; color: #852256; text-transform: uppercase; font-weight: 700; margin-bottom: 6px;">
          ${p.concentration} · ${p.family}
        </div>
        <h2 style="font-size: 2.2rem; color: #1F1726; margin-bottom: 8px;">${p.name}</h2>
        <div style="font-size: 1.4rem; font-weight: 700; color: #1F1726; margin-bottom: 16px;">
          ${formatPrice(p.price)}
          <span style="font-size: 0.85rem; color: #847491; text-decoration: line-through; margin-left: 8px;">${formatPrice(p.origPrice)}</span>
        </div>
        <p style="font-size: 0.92rem; color: #584A63; line-height: 1.7; margin-bottom: 20px;">
          ${p.character}
        </p>

        <div style="background: #FAF6F5; border: 1px solid rgba(216, 169, 193, 0.4); padding: 14px; border-radius: 6px; margin-bottom: 24px; font-size: 0.82rem;">
          <div><strong>Top Notes:</strong> ${p.topNotes.join(', ')}</div>
          <div style="margin: 4px 0;"><strong>Heart Notes:</strong> ${p.heartNotes.join(', ')}</div>
          <div><strong>Base Notes:</strong> ${p.baseNotes.join(', ')}</div>
        </div>

        <button class="card-btn-add" style="padding: 14px 28px; width: 100%;" onclick="addToCart(${p.id}); closeQuickViewModal();">
          <i class="fas fa-shopping-bag"></i> Add 100ml Flacon to Bag (${formatPrice(p.price)})
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeQuickViewModal() {
  document.getElementById('quickViewModal')?.classList.remove('active');
}

// 10. CHECKOUT MODAL
function openCheckoutModal() {
  if (APP_STATE.cart.length === 0) {
    showToast('Your bag is empty.');
    return;
  }
  closeCartDrawer();
  const modal = document.getElementById('checkoutModal');
  const summary = document.getElementById('checkoutSummaryItems');
  const totalEl = document.getElementById('checkoutFinalTotal');

  let subtotal = APP_STATE.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discount = APP_STATE.appliedCoupon ? (subtotal * APP_STATE.appliedCoupon.pct) / 100 : 0;
  const total = Math.max(0, subtotal - discount);

  if (summary) {
    summary.innerHTML = APP_STATE.cart.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 8px;">
        <span>${item.qty}x ${item.name} (100ml)</span>
        <span style="font-weight: 700;">${formatPrice(item.price * item.qty)}</span>
      </div>
    `).join('');
  }

  if (totalEl) totalEl.textContent = formatPrice(total);
  modal?.classList.add('active');
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal')?.classList.remove('active');
}

function processFinalOrder(e) {
  if (e) e.preventDefault();
  const orderId = 'SCZ-' + Math.floor(100000 + Math.random() * 900000);
  closeCheckoutModal();
  APP_STATE.cart = [];
  saveCartToStorage();
  updateCartBadge();
  renderCartDrawer();
  showToast(`Congratulations! Order #${orderId} confirmed via BlueDart Express.`);
}

// 11. CURRENCY SWITCHER
function changeCurrency(curr) {
  if (APP_STATE.currencyRates[curr]) {
    APP_STATE.currency = curr;
    renderTrendingProducts();
    renderCartDrawer();
    showToast(`Currency set to ${APP_STATE.currencyRates[curr].name}`);
  }
}

// 12. FILTER & SEARCH HELPERS
function filterByGender(gender) {
  const filtered = PERFUMES.filter(p => p.gender === gender || p.gender === 'unisex');
  const track = document.getElementById('trendingProductsTrack');
  if (track) {
    track.innerHTML = filtered.map(p => `
      <article class="product-showcase-card">
        <div class="card-visual-combo" onclick="openQuickViewModal(${p.id})">
          ${generateComboFlaconSVG(p)}
        </div>
        <div class="card-category-sub">${p.concentration}</div>
        <h3 class="card-perfume-name" onclick="openQuickViewModal(${p.id})" style="cursor: pointer;">${p.name}</h3>
        <div class="card-rating-row">
          <span class="stars-rating">★★★★★</span>
          <span style="color: var(--text-muted); font-size: 0.72rem;">${p.rating} (${p.reviewsCount})</span>
        </div>
        <div class="card-price-display">
          ${formatPrice(p.price)}
          <span style="font-size: 0.75rem; color: #847491; text-decoration: line-through; font-weight: 400; margin-left: 6px;">
            ${formatPrice(p.origPrice)}
          </span>
        </div>
        <button class="card-btn-add" onclick="addToCart(${p.id})">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
      </article>
    `).join('');
  }
  document.getElementById('trendingSection')?.scrollIntoView({ behavior: 'smooth' });
  const label = gender === 'for-her' ? 'FOR HER' : 'FOR HIM';
  showToast(`Showing curated collection: ${label}`);
}

function filterByFamily(family) {
  const filtered = PERFUMES.filter(p => 
    p.family.toLowerCase().includes(family.toLowerCase()) || 
    p.character.toLowerCase().includes(family.toLowerCase())
  );
  const track = document.getElementById('trendingProductsTrack');
  if (track && filtered.length > 0) {
    track.innerHTML = filtered.map(p => `
      <article class="product-showcase-card">
        <div class="card-visual-combo" onclick="openQuickViewModal(${p.id})">
          ${generateComboFlaconSVG(p)}
        </div>
        <div class="card-category-sub">${p.concentration}</div>
        <h3 class="card-perfume-name" onclick="openQuickViewModal(${p.id})" style="cursor: pointer;">${p.name}</h3>
        <div class="card-rating-row">
          <span class="stars-rating">★★★★★</span>
          <span style="color: var(--text-muted); font-size: 0.72rem;">${p.rating} (${p.reviewsCount})</span>
        </div>
        <div class="card-price-display">
          ${formatPrice(p.price)}
          <span style="font-size: 0.75rem; color: #847491; text-decoration: line-through; font-weight: 400; margin-left: 6px;">
            ${formatPrice(p.origPrice)}
          </span>
        </div>
        <button class="card-btn-add" onclick="addToCart(${p.id})">
          <i class="fas fa-shopping-bag"></i> Add to Bag
        </button>
      </article>
    `).join('');
  }
  document.getElementById('trendingSection')?.scrollIntoView({ behavior: 'smooth' });
  showToast(`Showing ${family.toUpperCase()} collection`);
}

function handleHeaderSearch(query) {
  if (!query || query.trim() === '') {
    renderTrendingProducts();
    return;
  }
  const q = query.toLowerCase().trim();
  const matched = PERFUMES.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.family.toLowerCase().includes(q) || 
    p.character.toLowerCase().includes(q) ||
    p.topNotes.some(n => n.toLowerCase().includes(q)) ||
    p.heartNotes.some(n => n.toLowerCase().includes(q)) ||
    p.baseNotes.some(n => n.toLowerCase().includes(q))
  );

  const track = document.getElementById('trendingProductsTrack');
  if (track) {
    if (matched.length === 0) {
      track.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--c5-plum);">
          <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px; display: block;"></i>
          <p>No fragrances found matching "${query}". Try "Rose", "Oud", "Saffron", or "Sandalwood".</p>
        </div>
      `;
    } else {
      track.innerHTML = matched.map(p => `
        <article class="product-showcase-card">
          <div class="card-visual-combo" onclick="openQuickViewModal(${p.id})">
            ${generateComboFlaconSVG(p)}
          </div>
          <div class="card-category-sub">${p.concentration}</div>
          <h3 class="card-perfume-name" onclick="openQuickViewModal(${p.id})" style="cursor: pointer;">${p.name}</h3>
          <div class="card-rating-row">
            <span class="stars-rating">★★★★★</span>
            <span style="color: var(--text-muted); font-size: 0.72rem;">${p.rating} (${p.reviewsCount})</span>
          </div>
          <div class="card-price-display">
            ${formatPrice(p.price)}
            <span style="font-size: 0.75rem; color: #847491; text-decoration: line-through; font-weight: 400; margin-left: 6px;">
              ${formatPrice(p.origPrice)}
            </span>
          </div>
          <button class="card-btn-add" onclick="addToCart(${p.id})">
            <i class="fas fa-shopping-bag"></i> Add to Bag
          </button>
        </article>
      `).join('');
    }
  }
}

function copyHeroCoupon(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`Privilege Code "${code}" copied to clipboard! (10% OFF applied)`);
    }).catch(() => {
      showToast(`Privilege Code: ${code} (10% OFF at checkout)`);
    });
  } else {
    showToast(`Privilege Code: ${code} (10% OFF at checkout)`);
  }
  const input = document.getElementById('couponCodeInput');
  if (input) input.value = code;
  APP_STATE.appliedCoupon = { code: code, pct: 10 };
  renderCartDrawer();
}

// 13. TOAST ALERTS
function showToast(msg) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// 14. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  updateCartBadge();
  renderTrendingProducts();
  renderCartDrawer();

  // Currency select listeners
  document.querySelectorAll('.currency-select-top').forEach(sel => {
    sel.addEventListener('change', (e) => changeCurrency(e.target.value));
  });
});
