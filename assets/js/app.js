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

// 3. SVG IMAGE GENERATORS (4 MULTI-ANGLE LUXURY VIEWS FOR EACH PRODUCT)

// View 1: Combo Flacon & Luxury Embossed Packaging Box
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

// View 2: Crystal Flacon Solo Detail (Centered Macro Perspective)
function generateFlaconSoloSVG(perfume) {
  const liquidColor = perfume.liquidColor || '#D8A9C1';
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 230" width="100%" height="100%">
      <defs>
        <filter id="soloFlaconShadow-${perfume.id}" x="-30%" y="-15%" width="160%" height="140%">
          <feDropShadow dx="0" dy="14" stdDeviation="10" flood-color="#584A63" flood-opacity="0.25" />
        </filter>
        <linearGradient id="soloCapGrad-${perfume.id}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#9283A9" />
          <stop offset="25%" stop-color="#ECBDC6" />
          <stop offset="50%" stop-color="#F6D9D2" />
          <stop offset="75%" stop-color="#D8A9C1" />
          <stop offset="100%" stop-color="#9283A9" />
        </linearGradient>
        <linearGradient id="soloLiquidGrad-${perfume.id}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FAF6F5" stop-opacity="0.5" />
          <stop offset="35%" stop-color="${liquidColor}" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#852256" stop-opacity="0.95" />
        </linearGradient>
        <linearGradient id="glassShimmer-${perfume.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.7" />
          <stop offset="30%" stop-color="#FFFFFF" stop-opacity="0.1" />
          <stop offset="70%" stop-color="#FFFFFF" stop-opacity="0" />
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.4" />
        </linearGradient>
      </defs>

      <g filter="url(#soloFlaconShadow-${perfume.id})">
        <!-- Spray Atomizer Neck -->
        <rect x="91" y="44" width="18" height="16" fill="url(#soloCapGrad-${perfume.id})" rx="1.5" />
        <rect x="88" y="56" width="24" height="6" fill="#F6D9D2" stroke="#B898C1" stroke-width="0.5" rx="1" />

        <!-- Heavy Faceted Cap -->
        <rect x="76" y="18" width="48" height="28" fill="url(#soloCapGrad-${perfume.id})" rx="3" stroke="#D8A9C1" stroke-width="0.8" />
        <circle cx="100" cy="32" r="5" fill="none" stroke="#FFFFFF" stroke-width="0.7" opacity="0.8" />
        <line x1="76" y1="38" x2="124" y2="38" stroke="#9283A9" stroke-width="0.6" opacity="0.6" />

        <!-- Heavy Base Crystal Flacon Body -->
        <rect x="52" y="60" width="96" height="150" rx="12" fill="#FFFFFF" fill-opacity="0.9" stroke="rgba(216, 169, 193, 0.7)" stroke-width="1.6" />
        
        <!-- Thick Solid Crystal Base Bottom -->
        <path d="M 54 185 L 146 185 L 146 198 Q 146 208 136 208 L 64 208 Q 54 208 54 198 Z" fill="#F2EAE9" opacity="0.7" />

        <!-- Liquid Chamber -->
        <rect x="58" y="76" width="84" height="114" rx="7" fill="url(#soloLiquidGrad-${perfume.id})" />

        <!-- Glass Prism Refraction Shimmer -->
        <rect x="54" y="62" width="92" height="144" rx="10" fill="url(#glassShimmer-${perfume.id})" pointer-events="none" />
        <line x1="62" y1="68" x2="62" y2="198" stroke="#FFFFFF" stroke-width="2" opacity="0.65" />
        <line x1="138" y1="68" x2="138" y2="198" stroke="#FFFFFF" stroke-width="1.2" opacity="0.4" />

        <!-- Luxury Flacon Label -->
        <rect x="65" y="104" width="70" height="56" rx="3" fill="#FFFFFF" stroke="#D8A9C1" stroke-width="0.9" opacity="0.98" />
        <rect x="67" y="106" width="66" height="52" rx="2" fill="none" stroke="rgba(236, 189, 198, 0.5)" stroke-width="0.5" />
        <text x="100" y="121" font-family="'GeosansLight', sans-serif" font-size="8.5" fill="#1F1726" text-anchor="middle" letter-spacing="2" font-weight="600">SCENTOZ</text>
        <line x1="80" y1="126" x2="120" y2="126" stroke="#D8A9C1" stroke-width="0.5" opacity="0.6" />
        <text x="100" y="137" font-family="'GeosansLight', sans-serif" font-size="7" fill="#852256" text-anchor="middle" letter-spacing="1" font-weight="600">${perfume.name}</text>
        <text x="100" y="147" font-family="'Avenir', sans-serif" font-size="3.8" fill="#584A63" text-anchor="middle" font-weight="600" letter-spacing="0.5">EXTRAIT DE PARFUM</text>
        <text x="100" y="154" font-family="'Avenir', sans-serif" font-size="3.2" fill="#9283A9" text-anchor="middle" letter-spacing="0.4">100 ML · 3.4 FL. OZ.</text>
      </g>
    </svg>
  `;
}

// View 3: Artisanal Coffret / Packaging Box Solo View
function generateBoxSoloSVG(perfume) {
  const boxColor = perfume.boxColor || '#3D2947';
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 230" width="100%" height="100%">
      <defs>
        <filter id="boxSoloShadow-${perfume.id}" x="-30%" y="-15%" width="160%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="12" flood-color="#4A223B" flood-opacity="0.28" />
        </filter>
        <linearGradient id="boxFoilGrad-${perfume.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#F6D9D2" />
          <stop offset="50%" stop-color="#ECBDC6" />
          <stop offset="100%" stop-color="#D8A9C1" />
        </linearGradient>
      </defs>

      <g filter="url(#boxSoloShadow-${perfume.id})">
        <!-- Main Rigid Box Body -->
        <rect x="42" y="24" width="116" height="182" rx="6" fill="${boxColor}" stroke="#D8A9C1" stroke-width="1.2" />
        
        <!-- Debossed Concentric Framing -->
        <rect x="48" y="30" width="104" height="170" rx="4" fill="none" stroke="rgba(246, 217, 210, 0.45)" stroke-width="0.8" />
        <rect x="52" y="34" width="96" height="162" rx="2" fill="none" stroke="rgba(216, 169, 193, 0.3)" stroke-width="0.5" />

        <!-- Crest Icon at Top -->
        <g transform="translate(100, 52) scale(0.7)">
          <circle cx="0" cy="0" r="12" fill="none" stroke="#F6D9D2" stroke-width="0.9" />
          <polygon points="0,-8 3,-2 8,-2 4,2 6,8 0,4 -6,8 -4,2 -8,-2 -3,-2" fill="#F6D9D2" opacity="0.9" />
        </g>

        <!-- Brand Title in Geo Sans Light -->
        <text x="100" y="78" font-family="'GeosansLight', sans-serif" font-size="12" fill="#F6D9D2" text-anchor="middle" letter-spacing="3" font-weight="400">SCENTOZ</text>
        <text x="100" y="90" font-family="'Avenir', sans-serif" font-size="4.8" fill="#ECBDC6" text-anchor="middle" letter-spacing="1.8" font-weight="600">MAISON DE PARFUM</text>
        <text x="100" y="98" font-family="'Avenir', sans-serif" font-size="3.6" fill="#B898C1" text-anchor="middle" letter-spacing="1.2">GRASSE & KANNAUJ</text>

        <!-- Center Inset Cartouche / Nameplate -->
        <rect x="56" y="110" width="88" height="42" rx="3" fill="rgba(255, 255, 255, 0.08)" stroke="url(#boxFoilGrad-${perfume.id})" stroke-width="0.8" />
        <text x="100" y="128" font-family="'GeosansLight', sans-serif" font-size="9" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.8" font-weight="600">${perfume.name}</text>
        <line x1="72" y1="134" x2="128" y2="134" stroke="#D8A9C1" stroke-width="0.6" opacity="0.6" />
        <text x="100" y="144" font-family="'Avenir', sans-serif" font-size="4.2" fill="#F6D9D2" text-anchor="middle" letter-spacing="0.8">${perfume.concentration.toUpperCase()}</text>

        <!-- Volume & Concentration -->
        <text x="100" y="168" font-family="'Avenir', sans-serif" font-size="4.5" fill="#D4CADB" text-anchor="middle" letter-spacing="1">100 ML · 3.4 FL. OZ.</text>
        <text x="100" y="177" font-family="'Avenir', sans-serif" font-size="3.8" fill="#ECBDC6" text-anchor="middle" letter-spacing="0.6">30% PURE EXTRAIT OIL</text>

        <!-- Artisanal Wax Seal Monogram at Bottom Right -->
        <circle cx="132" cy="184" r="10" fill="#852256" stroke="#F6D9D2" stroke-width="0.8" />
        <text x="132" y="187.5" font-family="'GeosansLight', sans-serif" font-size="6" fill="#F6D9D2" text-anchor="middle" font-weight="700">SCZ</text>
      </g>
    </svg>
  `;
}

