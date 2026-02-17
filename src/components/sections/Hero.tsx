import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* Premium Background Effects */}
            <div className="absolute inset-0">
                {/* Mesh Gradient Animado */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-violet-600/10 rounded-full blur-[110px] animate-bounce" style={{ animationDuration: '10s' }} />

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm text-sm text-slate-300 mb-6 hover:border-blue-500/50 transition-colors">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Disponible para nuevos proyectos
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        Construimos el <br />
                        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Futuro Digital
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
                        Consultoría experta en ingeniería de datos y arquitectura de software, transformando la complejidad técnica en valor estratégico para tu negocio.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Link to="/contacto" className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                            Empezar Proyecto
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/portafolio" className="px-8 py-4 rounded-full bg-slate-900 border border-slate-700 text-white font-semibold hover:bg-slate-800 transition-all hover:border-slate-500 text-center">
                            Ver Portafolio
                        </Link>
                    </div>

                    {/* Metric/Proof */}
                    <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-70">
                        {[
                            { label: 'Proyectos Entregados', value: '100+' },
                            { label: 'Años de Experiencia', value: '5+' },
                            { label: 'Clientes Felices', value: '80+' },
                            { label: 'Países Alcanzados', value: '12' },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                                <span className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
