const products = [
  // ==================== LEHENGA ====================
  {
    id: "mir-lh-01",
    name: "Zardozi Embroidered Raw Silk Lehenga (Crimson)",
    category: "Lehenga",
    tags: ["Weddings", "Engagements", "Receptions"],
    price: 28500,
    description: "Crafted in premium crimson raw silk, this bridal lehenga is adorned with meticulous hand-embroidered zardozi and dabka work. Designed to drape with royal volume, it is paired with a matching blouse and a sheer tissue dupatta.",
    image: "/images/products/lehenga_crimson.png",
    sizes: ["S", "M", "L"],
    details: [
      "Fabric: Premium Raw Silk; Dupatta: Sheer Gold Tissue",
      "Work: Hand-crafted Zardozi, Dabka, and Kasab embroidery",
      "Care: Dry Clean Only",
      "Includes: Lehenga panel skirt, unstitched blouse fabric, and dupatta"
    ]
  },
  {
    id: "mir-lh-02",
    name: "Banarasi Brocade Silk Lehenga Set (Champagne Gold)",
    category: "Lehenga",
    tags: ["Weddings", "Engagements"],
    price: 24500,
    description: "Woven in heritage Banarasi silk brocade with real gold zari work, this lehenga panels trace intricate floral creepers. Features a high-waisted band, coordinating raw silk choli, and a scalloped georgette dupatta.",
    image: "/images/products/lehenga_gold.png",
    sizes: ["XS", "S", "M", "L"],
    details: [
      "Fabric: Banarasi Katan Silk; Dupatta: Fine Georgette",
      "Work: Traditional gold zari jacquard weaving with hand-finished edges",
      "Care: Dry Clean Only",
      "Includes: Semi-stitched lehenga, choli fabric, and bordered dupatta"
    ]
  },
  {
    id: "mir-lh-03",
    name: "Chikankari Pastel Georgette Lehenga (Mint Blue)",
    category: "Lehenga",
    tags: ["Engagements", "Receptions"],
    price: 21000,
    description: "A breathable, romantic georgette lehenga featuring intricate Lucknowi chikankari embroidery in ivory threads, highlighted with delicate drop-pearls and silver sequins.",
    image: "/images/products/lehenga_pastel.png",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "Fabric: Premium Viscose Georgette; Lining: Soft Crepe",
      "Work: Lucknowi Chikankari with hand-sewn silver sequins",
      "Care: Gentle Dry Clean",
      "Includes: Fully stitched lehenga, padded blouse, and organza dupatta"
    ]
  },

  // ==================== SAREE ====================
  {
    id: "mir-sr-02",
    name: "Kanjeevaram Silk Saree in Royale Burgundy",
    category: "Saree",
    tags: ["Weddings", "Festivals", "Parties"],
    price: 24000,
    description: "A masterwork of heritage weaving, this Kanjeevaram features a deep burgundy body highlighted by pure gold zari borders. The pallu showcases traditional peacock and temple motifs, capturing timeless luxury.",
    image: "/images/products/saree_burgundy.png",
    sizes: ["Free Size"],
    details: [
      "Fabric: 100% Pure Mulberry Silk",
      "Zari: Pure Gold Zari Threadwork",
      "Care: Dry Clean Only",
      "Includes: 5.5m Saree and 80cm matching blouse piece"
    ]
  },
  {
    id: "mir-sr-03",
    name: "Organza Hand-Painted Floral Saree (Peach)",
    category: "Saree",
    tags: ["Festivals", "Parties"],
    price: 11500,
    description: "Ethereal translucent organza saree in soft peach, hand-painted with watercolor floral blooms by local artisans. Finished with a delicate hand-scalloped gold zari border.",
    image: "/images/products/saree_peach.png",
    sizes: ["Free Size"],
    details: [
      "Fabric: Premium Glass Organza",
      "Work: Custom hand-painting and scalloped gold embroidery",
      "Care: Dry Clean Only",
      "Includes: Saree and raw silk unstitched blouse piece"
    ]
  },
  {
    id: "mir-sr-04",
    name: "Banarasi Georgette Khaddi Saree (Emerald Green)",
    category: "Saree",
    tags: ["Weddings", "Festivals", "Parties"],
    price: 18900,
    description: "Woven in flowy georgette, this handloom Khaddi saree features all-over gold zari bootis and a heavy traditional border. Drapes effortlessly and flatters every silhouette.",
    image: "/images/products/saree_green.png",
    sizes: ["Free Size"],
    details: [
      "Fabric: Khaddi Georgette Silk",
      "Work: Hand-woven gold zari bootis and jacquard border",
      "Care: Dry Clean Only",
      "Includes: Saree and matching silk blouse fabric"
    ]
  },

  // ==================== ANARKALI SUIT ====================
  {
    id: "mir-ak-03",
    name: "Ivory & Gold Kalidar Anarkali Suit",
    category: "Anarkali Suit",
    tags: ["Wedding Functions", "Festivals"],
    price: 18500,
    description: "Tailored from premium georgette, this ivory Anarkali flows into 24 panels (kalis) trimmed with champagne gold gota patti work. Paired with churidar pants and a scalloped organza dupatta.",
    image: "/images/products/anarkali_ivory.png",
    sizes: ["XS", "S", "M", "L", "XL"],
    details: [
      "Fabric: Fine Georgette; Dupatta: Premium Organza",
      "Work: Gota Patti and hand-done Resham detailing",
      "Care: Gentle Dry Clean",
      "Includes: Anarkali Kurta, Churidar Pants, and Dupatta"
    ]
  },
  {
    id: "mir-ak-07",
    name: "Angrakha Silk Anarkali Set (Rust Orange)",
    category: "Anarkali Suit",
    tags: ["Wedding Functions", "Festivals"],
    price: 14200,
    description: "A classic side-tying Angrakha suit in rust chanderi silk, featuring dori ties with handcrafted fabric tassels and gold sequins outlining the neckline.",
    image: "/images/products/anarkali_rust.png",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "Fabric: Chanderi Silk; Dupatta: Cotton Silk",
      "Work: Neckline sequin borders and hand-crafted fabric tassels",
      "Care: Dry Clean Only",
      "Includes: Angrakha Kurta, Slim Pants, and Dupatta"
    ]
  },
  {
    id: "mir-ak-08",
    name: "Tiered Organza Anarkali Gown (Lavender)",
    category: "Anarkali Suit",
    tags: ["Wedding Functions", "Festivals"],
    price: 16900,
    description: "Flowing gracefully in pastel lavender organza, this tiered gown-style Anarkali features a hand-embroidered bodice with pearl clusters and a sheer back detail.",
    image: "/images/products/anarkali_lavender.png",
    sizes: ["XS", "S", "M", "L"],
    details: [
      "Fabric: Fine Silk Organza; Lining: Shantoon",
      "Work: Pearl beadwork and tonal thread embroidery",
      "Care: Dry Clean Only",
      "Includes: Tiered Anarkali and matching soft dupatta"
    ]
  },

  // ==================== SHARARA SUIT ====================
  {
    id: "mir-sh-04",
    name: "Mint Sage Silk Sharara Suit",
    category: "Sharara Suit",
    tags: ["Mehendi", "Sangeet", "Eid"],
    price: 16500,
    description: "Designed for effortless movement, this mint-sage set features a short silk kurta with delicate mirror and thread work, matching multi-tiered flared sharara pants, and a net dupatta.",
    image: "/images/products/sharara_mint.png",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "Fabric: Chanderi Silk; Lining: Soft Crepe",
      "Work: Authentic Mirror work and thread embroidery",
      "Care: Dry Clean Only",
      "Includes: Short Kurta, Sharara Pants, and Net Dupatta"
    ]
  },
  {
    id: "mir-sh-11",
    name: "Peplum Georgette Sharara Set (Dusty Rose)",
    category: "Sharara Suit",
    tags: ["Mehendi", "Sangeet"],
    price: 14800,
    description: "A dusty rose georgette peplum kurta paired with flared tiered sharara pants. The bodice is decorated with detailed resham embroidery and miniature mirror-work clusters.",
    image: "/images/products/sharara_rose.png",
    sizes: ["XS", "S", "M", "L", "XL"],
    details: [
      "Fabric: Faux Georgette; Dupatta: Net",
      "Work: Resham threadwork and small mirrors",
      "Care: Dry Clean Only",
      "Includes: Peplum top, Tiered Sharara, and Dupatta"
    ]
  },
  {
    id: "mir-sh-12",
    name: "Banarasi Brocade Sharara Set (Royal Blue)",
    category: "Sharara Suit",
    tags: ["Sangeet", "Eid"],
    price: 19200,
    description: "Exquisite royal blue silk set featuring a straight-cut brocade kurta and heavy Banarasi brocade sharara trousers, paired with a matching georgette dupatta.",
    image: "https://i.pinimg.com/1200x/90/61/30/90613060e3a73aa5a3983c136b60bb31.jpg",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "Fabric: Katan Silk Brocade; Dupatta: Georgette",
      "Work: Zari jacquard weaving and gota border linings",
      "Care: Dry Clean Only",
      "Includes: Brocade Kurta, Brocade Sharara, and Silk Dupatta"
    ]
  },

  // ==================== INDO-WESTERN GOWN ====================
  {
    id: "mir-iw-05",
    name: "Asymmetrical Draped Indo-Western Gown (Burgundy)",
    category: "Indo-Western Gown",
    tags: ["Reception", "Cocktail Party"],
    price: 22500,
    description: "A contemporary silhouette blending traditional craftsmanship with avant-garde design. Featuring a hand-draped satin bodice with burgundy sequin embroidery and an asymmetric floor-length fall.",
    image: "https://i.pinimg.com/1200x/5c/a0/69/5ca0691a6d945dac80b7455f5ccc7f0e.jpg",
    sizes: ["XS", "S", "M", "L"],
    details: [
      "Fabric: Premium Satin Crepe",
      "Work: Hand-sewn tonal sequins and glass beadwork",
      "Care: Dry Clean Only",
      "Includes: Pre-stitched draped gown"
    ]
  },
  {
    id: "mir-iw-15",
    name: "Caped Georgette Fusion Gown (Midnight Blue)",
    category: "Indo-Western Gown",
    tags: ["Reception", "Cocktail Party"],
    price: 18000,
    description: "Styled in deep midnight blue, this georgette gown is elevated by an attached sheer cape detailed with fine gold kardana beads and cutdana embroidery.",
    image: "https://i.pinimg.com/736x/59/79/6b/59796b8220b199415ee27f6ba8120e71.jpg",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "Fabric: Fine Georgette; Cape: Silk Organza",
      "Work: Cutdana and beadwork on the collar and cape borders",
      "Care: Dry Clean Only",
      "Includes: Pre-stitched gown with attached cape"
    ]
  },
  {
    id: "mir-iw-16",
    name: "Cowl Neck Draped Silk Gown (Emerald Green)",
    category: "Indo-Western Gown",
    tags: ["Reception", "Cocktail Party"],
    price: 19500,
    description: "Cut from heavy emerald green silk-crepe, this gown boasts a cowl neck drape and an elegant thigh-high slit, cinched with a detachable hand-embroidered gold belt.",
    image: "https://i.pinimg.com/736x/1e/3d/44/1e3d4409b2619e13275aefafb7fb023c.jpg",
    sizes: ["XS", "S", "M", "L"],
    details: [
      "Fabric: Silk Crepe Satin",
      "Work: Modern cowl drape with hand-embroidered belt accessories",
      "Care: Dry Clean Only",
      "Includes: Gown and embroidered belt"
    ]
  },

  // ==================== KURTI ====================
  {
    id: "mir-kt-06",
    name: "Champagne Gold Banarasi Silk Kurti",
    category: "Kurti",
    tags: ["Daily Wear", "Office", "Casual", "Festive"],
    price: 7500,
    description: "A versatile straight kurta woven with classic Banarasi bootis. Dress it down with linen pants for office wear, or style it up with gold jewelry for intimate festive gatherings.",
    image: "/images/products/kurti_gold.png",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "Fabric: Banarasi Chanderi Silk",
      "Work: Woven zari bootis and keyhole neckline",
      "Care: Hand wash cold with mild detergent or dry clean",
      "Includes: Kurta only"
    ]
  },
  {
    id: "mir-kt-19",
    name: "Hand Block Printed Indigo Kurti (Indigo Blue)",
    category: "Kurti",
    tags: ["Daily Wear", "Office", "Casual"],
    price: 5200,
    description: "Perfect for high-end casual wear, this indigo blue kurti is crafted from cotton-silk and hand-printed using traditional Dabu mud-resist block printing methods.",
    image: "https://i.pinimg.com/736x/82/7c/f3/827cf3fb9afa52920627c38f8cf4944e.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "Fabric: Handloom Cotton Silk",
      "Work: Traditional Dabu hand block printing",
      "Care: Gentle cold hand wash",
      "Includes: Kurta only"
    ]
  },
  {
    id: "mir-kt-20",
    name: "Chanderi Silk Straight Kurti (Lilac Purple)",
    category: "Kurti",
    tags: ["Office", "Casual", "Festive"],
    price: 6400,
    description: "A pastel lilac straight kurti in premium Chanderi silk, styled with a high mandarin collar and delicate mother-of-pearl button detailing down the front.",
    image: "https://i.pinimg.com/1200x/a7/de/60/a7de601f9f3e8ca839906f49b2c8f6e6.jpg",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "Fabric: Chanderi Silk; Lining: Soft Cotton",
      "Work: Fine pin-tuck details and mother-of-pearl buttons",
      "Care: Dry Clean Recommended",
      "Includes: Kurta only"
    ]
  },

  // ==================== SALWAR SUIT ====================
  {
    id: "mir-ss-07",
    name: "Peach Chanderi Salwar Suit",
    category: "Salwar Suit",
    tags: ["Daily Wear", "Festive Wear"],
    price: 9800,
    description: "Lightweight and breathable, this peach salwar suit is embellished with delicate hand block prints and fine kantha stitch detailing around the neckline. Complete with straight salwar trousers.",
    image: "/images/products/salwar_peach.png",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "Fabric: Pure Chanderi Silk Cotton",
      "Work: Hand block print with Kantha hand-embroidery",
      "Care: Dry Clean Recommended",
      "Includes: Kurta, Salwar, and printed Mulmul dupatta"
    ]
  },
  {
    id: "mir-ss-23",
    name: "Velvet Embroidered Salwar Suit (Royal Plum)",
    category: "Salwar Suit",
    tags: ["Festive Wear"],
    price: 14500,
    description: "A luxury winter salwar suit in royal plum velvet. The set features a straight kurta with heavy tilla embroidery at the neckline and sleeves, paired with semi-salwar pants.",
    image: "https://i.pinimg.com/1200x/26/ae/d7/26aed7080ae80ca664ed957a4be34c0a.jpg",
    sizes: ["S", "M", "L", "XL"],
    details: [
      "Fabric: Silk Velvet; Dupatta: Organza Zari",
      "Work: Metallic tilla embroidery",
      "Care: Dry Clean Only",
      "Includes: Velvet Kurta, Trousers, and Organza Dupatta"
    ]
  },
  {
    id: "mir-ss-24",
    name: "Pakistani Style Lawn Suit (Mint Blue)",
    category: "Salwar Suit",
    tags: ["Daily Wear", "Festive Wear"],
    price: 8500,
    description: "Inspired by classical Pakistani cuts, this mint blue lawn cotton suit is decorated with shadow-work thread embroidery, lace paneling, and wide-leg trousers.",
    image: "https://i.pinimg.com/736x/bd/84/91/bd84911ad152e8d15093091540259d90.jpg",
    sizes: ["S", "M", "L", "XL", "XXL"],
    details: [
      "Fabric: Premium Lawn Cotton",
      "Work: Lace inserts and shadow thread embroidery",
      "Care: Dry Clean or delicate machine wash",
      "Includes: Kurta, Trousers, and chiffon dupatta"
    ]
  },

  // ==================== CO-ORD SET ====================
  {
    id: "mir-cs-08",
    name: "Emerald Modern Ethnic Co-ord Set",
    category: "Co-ord Set",
    tags: ["Casual", "Travel", "Smart Casual"],
    price: 8900,
    description: "Perfect for travel and smart-casual affairs, this emerald green set features a relaxed-fit high-low silk tunic with elegant cuff embroidery, paired with tailored straight-leg trousers.",
    image: "https://i.pinimg.com/736x/df/c9/fa/dfc9faf818c64d15cf2d92bc4b3d9210.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    details: [
      "Fabric: Premium Satin Silk",
      "Work: Minimalist gold embroidery on cuffs and collar",
      "Care: Dry clean or cold machine wash on delicate cycle",
      "Includes: Tunic Top and Trousers"
    ]
  },
  {
    id: "mir-cs-27",
    name: "Printed Crepe Kaftan Co-ord (Terracotta)",
    category: "Co-ord Set",
    tags: ["Casual", "Travel"],
    price: 7200,
    description: "A relaxed kaftan-style tunic in terra cotta crepe, featuring an abstract geometric print and a gold-beaded V-neckline. Paired with wide-leg culotte pants.",
    image: "https://i.pinimg.com/736x/33/51/a3/3351a366457be608ed0ab7ac92327c80.jpg",
    sizes: ["Free Size"],
    details: [
      "Fabric: Fine Georgette Crepe",
      "Work: Abstract prints with hand-sewn beads at the collar",
      "Care: Hand wash cold or dry clean",
      "Includes: Kaftan Top and Culottes"
    ]
  },
  {
    id: "mir-cs-28",
    name: "Silk Draped Skirt Co-ord Set (Deep Maroon)",
    category: "Co-ord Set",
    tags: ["Travel", "Smart Casual"],
    price: 12500,
    description: "A highly elegant deep maroon set featuring an asymmetrical draped silk wrap skirt and a coordinating wrap-top with structured kimono sleeves.",
    image: "https://i.pinimg.com/1200x/05/ae/71/05ae71c7248ffb18e20849d251ffd644.jpg",
    sizes: ["XS", "S", "M", "L"],
    details: [
      "Fabric: 100% Satin Silk",
      "Work: Contemporary asymmetric drapery and tie-knot closure",
      "Care: Dry Clean Only",
      "Includes: Wrap Top and Draped Skirt"
    ]
  }
];

module.exports = products;