// View 4: Harvest Botanicals & Scent Composition Plate
function generateBotanicalNotesSVG(perfume) {
  const topStr = perfume.topNotes.slice(0, 2).join(' · ');
  const heartStr = perfume.heartNotes.slice(0, 2).join(' · ');
  const baseStr = perfume.baseNotes.slice(0, 2).join(' · ');

  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 230" width="100%" height="100%">
      <defs>
        <filter id="botanicalShadow-${perfume.id}" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#584A63" flood-opacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#botanicalShadow-${perfume.id})">
        <!-- Parchment Card Canvas -->
        <rect x="22" y="16" width="156" height="198" rx="8" fill="#FAF6F5" stroke="#D8A9C1" stroke-width="1.2" />
        <rect x="26" y="20" width="148" height="190" rx="6" fill="none" stroke="rgba(236, 189, 198, 0.4)" stroke-width="0.6" />

        <!-- Header: Botanical Atelier -->
        <text x="100" y="38" font-family="'GeosansLight', sans-serif" font-size="8.5" fill="#1F1726" text-anchor="middle" letter-spacing="2" font-weight="600">OLFACTORY COMPOSITION</text>
        <text x="100" y="48" font-family="'Avenir', sans-serif" font-size="4.2" fill="#852256" text-anchor="middle" letter-spacing="1" font-weight="700">${perfume.family.toUpperCase()}</text>
        <line x1="45" y1="54" x2="155" y2="54" stroke="#D8A9C1" stroke-width="0.6" opacity="0.6" />

        <!-- 1. Top Notes Plate -->
        <rect x="32" y="62" width="136" height="34" rx="4" fill="#FFFFFF" stroke="rgba(216, 169, 193, 0.5)" stroke-width="0.7" />
        <circle cx="48" cy="79" r="8" fill="#F6D9D2" />
        <text x="48" y="82" font-family="'Avenir', sans-serif" font-size="6.5" fill="#852256" text-anchor="middle">✧</text>
        <text x="64" y="74" font-family="'Avenir', sans-serif" font-size="4" fill="#852256" font-weight="700" letter-spacing="0.8">TOP NOTES · 0-30 MINS</text>
        <text x="64" y="85" font-family="'GeosansLight', sans-serif" font-size="6.5" fill="#1F1726" font-weight="600">${topStr}</text>

        <!-- 2. Heart Notes Plate -->
        <rect x="32" y="104" width="136" height="34" rx="4" fill="#FFFFFF" stroke="rgba(216, 169, 193, 0.5)" stroke-width="0.7" />
        <circle cx="48" cy="121" r="8" fill="#ECBDC6" />
        <text x="48" y="124" font-family="'Avenir', sans-serif" font-size="6.5" fill="#852256" text-anchor="middle">❀</text>
        <text x="64" y="116" font-family="'Avenir', sans-serif" font-size="4" fill="#852256" font-weight="700" letter-spacing="0.8">HEART NOTES · 1-6 HOURS</text>
        <text x="64" y="127" font-family="'GeosansLight', sans-serif" font-size="6.5" fill="#1F1726" font-weight="600">${heartStr}</text>

        <!-- 3. Base Notes Plate -->
        <rect x="32" y="146" width="136" height="34" rx="4" fill="#FFFFFF" stroke="rgba(216, 169, 193, 0.5)" stroke-width="0.7" />
        <circle cx="48" cy="163" r="8" fill="#D8A9C1" />
        <text x="48" y="166" font-family="'Avenir', sans-serif" font-size="6.5" fill="#852256" text-anchor="middle">𖡡</text>
        <text x="64" y="158" font-family="'Avenir', sans-serif" font-size="4" fill="#852256" font-weight="700" letter-spacing="0.8">BASE NOTES · 14+ HOURS</text>
        <text x="64" y="169" font-family="'GeosansLight', sans-serif" font-size="6.5" fill="#1F1726" font-weight="600">${baseStr}</text>

        <!-- Bottom Concentration Stamp -->
        <rect x="38" y="188" width="124" height="16" rx="8" fill="#852256" />
        <text x="100" y="199" font-family="'Avenir', sans-serif" font-size="4" fill="#F6D9D2" text-anchor="middle" font-weight="600" letter-spacing="1">30% OIL CONCENTRATION · EXTRAIT</text>
      </g>
    </svg>
  `;
}

// 4. PRICE FORMATTING (INR - ₹)
function formatPrice(inrAmount) {
  return '₹' + Math.round(inrAmount || 0).toLocaleString('en-IN');
}

// 5. PRODUCT CARD HTML & MULTI-IMAGE SLIDER CONTROLLER
const SLIDE_TITLES = ['1/4 SET', '2/4 FLACON', '3/4 COFFRET', '4/4 BOTANICALS'];

function renderProductCardHTML(p) {
  return `
    <article class="product-showcase-card">
      <div class="card-visual-combo" data-product-id="${p.id}" data-active-slide="0">
        <!-- Multi-Image Track -->
        <div class="card-slider-wrapper">
          <div class="card-slider-track" id="cardSliderTrack-${p.id}">
            <div class="card-slide-item" data-index="0" title="${p.name} - Flacon & Coffret Set">
              ${generateComboFlaconSVG(p)}
            </div>
            <div class="card-slide-item" data-index="1" title="${p.name} - Extrait Flacon Detail">
              ${generateFlaconSoloSVG(p)}
            </div>
            <div class="card-slide-item" data-index="2" title="${p.name} - Artisanal Coffret">
              ${generateBoxSoloSVG(p)}
            </div>
            <div class="card-slide-item" data-index="3" title="${p.name} - Harvest Botanicals & Notes">
              ${generateBotanicalNotesSVG(p)}
            </div>
          </div>
        </div>

        <!-- Current View Badge -->
        <span class="card-slide-badge" id="cardSlideBadge-${p.id}">1/4 SET</span>

        <!-- Hover Swipe Hint -->
        <span class="card-swipe-hint"><i class="fas fa-hand-pointer"></i> Swipe Left</span>

        <!-- Hover Navigation Arrows -->
        <button type="button" class="card-arrow-btn card-arrow-prev" onclick="handleCardSlideNav(event, ${p.id}, -1)" aria-label="Previous Image">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button type="button" class="card-arrow-btn card-arrow-next" onclick="handleCardSlideNav(event, ${p.id}, 1)" aria-label="Next Image">
          <i class="fas fa-chevron-right"></i>
        </button>

        <!-- Slide Indicators / Pagination Dots -->
        <div class="card-slide-dots" id="cardSlideDots-${p.id}">
          <span class="card-dot active" onclick="handleCardDotClick(event, ${p.id}, 0)" title="Set View"></span>
          <span class="card-dot" onclick="handleCardDotClick(event, ${p.id}, 1)" title="Flacon View"></span>
          <span class="card-dot" onclick="handleCardDotClick(event, ${p.id}, 2)" title="Coffret View"></span>
          <span class="card-dot" onclick="handleCardDotClick(event, ${p.id}, 3)" title="Botanicals View"></span>
        </div>
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
}

