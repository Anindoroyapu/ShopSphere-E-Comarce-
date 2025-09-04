import React from 'react';
import { createRoot } from 'react-dom/client';

// --- DUMMY DATA ---
const products = [
  { id: 1, name: 'Classic White Tee', price: '$29.99', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop' },
  { id: 2, name: 'Denim Jacket', price: '$89.99', image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=1887&auto=format&fit=crop' },
  { id: 3, name: 'Leather Boots', price: '$120.00', image: 'https://images.unsplash.com/photo-1599360851183-529288181678?q=80&w=1887&auto=format&fit=crop' },
  { id: 4, name: 'Stylish Sunglasses', price: '$45.50', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1780&auto=format&fit=crop' },
  { id: 5, name: 'Beige Trench Coat', price: '$150.00', image: 'https://images.unsplash.com/photo-1572552839234-1b1574c84a5a?q=80&w=1887&auto=format&fit=crop' },
  { id: 6, name: 'Black Dress Pants', price: '$75.00', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1887&auto=format&fit=crop' },
  { id: 7, name: 'Modern Wristwatch', price: '$250.00', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop' },
  { id: 8, name: 'Knit Beanie', price: '$24.99', image: 'https://images.unsplash.com/photo-1576214332994-3a9d18b2ea94?q=80&w=1887&auto=format&fit=crop' },
];

// --- SVG ICONS ---
const LogoIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
);
const UserIcon = () => <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const CartIcon = () => (
  <div className="cart-icon">
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    <div className="cart-badge">3</div>
  </div>
);

// --- COMPONENTS ---
const Header = () => (
  <header className="header">
    <div className="container">
      <a href="#" className="logo">
        <LogoIcon />
        ShopSphere
      </a>
      <nav className="nav-links">
        <a href="#" className="active">Home</a>
        <a href="#">Shop</a>
        <a href="#">Categories</a>
        <a href="#">Contact</a>
      </nav>
      <div className="header-icons">
        <UserIcon />
        <CartIcon />
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <h1>Discover Your Style</h1>
      <p>Browse our new collection and find your next favorite outfit.</p>
      <a href="#" className="btn">Shop Now</a>
    </div>
  </section>
);

const ProductCard = ({ product }) => (
  <div className="product-card">
    <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
        <a href="#" className="btn add-to-cart-btn">Add to Cart</a>
    </div>
    <div className="product-info">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">{product.price}</p>
    </div>
  </div>
);

const ProductGrid = () => (
  <section className="products-section">
    <div className="container">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
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


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);