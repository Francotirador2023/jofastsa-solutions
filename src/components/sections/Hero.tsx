import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-20">
            {/* Premium Minimalist Background Effects */}
            <div className="absolute inset-0">
                {/* Resplandor radial detrás del texto principal (Indigo/Violeta sutil 10%) */}
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

                {/* Grid Arquitectónico (blanco al 3%) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414]/50 border border-[#27272A]/50 backdrop-blur-sm text-sm text-[#A1A1AA] mb-6 hover:border-indigo-500/30 transition-colors">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                        Disponible para nuevos proyectos
                        <ChevronRight className="w-4 h-4 text-[#A1A1AA]" />
                    </div>

                    {/* Heading (Geometría Typography Premium) */}
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#FAFAFA] mb-6" style={{ letterSpacing: '-0.02em' }}>
                        Ingeniería de Software <br />
                        <span className="font-light text-[#A1A1AA]">
                            para Escalar
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-[1.1rem] leading-8 text-[#A1A1AA]">
                        Arquitecturas cloud y soluciones a medida que transforman la complejidad técnica en ventaja competitiva corporativa.
                    </p>

                    {/* CTA Buttons - Premium Hover States */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Link to="/contacto" className="px-8 py-4 rounded-full bg-[#FAFAFA] text-[#0A0A0A] font-medium hover:bg-white shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 flex items-center justify-center gap-2 group">
                            Agendar Consultoría
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                        <Link to="/portafolio" className="px-8 py-4 rounded-full bg-[#18181B] border border-[#27272A] text-[#A1A1AA] font-medium hover:text-[#FAFAFA] hover:bg-[#27272A] transition-all duration-300 flex items-center justify-center">
                            Ver Arquitecturas
                        </Link>
                    </div>

                    {/* Premium Infrastructure Metrics */}
                    <div className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-80 border-t border-[#1A1A1A] mt-12">
                        {[
                            { label: 'Uptime Garantizado', value: '99.9%' },
                            { label: 'Tiempo de Respuesta', value: '<50ms' },
                            { label: 'Infraestructura', value: 'Cloud-Native' },
                            { label: 'Soporte Nivel 3', value: '24/7' },
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <span className="text-2xl font-medium tracking-tight text-[#FAFAFA]">{stat.value}</span>
                                <span className="text-[0.8rem] text-[#A1A1AA] font-mono tracking-widest uppercase">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