function setProductCardSlide(productId, slideIndex) {
  const container = document.querySelector(`.card-visual-combo[data-product-id="${productId}"]`);
  if (!container) return;

  const totalSlides = 4;
  const newIndex = ((slideIndex % totalSlides) + totalSlides) % totalSlides;
  container.dataset.activeSlide = newIndex;

  const track = document.getElementById(`cardSliderTrack-${productId}`);
  if (track) {
    track.style.transform = `translateX(-${newIndex * 100}%)`;
  }

  const badge = document.getElementById(`cardSlideBadge-${productId}`);
  if (badge) {
    badge.textContent = SLIDE_TITLES[newIndex] || `${newIndex + 1}/${totalSlides}`;
  }

  const dotsWrap = document.getElementById(`cardSlideDots-${productId}`);
  if (dotsWrap) {
    const dots = dotsWrap.querySelectorAll('.card-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === newIndex);
    });
  }
}

function handleCardSlideNav(e, productId, direction) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const container = document.querySelector(`.card-visual-combo[data-product-id="${productId}"]`);
  if (!container) return;
  const current = parseInt(container.dataset.activeSlide || '0', 10);
  setProductCardSlide(productId, current + direction);
}

function handleCardDotClick(e, productId, targetIndex) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  setProductCardSlide(productId, targetIndex);
}

