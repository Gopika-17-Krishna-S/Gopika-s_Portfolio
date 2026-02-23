import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import TechStack from './pages/TechStack';
import Contact from './pages/Contact';

/* Scroll to top on every route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all → redirect home */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        paddingTop: '5rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '8rem', fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1 }}>
        404
      </h1>
      <p style={{ color: '#71717a', fontSize: '1.05rem' }}>
        This page doesn't exist yet.
      </p>
      <a
        href="/"
        style={{
          fontSize: '0.875rem',
          fontWeight: 500,
          borderBottom: '1px solid #000',
          paddingBottom: '2px',
        }}
      >
        Go home ↗
      </a>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
