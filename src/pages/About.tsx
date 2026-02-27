import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SEOHead } from '../components/seo/SEOHead';
import jonyImg from '../assets/jony.png';

export const About = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-slate-50">
            <SEOHead title="Nosotros" description="Conoce a Jofastsa Consulting, tu socio en innovación tecnológica." />
            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                {/* Premium Background Effects */}
                <section className="relative py-20 px-8 overflow-hidden">
                    <div className="absolute inset-0">
                        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
                        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px]" />

                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />

                        {/* Grid Overlay sutil */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6"
                        >
                            Innovación con <span className="text-slate-400 font-light">Propósito</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-400 font-light max-w-3xl mx-auto leading-relaxed"
                        >
                            En Jofastsa Consulting, no solo asesoramos; construimos la infraestructura tecnológica que permite a las empresas escalar con inteligencia y precisión.
                        </motion.p>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="py-24 px-8 border-t border-[#1A1A1A]">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Target, title: 'Misión', desc: 'Democratizar el acceso a arquitecturas de datos de alto nivel, permitiendo a negocios de todos los tamaños tomar decisiones basadas en evidencia.' },
                            { icon: Lightbulb, title: 'Visión', desc: 'Ser la consultoría boutique de referencia en ingeniería de datos, reconocida por transformar la complejidad en claridad estratégica.' },
                            { icon: Heart, title: 'Valores', desc: 'Excelencia técnica, transparencia radical y un compromiso inquebrantable con la integridad de los datos.' }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-[#0A0A0A] p-8 rounded-2xl border border-[#1A1A1A] hover:border-[#27272A] transition-colors"
                            >
                                <div className="w-12 h-12 bg-[#222222] rounded-lg flex items-center justify-center text-slate-300 mb-6">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-medium tracking-tight text-white mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-light text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-8 border-y border-slate-800">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { label: 'Proyectos Entregados', value: '150+' },
                            { label: 'Satisfacción Cliente', value: '100%' },
                            { label: 'Países Alcanzados', value: '12' },
                            { label: 'Capacidad Cloud', value: 'Multi-Cloud' }
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-4xl font-medium tracking-tight text-white mb-2">{stat.value}</div>
                                <div className="text-xs text-slate-500 font-mono uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-24 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-white mb-4">Liderazgo Experto</h2>
                            <p className="text-slate-400">Director y estratega técnico tras Jofastsa Consulting</p>
                        </div>

                        <div className="flex justify-center">
                            <div className="max-w-sm w-full group relative overflow-hidden rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] shadow-2xl">
                                <div className="aspect-[4/3] bg-[#141414] overflow-hidden relative">
                                    <img
                                        src={jonyImg}
                                        alt="Jony R."
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-10 text-center bg-[#0F0F0F]">
                                    <h3 className="text-2xl font-medium tracking-tight text-white mb-2">Jony R.</h3>
                                    <p className="text-slate-500 text-sm font-mono tracking-widest uppercase mb-6">Founder & Lead Engineer</p>
                                    <p className="text-sm text-slate-400 font-light leading-relaxed">
                                        Especialista en arquitecturas cloud y soluciones de software escalables.
                                        Liderando la visión técnica para transformar organizaciones en potencias digitales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-32 px-8 border-t border-[#1A1A1A]">
                    <div className="max-w-4xl mx-auto text-center bg-[#0F0F0F] p-16 rounded-3xl border border-[#1A1A1A] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-medium tracking-tight text-white mb-6">¿Listo para transformar tu negocio?</h2>
                            <p className="text-lg text-slate-400 font-light mb-10 max-w-2xl mx-auto">
                                Únete a las empresas que ya están liderando el mercado con nuestras soluciones y arquitecturas a medida.
                            </p>
                            <a href="/contacto" className="inline-block px-10 py-4 bg-slate-100 text-slate-900 font-medium rounded-full hover:bg-white shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all">
                                Hablemos de su proyecto
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