function initProductCardSliders() {
  document.querySelectorAll('.card-visual-combo').forEach(cardVisual => {
    if (cardVisual.dataset.sliderInitialized === 'true') return;
    cardVisual.dataset.sliderInitialized = 'true';

    const productId = parseInt(cardVisual.dataset.productId, 10);
    if (!productId) return;

    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMouseDown = false;
    let hasSwiped = false;

    // 1. Touch swipe gestures (Mobile & Touch screens)
    cardVisual.addEventListener('touchstart', (e) => {
      if (e.touches.length !== 1) return;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      currentX = startX;
      currentY = startY;
      hasSwiped = false;
    }, { passive: true });

    cardVisual.addEventListener('touchmove', (e) => {
      if (e.touches.length !== 1) return;
      currentX = e.touches[0].clientX;
      currentY = e.touches[0].clientY;
    }, { passive: true });

    cardVisual.addEventListener('touchend', () => {
      const diffX = currentX - startX;
      const diffY = currentY - startY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 28) {
        hasSwiped = true;
        if (diffX < 0) {
          handleCardSlideNav(null, productId, 1); // Swiped LEFT -> Next
        } else {
          handleCardSlideNav(null, productId, -1); // Swiped RIGHT -> Prev
        }
      }
    }, { passive: true });

    // 2. Mouse drag / swipe gestures (Desktop)
    cardVisual.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      if (e.target.closest('.card-arrow-btn') || e.target.closest('.card-dot')) return;

      isMouseDown = true;
      startX = e.clientX;
      currentX = startX;
      hasSwiped = false;
      cardVisual.style.cursor = 'grabbing';
    });

    cardVisual.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      currentX = e.clientX;
      if (Math.abs(currentX - startX) > 8) {
        hasSwiped = true;
      }
    });

    const finishMouseSwipe = () => {
      if (!isMouseDown) return;
      isMouseDown = false;
      cardVisual.style.cursor = 'grab';

      const diffX = currentX - startX;
      if (Math.abs(diffX) > 28) {
        hasSwiped = true;
        if (diffX < 0) {
          handleCardSlideNav(null, productId, 1); // Dragged LEFT -> Next
        } else {
          handleCardSlideNav(null, productId, -1); // Dragged RIGHT -> Prev
        }
      }
      setTimeout(() => { hasSwiped = false; }, 80);
    };

    cardVisual.addEventListener('mouseup', finishMouseSwipe);
    cardVisual.addEventListener('mouseleave', finishMouseSwipe);

    // 3. Trackpad horizontal swipe
    let wheelTimeout = null;
    cardVisual.addEventListener('wheel', (e) => {
      if (Math.abs(e.deltaX) > 25 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        if (!wheelTimeout) {
          if (e.deltaX > 25) {
            handleCardSlideNav(null, productId, 1);
          } else if (e.deltaX < -25) {
            handleCardSlideNav(null, productId, -1);
          }
          wheelTimeout = setTimeout(() => { wheelTimeout = null; }, 320);
        }
      }
    }, { passive: false });

    // 4. Container click handler: opens modal only if user did not swipe
    cardVisual.addEventListener('click', (e) => {
      if (hasSwiped) {
        e.stopPropagation();
        e.preventDefault();
        return;
      }
      if (e.target.closest('.card-arrow-btn') || e.target.closest('.card-dot')) {
        return;
      }
      openQuickViewModal(productId);
    });
  });
}

