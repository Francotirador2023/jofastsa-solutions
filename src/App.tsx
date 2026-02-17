import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Features } from './components/sections/Features';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';
import { SEOHead } from './components/seo/SEOHead';
import { About } from './pages/About';
import { Login } from './pages/auth/Login';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import { Overview } from './pages/dashboard/Overview';
import { Invoices } from './pages/dashboard/Invoices';
import { SolutionDetail } from './pages/solutions/SolutionDetail';
import { CaseStudy } from './pages/portfolio/CaseStudy';
import { Projects } from './pages/dashboard/Projects';
import { Support } from './pages/dashboard/Support';
import { Settings } from './pages/dashboard/Settings';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <SEOHead />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <div className="min-h-screen bg-slate-950 text-slate-50 relative selection:bg-blue-500/30 selection:text-blue-200">
              <Navbar />
              <main>
                <Hero />
                <Services />
                <Features />
                <Portfolio />
                <Contact />
              </main>
              <Footer />
            </div>
          } />

          <Route path="/portafolio" element={<div className="bg-slate-950 min-h-screen"><Navbar /><div className="pt-20"><Portfolio /><Contact /></div><Footer /></div>} />
          <Route path="/servicios" element={<div className="bg-slate-950 min-h-screen"><Navbar /><div className="pt-20"><Services /><Contact /></div><Footer /></div>} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<div className="bg-slate-950 min-h-screen"><Navbar /><div className="pt-20"><Contact /></div><Footer /></div>} />
          <Route path="/soluciones/:slug" element={<SolutionDetail />} />
          <Route path="/portafolio/:slug" element={<CaseStudy />} />

          {/* Auth & Dashboard Routes */}
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={
            <DashboardLayout>
              <Overview />
            </DashboardLayout>
          } />

          <Route path="/dashboard/proyectos" element={
            <DashboardLayout>
              <Projects />
            </DashboardLayout>
          } />

          <Route path="/dashboard/facturacion" element={
            <DashboardLayout>
              <Invoices />
            </DashboardLayout>
          } />

          <Route path="/dashboard/soporte" element={
            <DashboardLayout>
              <Support />
            </DashboardLayout>
          } />

          <Route path="/dashboard/configuracion" element={
            <DashboardLayout>
              <Settings />
            </DashboardLayout>
          } />

          {/* Catch all */}
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">404 - Not Found</div>} />

        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
