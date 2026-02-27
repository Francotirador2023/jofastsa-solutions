import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
        { name: 'Portafolio', path: '/portafolio' },
        { name: 'Nosotros', path: '/nosotros' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#1A1A1A]'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/logo.png"
                            alt="Jofastsa Solutions"
                            className="h-12 w-auto group-hover:scale-105 transition-transform drop-shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                        />
                        <span className="text-xl font-bold text-white tracking-wide hidden sm:block">
                            JOFASTSA CONSULTING
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-slate-300 transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`} />
                                </Link>
                            );
                        })}
                        <Link to="/contacto" className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-white text-slate-900 text-sm font-medium transition-all shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                            Cotizar Proyecto
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0A0A0A] border-b border-[#1A1A1A]"
                    >
                        <div className="px-4 py-8 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg font-medium text-slate-300 hover:text-white hover:pl-2 transition-all"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <button className="w-full py-3 rounded-xl bg-slate-100 hover:bg-white text-slate-900 font-medium transition-colors">
                                    Cotizar Proyecto
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
