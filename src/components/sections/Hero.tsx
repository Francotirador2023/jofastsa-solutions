import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* Premium Minimalist Background Effects */}
            <div className="absolute inset-0">
                {/* Sutil resplandor superior (como una luz cenital suave) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

                {/* Grid Arquitectónico (limpio y constante) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />
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

                    {/* Heading (Geometría Typography Premium) */}
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
                        Ingeniería de Software <br />
                        <span className="font-light text-slate-400">
                            para Escalar
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-[1.1rem] leading-8 text-slate-400">
                        Arquitecturas cloud y soluciones a medida que transforman la complejidad técnica en ventaja competitiva corporativa.
                    </p>

                    {/* CTA Buttons - Premium Hover States */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Link to="/contacto" className="px-8 py-4 rounded-full bg-slate-100 text-slate-900 font-medium hover:bg-white shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 flex items-center justify-center gap-2 group">
                            Agendar Consultoría
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link to="/portafolio" className="px-8 py-4 rounded-full bg-transparent border border-slate-800 text-slate-300 font-medium hover:text-white hover:bg-slate-900 transition-all duration-300 flex items-center justify-center">
                            Ver Arquitecturas
                        </Link>
                    </div>

                    {/* Premium Infrastructure Metrics */}
                    <div className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-80 border-t border-slate-900 mt-12">
                        {[
                            { label: 'Uptime Garantizado', value: '99.9%' },
                            { label: 'Tiempo de Respuesta', value: '<50ms' },
                            { label: 'Infraestructura', value: 'Cloud-Native' },
                            { label: 'Soporte Nivel 3', value: '24/7' },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <span className="text-2xl font-medium tracking-tight text-white">{stat.value}</span>
                                <span className="text-[0.8rem] text-slate-500 font-mono tracking-widest uppercase">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
