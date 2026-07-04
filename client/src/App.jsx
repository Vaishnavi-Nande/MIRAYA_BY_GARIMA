import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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

  // Fetch creations from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = activeCategory 
          ? `http://localhost:5000/api/products?category=${encodeURIComponent(activeCategory)}`
          : 'http://localhost:5000/api/products';
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
            name: "Zardozi Embroidered Raw Silk Lehenga",
            category: "Lehenga",
            tags: ["Weddings", "Engagements", "Receptions"],
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
            tags: ["Weddings", "Festivals", "Parties"],
            price: 24000,
            description: "A masterwork of heritage weaving, this Kanjeevaram features a deep burgundy body highlighted by pure gold zari borders.",
            image: "/images/products/saree_burgundy.png",
            sizes: ["Free Size"],
            details: ["Fabric: Mulberry Silk", "Zari: Gold threadwork"]
          }
        ];
        setProducts(mockFallback);
      }
    };
    fetchProducts();
  }, [activeCategory]);

  const showToast = (message) => {
    setToast({ message, show: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleSelectCategory = (category) => {
    setActiveCategory(category);
    // Smooth scroll down to catalog grid when filtering
    if (category) {
      const grid = document.getElementById('masterpieces');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    }
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky header navbar */}
      <Navbar 
        cartCount={totalCartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onSelectCategory={handleSelectCategory}
      />

      {/* Hero Panel */}
      <Hero onExploreClick={() => handleSelectCategory(null)} />

      {/* About narrative grid */}
      <ScrollReveal>
        <About />
      </ScrollReveal>

      {/* Interactive collections grid */}
      <ScrollReveal>
        <Collection 
          products={products}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
          onProductClick={handleProductClick}
        />
      </ScrollReveal>

      {/* Brand pillars */}
      <ScrollReveal>
        <Pillars />
      </ScrollReveal>

      {/* Premium burgundy footer */}
      <Footer />

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

      {/* Custom floating toast notification */}
      <div className={`floating-toast ${toast.show ? 'show' : ''}`}>
        {toast.message}
      </div>
    </div>
  );
}
