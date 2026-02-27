import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-[#1A1A1A] pt-16 pb-8">
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
                                { Icon: Github, href: 'https://github.com/Francotirador2023' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/in/jony-franco-163521358' },
                                { Icon: Mail, href: 'mailto:francojonysenati@gmail.com' },
                                { Icon: MessageCircle, href: 'https://wa.me/51928926775' }
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-[#141414] border border-[#222222] text-slate-400 hover:text-white hover:border-slate-500 transition-all hover:-translate-y-1"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Enlaces */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Empresa</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Sobre Nosotros', path: '/nosotros' },
                                { name: 'Especialidades', path: '/servicios' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-slate-400 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h4 className="font-semibold text-white mb-6">Servicios</h4>
                        <ul className="space-y-3">
                            {[
                                { name: 'Desarrollo Web', path: '/soluciones/transformacion-digital' },
                                { name: 'Aplicaciones Móviles', path: '/contacto' },
                                { name: 'Consultoría Cloud', path: '/soluciones/escalabilidad-global' },
                                { name: 'Diseño UI/UX', path: '/contacto' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path} className="text-slate-400 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-[#1A1A1A] flex flex-col items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Jofastsa Consulting. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};
