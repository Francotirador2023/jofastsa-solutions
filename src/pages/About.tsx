import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Rocket } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { SEOHead } from '../components/seo/SEOHead';

export const About = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
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
                            className="text-4xl md:text-6xl font-bold text-white mb-6"
                        >
                            Innovación con <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Propósito</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            En Jofastsa Consulting, no solo asesoramos; construimos la infraestructura de datos que permite a las empresas escalar con inteligencia y precisión técnica.
                        </motion.p>
                    </div>
                </section>

                {/* Values Grid */}
                <section className="py-16 px-8 bg-slate-900/50">
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
                                className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors"
                            >
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
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
                                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
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
                            <div className="max-w-sm w-full group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
                                <div className="aspect-[4/3] bg-slate-800 overflow-hidden relative">
                                    <img
                                        src="/src/assets/jony.png"
                                        alt="Jony R."
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-8 text-center">
                                    <h3 className="text-2xl font-bold text-white">Jony R.</h3>
                                    <p className="text-blue-400 font-semibold mb-6">Founder & Lead Data Engineer</p>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Especialista en arquitecturas de datos, ETL pipelines y soluciones de inteligencia de negocio.
                                        Liderando la visión técnica para transformar datos en activos estratégicos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-8">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900/50 to-violet-900/50 p-12 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-6 shadow-lg shadow-blue-500/50">
                            <Rocket className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">¿Listo para transformar tu negocio?</h2>
                        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                            Únete a las empresas que ya están liderando el mercado con nuestras soluciones.
                        </p>
                        <a href="/contacto" className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors">
                            Hablemos hoy mismo
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
