import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Showcase from './components/Showcase';
import Collection from './components/Collection';
import Pillars from './components/Pillars';
import Footer from './components/Footer';
import ProductDetailModal from './components/ProductDetailModal';
import CartModal from './components/CartModal';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [cart, setCart] = useState([]);
  
  // Modals state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  
  // Floating Toast Notification
  const [toast, setToast] = useState({ message: '', show: false });

  const navigate = useNavigate();
  const location = useLocation();

  // Fetch creations from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = activeCategory 
          ? `/api/products?category=${encodeURIComponent(activeCategory)}`
          : '/api/products';
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.error("Error fetching products from backend");
        }
      } catch (err) {
        console.error("Network error fetching products, using client fallback", err);
        // Fallback mock items in case server is not run or network issues
        const mockFallback = [
          {
            id: "mir-lh-01",
            name: "Zardozi Embroidered Raw Silk Lehenga (Crimson)",
            category: "Lehenga",
            tags: ["Weddings", "Engagements"],
            price: 28500,
            description: "Crafted in premium crimson raw silk, this bridal lehenga is adorned with meticulous hand-embroidered zardozi and dabka work.",
            image: "/images/products/lehenga_crimson.png",
            sizes: ["S", "M", "L"],
            details: ["Fabric: Raw Silk", "Zardozi hand-embroidery"]
          },
          {
            id: "mir-sr-02",
            name: "Kanjeevaram Silk Saree in Royale Burgundy",
            category: "Saree",
            tags: ["Weddings", "Festivals"],
            price: 24000,
            description: "A masterwork of heritage weaving, this Kanjeevaram features a deep burgundy body highlighted by pure gold zari borders.",
            image: "/images/products/saree_burgundy.png",
            sizes: ["Free Size"],
            details: ["Fabric: Mulberry Silk", "Zari: Gold threadwork"]
          },
          {
            id: "mir-ak-01",
            name: "Ivory Floral Anarkali Set",
            category: "Anarkali Suit",
            tags: ["Festivals", "Parties"],
            price: 16500,
            description: "An elegant ivory silk Anarkali suit with hand-painted floral borders and fine dabka embroidery.",
            image: "/images/products/anarkali_ivory.png",
            sizes: ["S", "M", "L"],
            details: ["Fabric: Silk Georgette", "Dabka embroidery"]
          },
          {
            id: "mir-sh-01",
            name: "Mint Green Georgette Sharara Set",
            category: "Sharara Suit",
            tags: ["Festivals", "Parties"],
            price: 13800,
            description: "Mint green flared sharara pants paired with an embellished short kurtis and fine sequined border.",
            image: "/images/products/sharara_mint.png",
            sizes: ["S", "M", "L"],
            details: ["Fabric: Georgette", "Sequin borders"]
          },
          {
            id: "mir-iw-05",
            name: "Asymmetrical Draped Gown (Burgundy)",
            category: "Indo-Western Gown",
            tags: ["Reception", "Cocktail Party"],
            price: 22500,
            description: "A contemporary silhouette featuring a hand-draped satin bodice with burgundy sequin embroidery.",
            image: "/images/products/gown_burgundy.png",
            sizes: ["XS", "S", "M", "L"],
            details: ["Fabric: Satin Crepe", "Sequin work"]
          },
          {
            id: "mir-kt-06",
            name: "Champagne Gold Banarasi Silk Kurti",
            category: "Kurti",
            tags: ["Festive", "Casual"],
            price: 7500,
            description: "A versatile straight kurta woven with classic Banarasi gold zari bootis.",
            image: "/images/products/kurti_gold.png",
            sizes: ["S", "M", "L", "XL"],
            details: ["Fabric: Banarasi Chanderi Silk", "Zari bootis"]
          },
          {
            id: "mir-ss-07",
            name: "Peach Chanderi Salwar Suit",
            category: "Salwar Suit",
            tags: ["Daily Wear", "Festive"],
            price: 9800,
            description: "Lightweight peach salwar suit with hand block prints and fine kantha stitch detailing.",
            image: "/images/products/salwar_peach.png",
            sizes: ["S", "M", "L", "XL"],
            details: ["Fabric: Chanderi Silk Cotton", "Kantha stitch"]
          },
          {
            id: "mir-cs-08",
            name: "Emerald Modern Ethnic Co-ord Set",
            category: "Co-ord Set",
            tags: ["Travel", "Smart Casual"],
            price: 8900,
            description: "Relaxed-fit high-low silk tunic with cuff embroidery, paired with tailored straight-leg trousers.",
            image: "/images/products/coord_emerald.png",
            sizes: ["XS", "S", "M", "L"],
            details: ["Fabric: Satin Silk", "Gold embroidery"]
          }
        ];
        setProducts(mockFallback);
      }
    };
    fetchProducts();
  }, []);




  const showToast = (message) => {
    setToast({ message, show: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleSelectCategory = (category) => {
    if (category) {
      navigate(`/collections/${category.toLowerCase().replace(/ /g, '-')}`);
    } else {
      navigate('/collections');
    }
  };

  const handleHomeSelectCategory = (category) => {
    setActiveCategory(category);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsProductDetailOpen(true);
  };

  // Add item to bag
  const handleAddToBag = (product, size) => {
    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex(item => item.id === product.id && item.size === size);
      
      if (existingIdx > -1) {
        const updated = [...prevCart];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [...prevCart, { ...product, size, quantity: 1 }];
      }
    });

    showToast(`Added "${product.name} (${size})" to your shopping bag.`);
  };

  // Update item quantity in bag
  const handleUpdateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    setCart((prevCart) => 
      prevCart.map((item) => 
        (item.id === id && item.size === size) ? { ...item, quantity } : item
      )
    );
  };

  // Remove item from bag
  const handleRemoveItem = (id, size) => {
    setCart((prevCart) => prevCart.filter(item => !(item.id === id && item.size === size)));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="overflow-x-hidden" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      <ScrollToTop />
      {/* Sticky header navbar */}
      <Navbar 
        cartCount={totalCartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onSelectCategory={handleSelectCategory}
      />

      <Routes>
        <Route path="/" element={
          <>
            <Hero onExploreClick={() => {
              const grid = document.getElementById('explore-collections');
              if (grid) grid.scrollIntoView({ behavior: 'smooth' });
            }} />
            <ScrollReveal>
              <About />
            </ScrollReveal>
            <ScrollReveal>
              <Showcase products={products} />
            </ScrollReveal>
            <ScrollReveal>
              <Pillars />
            </ScrollReveal>
          </>
        } />

        <Route path="/collections" element={
          <AllCollectionsRouteWrapper 
            products={products}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            onProductClick={handleProductClick}
            setActiveCategory={setActiveCategory}
          />
        } />

        <Route path="/collections/:categorySlug" element={
          <CollectionsRouteWrapper 
            products={products}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
            onProductClick={handleProductClick}
            setActiveCategory={setActiveCategory}
          />
        } />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/contact-us" element={null} />
      </Routes>

      {/* Premium burgundy footer */}
      {location.pathname.toLowerCase() !== '/about' && location.pathname.toLowerCase() !== '/contact' && <Footer />}

      {/* Modals */}
      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isProductDetailOpen}
        onClose={() => setIsProductDetailOpen(false)}
        onAddToBag={handleAddToBag}
      />

      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* WhatsApp floating button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center cursor-pointer pointer-events-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

      {/* Custom floating toast notification */}
      <div className={`floating-toast ${toast.show ? 'show' : ''}`}>
        {toast.message}
      </div>
    </div>
  );
}