// 6. RENDER TRENDING PRODUCTS CAROUSEL
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

  track.innerHTML = visible.map(p => renderProductCardHTML(p)).join('');
  initProductCardSliders();
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
    showToast('Invalid privilege code. Please check and try again.');
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

// 9. QUICK VIEW MODAL (WITH MULTI-VIEW GALLERY SWITCHER)
function openQuickViewModal(perfumeId, activeImgIndex = 0) {
  const p = PERFUMES.find(item => item.id === perfumeId);
  if (!p) return;

  const modal = document.getElementById('quickViewModal');
  const content = document.getElementById('quickViewContent');
  if (!modal || !content) return;

  const imgViews = [
    { name: 'Set View', svg: generateComboFlaconSVG(p) },
    { name: 'Flacon Detail', svg: generateFlaconSoloSVG(p) },
    { name: 'Artisanal Coffret', svg: generateBoxSoloSVG(p) },
    { name: 'Harvest Botanicals', svg: generateBotanicalNotesSVG(p) }
  ];

  const currentSvg = imgViews[activeImgIndex]?.svg || generateComboFlaconSVG(p);

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; align-items: center;">
      <div>
        <div id="quickViewImgContainer" style="height: 320px; display: flex; align-items: center; justify-content: center; background: #FAF6F5; border-radius: 8px; border: 1px solid rgba(216, 169, 193, 0.4); margin-bottom: 12px; position: relative;">
          ${currentSvg}
        </div>
        <!-- Quick View Image Selector Buttons -->
        <div style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap;">
          ${imgViews.map((img, idx) => `
            <button 
              type="button" 
              onclick="openQuickViewModal(${p.id}, ${idx})" 
              style="padding: 5px 12px; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; border-radius: 14px; border: 1px solid ${idx === activeImgIndex ? '#852256' : 'rgba(216, 169, 193, 0.5)'}; background: ${idx === activeImgIndex ? '#852256' : '#FFFFFF'}; color: ${idx === activeImgIndex ? '#FFFFFF' : '#1F1726'}; cursor: pointer; transition: all 0.2s ease;"
            >
              ${img.name}
            </button>
          `).join('')}
        </div>
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

// 11. FILTER & SEARCH HELPERS
function filterByGender(gender) {
  const filtered = PERFUMES.filter(p => p.gender === gender || p.gender === 'unisex');
  const track = document.getElementById('trendingProductsTrack');
  if (track) {
    track.innerHTML = filtered.map(p => renderProductCardHTML(p)).join('');
    initProductCardSliders();
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
    track.innerHTML = filtered.map(p => renderProductCardHTML(p)).join('');
    initProductCardSliders();
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
      track.innerHTML = matched.map(p => renderProductCardHTML(p)).join('');
      initProductCardSliders();
    }
  }
}

