import React, { useState } from 'react';

export default function CartModal({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [customer, setCustomer] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [orderResult, setOrderResult] = useState(null);

  if (!isOpen) return null;

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;

    setLoading(true);
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartItems,
          customerDetails: customer
        })
      });

      const data = await res.ok ? await res.json() : null;
      if (res.ok && data) {
        setOrderResult(data);
        onClearCart();
        setCustomer({ name: '', email: '' });
      } else {
        alert(data ? data.message : 'Error processing order');
      }
    } catch (err) {
      console.error(err);
      alert('Could not submit the order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`cart-drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div 
        className={`cart-drawer ${isOpen ? 'open' : ''}`} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="cart-drawer-header" style={{ 
          padding: '24px', 
          backgroundColor: 'var(--accent-burgundy)', 
          color: 'var(--bg-warm-ivory)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid var(--gold-border)'
        }}>
          <h3 style={{ color: 'var(--bg-warm-ivory)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Shopping Bag
          </h3>
          <button 
            onClick={onClose} 
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'var(--bg-warm-ivory)', 
              fontSize: '24px', 
              cursor: 'pointer' 
            }}
          >
            &times;
          </button>
        </div>

        {/* Order Completion Screen */}
        {orderResult ? (
          <div style={{ padding: '40px 30px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '24px', flexGrow: 1, justifyContent: 'center' }}>
            <div style={{ color: 'var(--highlight-gold)', fontSize: '48px' }}>✓</div>
            <h3 style={{ color: 'var(--accent-burgundy)', fontSize: '28px', fontWeight: '300', textTransform: 'uppercase' }}>
              Order Placed
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              {orderResult.message}
            </p>
            <div style={{ 
              border: '1px solid var(--gold-border)', 
              padding: '20px', 
              backgroundColor: 'rgba(198, 164, 106, 0.05)',
              margin: '10px 0'
            }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                Order Reference Code
              </div>
              <div style={{ fontSize: '20px', fontFamily: 'var(--font-heading)', color: 'var(--accent-burgundy)' }}>
                {orderResult.orderId}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '16px', marginBottom: '4px' }}>
                Est. Handcrafted Delivery
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-dark)' }}>
                {orderResult.deliveryDays} Business Days
              </div>
            </div>
            <button 
              className="cta-button" 
              onClick={() => { setOrderResult(null); onClose(); }}
              style={{ marginTop: '20px' }}
            >
              <span>Back to Boutique</span>
            </button>
          </div>
        ) : (
          /* Normal Cart Items & Checkout Form */
          <>
            {/* Cart Items List */}
            <div className="cart-drawer-body" style={{ flexGrow: 1, overflowY: 'auto', padding: '24px' }}>
              {cartItems.length === 0 ? (
                <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '14px', letterSpacing: '0.05em' }}>
                    Your shopping bag is empty.
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {cartItems.map((item) => (
                    <div 
                      key={`${item.id}-${item.size}`} 
                      style={{ 
                        display: 'flex', 
                        gap: '16px', 
                        borderBottom: '1px solid rgba(198, 164, 106, 0.15)', 
                        paddingBottom: '20px' 
                      }}
                    >
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        style={{ width: '80px', height: '100px', objectFit: 'cover', border: '1px solid var(--gold-border)' }}
                      />
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                        <div>
                          <h4 style={{ fontSize: '16px', fontWeight: '400', marginBottom: '4px' }}>{item.name}</h4>
                          <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)' }}>
                            Size: <span style={{ color: 'var(--text-dark)', fontWeight: '600' }}>{item.size}</span>
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          {/* Quantity Selector */}
                          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--gold-border)' }}>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.size, item.quantity - 1)}
                              style={{ border: 'none', background: 'none', padding: '4px 10px', cursor: 'pointer' }}
                            >
                              -
                            </button>
                            <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', padding: '0 8px' }}>
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                              style={{ border: 'none', background: 'none', padding: '4px 10px', cursor: 'pointer' }}
                            >
                              +
                            </button>
                          </div>
                          
                          {/* Price & Remove */}
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent-burgundy)', marginBottom: '4px' }}>
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </div>
                            <span 
                              onClick={() => onRemoveItem(item.id, item.size)}
                              style={{ 
                                fontFamily: 'var(--font-body)', 
                                fontSize: '11px', 
                                color: 'var(--text-muted)', 
                                textDecoration: 'underline', 
                                cursor: 'pointer' 
                              }}
                            >
                              Remove
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer & Checkout Form */}
            {cartItems.length > 0 && (
              <div className="cart-drawer-footer" style={{ 
                padding: '24px', 
                borderTop: '1px solid var(--gold-border)', 
                backgroundColor: 'rgba(198, 164, 106, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                {/* Total */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Subtotal
                  </span>
                  <span style={{ fontSize: '20px', fontWeight: '600', color: 'var(--accent-burgundy)' }}>
                    ₹{total.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Checkout Fields */}
                <form onSubmit={handleCheckoutSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.05em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      required
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      placeholder="e.g. Garima Sharma"
                      style={{
                        padding: '10px',
                        border: '1px solid var(--gold-border)',
                        backgroundColor: 'var(--bg-warm-ivory)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <label style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.05em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      value={customer.email}
                      onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                      placeholder="e.g. client@domain.com"
                      style={{
                        padding: '10px',
                        border: '1px solid var(--gold-border)',
                        backgroundColor: 'var(--bg-warm-ivory)',
                        fontFamily: 'var(--font-body)',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="cta-button" 
                    disabled={loading}
                    style={{ width: '100%', marginTop: '8px' }}
                  >
                    <span>{loading ? 'Processing Order...' : 'Request Handcrafted Delivery'}</span>
                  </button>
                </form>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