// Scroll to top on navigation path change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Wrapper for all collections
function AllCollectionsRouteWrapper({ setActiveCategory, products, activeCategory, onSelectCategory, onProductClick }) {
  useEffect(() => {
    setActiveCategory(null);
  }, [setActiveCategory]);

  return (
    <ScrollReveal>
      <Collection 
        products={products}
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        onProductClick={onProductClick}
      />
    </ScrollReveal>
  );
}

// Wrapper for filtered collection slugs
function CollectionsRouteWrapper({ products, activeCategory, onSelectCategory, onProductClick, setActiveCategory }) {
  const { categorySlug } = useParams();

  const normalize = (str) => {
    if (!str) return '';
    return str
      .toLowerCase()
      .replace(/[- ]/g, '')
      .replace(/suits?$/, '')
      .replace(/s$/, '');
  };

  useEffect(() => {
    const collectionsList = [
      { name: 'Lehenga', value: 'Lehenga' },
      { name: 'Saree', value: 'Saree' },
      { name: 'Anarkali Suit', value: 'Anarkali Suit' },
      { name: 'Sharara Suit', value: 'Sharara Suit' },
      { name: 'Indo-Western Gown', value: 'Indo-Western Gown' },
      { name: 'Kurti', value: 'Kurti' },
      { name: 'Salwar Suit', value: 'Salwar Suit' },
      { name: 'Co-ord Set', value: 'Co-ord Set' }
    ];
    const normDecoded = normalize(decodeURIComponent(categorySlug || ''));
    const matched = collectionsList.find(c => {
      return normalize(c.value) === normDecoded || normalize(c.name) === normDecoded;
    });
    if (matched) {
      setActiveCategory(matched.value);
    } else {
      setActiveCategory(null);
    }
  }, [categorySlug, setActiveCategory]);

  const filteredProducts = products.filter((item) => {
    const normSlug = normalize(categorySlug || '');
    const normCategory = normalize(item.category);
    const normCollection = normalize(item.collection);
    return normCategory === normSlug || normCollection === normSlug;
  });

  return (
    <ScrollReveal>
      <Collection 
        products={filteredProducts}
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        onProductClick={onProductClick}
      />
    </ScrollReveal>
  );
}