function copyHeroCoupon(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`Privilege Code "${code}" copied to clipboard!`);
    }).catch(() => {
      showToast(`Privilege Code: ${code} applied at checkout`);
    });
  } else {
    showToast(`Privilege Code: ${code} applied at checkout`);
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

function toggleMobileSearchBar() {
  const bar = document.getElementById('headerSearchBar');
  if (bar) {
    bar.classList.toggle('active');
    if (bar.classList.contains('active')) {
      document.getElementById('headerSearchInput')?.focus();
    }
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('navLinksMenu');
  if (menu) {
    menu.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast('Swipe horizontal chips to explore collections');
  }
}

// Mobile Footer Accordion Toggle
function toggleFooterCol(btn) {
  if (window.innerWidth > 768) return;
  const col = btn.closest('.footer-nav-col');
  if (!col) return;
  const isOpen = col.classList.contains('open');
  col.classList.toggle('open');
  btn.setAttribute('aria-expanded', !isOpen);
}

// Window scroll listener: Sticky Header (Search Bar is non-sticky)
function checkHeaderSticky() {
  const header = document.getElementById('siteHeader');
  if (!header) return;
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', checkHeaderSticky, { passive: true });
window.addEventListener('resize', checkHeaderSticky);

// 13. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  checkHeaderSticky();
  loadCartFromStorage();
  updateCartBadge();
  renderTrendingProducts();
  renderCartDrawer();
});
