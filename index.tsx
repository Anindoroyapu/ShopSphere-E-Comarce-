import React, { useState, useContext, createContext, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- DUMMY DATA ---
const products = [
  { id: 1, name: 'Classic White Tee', price: 29.99, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop', category: 'Apparel' },
  { id: 2, name: 'Denim Jacket', price: 89.99, image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1887&auto=format&fit=crop', category: 'Jackets' },
  { id: 3, name: 'Leather Boots', price: 120.00, image: 'https://images.unsplash.com/photo-1599360851183-529288181678?q=80&w=1887&auto=format&fit=crop', category: 'Footwear' },
  { id: 4, name: 'Stylish Sunglasses', price: 45.50, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop', category: 'Accessories' },
  { id: 5, name: 'Beige Trench Coat', price: 150.00, image: 'https://images.unsplash.com/photo-1572552839234-1b1574c84a5a?q=80&w=1887&auto=format&fit=crop', category: 'Jackets' },
  { id: 6, name: 'Black Dress Pants', price: 75.00, image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop', category: 'Apparel' },
  { id: 7, name: 'Modern Wristwatch', price: 250.00, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop', category: 'Accessories' },
  { id: 8, name: 'Knit Beanie', price: 24.99, image: 'https://images.unsplash.com/photo-1576214332994-3a9d18b2ea94?q=80&w=1887&auto=format&fit=crop', category: 'Accessories' },
];

// --- CART CONTEXT ---
const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const cart = {
    items: cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    itemCount: cartItems.reduce((total, item) => total + item.quantity, 0),
    totalPrice: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
  };

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};


// --- SVG ICONS ---
const LogoIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
);
const UserIcon = () => <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const CartIcon = () => {
  const { itemCount } = useContext(CartContext);
  return (
    <div className="cart-icon">
      <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      {itemCount > 0 && <div className="cart-badge">{itemCount}</div>}
    </div>
  );
};

// --- CORE COMPONENTS ---
const Header = ({ activeRoute }) => (
  <header className="header">
    <div className="container">
      <a href="#" className="logo">
        <LogoIcon />
        ShopSphere
      </a>
      <nav className="nav-links">
        <a href="#" className={activeRoute === 'home' ? 'active' : ''}>Home</a>
        <a href="#shop" className={activeRoute === 'shop' ? 'active' : ''}>Shop</a>
        <a href="#categories" className={activeRoute === 'categories' ? 'active' : ''}>Categories</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-icons">
        <UserIcon />
        <a href="#cart" aria-label="View shopping cart">
            <CartIcon />
        </a>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-content">
        <div className="footer-column">
          <h4>About ShopSphere</h4>
          <p>Your one-stop shop for the latest trends in fashion. We are committed to providing high-quality products and excellent customer service.</p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping & Returns</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Follow Us</h4>
          <p>Stay connected with us on social media for the latest updates and offers.</p>
          <div className="social-icons">
             <a href="#" aria-label="Facebook">FB</a>
             <a href="#" aria-label="Twitter">TW</a>
             <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopSphere. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="product-card">
      <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
          <button onClick={() => addToCart(product)} className="btn add-to-cart-btn">Add to Cart</button>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

const ProductGrid = ({ items, title }) => (
  <section className="products-section">
    <div className="container">
      <h2 className="section-title">{title}</h2>
      <div className="product-grid">
        {items.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

// --- PAGE COMPONENTS ---
const HomePage = () => (
  <>
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Your Style</h1>
        <p>Browse our new collection and find your next favorite outfit.</p>
        <a href="#shop" className="btn">Shop Now</a>
      </div>
    </section>
    <ProductGrid items={products.slice(0, 4)} title="Featured Products" />
  </>
);

const ShopPage = () => <ProductGrid items={products} title="All Products" />;

const CategoriesPage = () => {
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="container page-container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-filters">
            {categories.map(category => (
                <button
                    key={category}
                    className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
        <ProductGrid items={filteredProducts} title={activeCategory} />
    </div>
  );
};

const CartPage = () => {
    const { items, updateQuantity, removeFromCart, totalPrice } = useContext(CartContext);

    if (items.length === 0) {
        return (
            <div className="container page-container text-center">
                <h2 className="section-title">Your Cart is Empty</h2>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <a href="#shop" className="btn" style={{marginTop: '20px'}}>Continue Shopping</a>
            </div>
        );
    }

    return (
        <div className="container page-container">
            <h2 className="section-title">Your Shopping Cart</h2>
            <div className="cart-layout">
                <div className="cart-items">
                    {items.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>${item.price.toFixed(2)}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                            </div>
                            <div className="cart-item-actions">
                                <p className="cart-item-total">${(item.price * item.quantity).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                     <div className="summary-row">
                        <span>Shipping</span>
                        <span>FREE</span>
                    </div>
                     <div className="summary-row total-row">
                        <span>Total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <h3 className="checkout-title">Checkout</h3>
                    <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john.doe@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Shipping Address</label>
                            <input type="text" id="address" placeholder="123 Main St" required />
                        </div>
                        <button type="submit" className="btn checkout-btn">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};


const App = () => {
  const [route, setRoute] = useState(window.location.hash.substring(1) || 'home');

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.substring(1) || 'home');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch(route) {
        case 'shop':
            return <ShopPage />;
        case 'categories':
            return <CategoriesPage />;
        case 'cart':
            return <CartPage />;
        default:
            return <HomePage />;
    }
  };

  return (
    <CartProvider>
      <Header activeRoute={route} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </CartProvider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
