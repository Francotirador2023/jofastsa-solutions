import { Github, Twitter, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                            <h3 className="text-2xl font-bold text-white">JOFASTSA CONSULTING</h3>
                        </div>
                        <p className="text-slate-400 max-w-sm">
                            Transformamos ideas complejas en soluciones digitales elegantes y escalables.
                            Tu socio tecnológico de confianza.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[
                                { Icon: Github, href: '#' },
                                { Icon: Twitter, href: '#' },
                                { Icon: Linkedin, href: '#' },
                                { Icon: Mail, href: 'mailto:francojonysenati@gmail.com' },
                                { Icon: MessageCircle, href: 'https://wa.me/51928926775' }
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 transition-all hover:-translate-y-1"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Empresa</h4>
                        <ul className="space-y-3">
                            {['Sobre Nosotros', 'Carreras', 'Blog', 'Prensa'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Servicios</h4>
                        <ul className="space-y-3">
                            {['Desarrollo Web', 'Aplicaciones Móviles', 'Consultoría Cloud', 'Diseño UI/UX'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Jofastsa Consulting. Todos los derechos reservados.</p>
                    <div className="flex gap-8">
                        <Link to="#" className="hover:text-slate-300">Privacidad</Link>
                        <Link to="#" className="hover:text-slate-300">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
