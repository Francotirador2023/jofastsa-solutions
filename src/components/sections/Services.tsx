import { Code, Cloud, Smartphone, Brain, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
    {
        icon: Code,
        title: 'Desarrollo Web',
        description: 'Sitios web ultrarrápidos y aplicaciones web progresivas construidas con las últimas tecnologías.',
        link: '/soluciones/transformacion-digital'
    },
    {
        icon: Smartphone,
        title: 'Apps Móviles',
        description: 'Aplicaciones nativas y multiplataforma para iOS y Android que tus usuarios amarán.',
        link: '/soluciones/apps-moviles'
    },
    {
        icon: Brain,
        title: 'IA y Automatización',
        description: 'Agentes inteligentes y flujos automatizados con n8n para reducir costos operativos.',
        link: '/soluciones/ia-automatizacion'
    },
    {
        icon: Cloud,
        title: 'Soluciones Cloud',
        description: 'Arquitecturas escalables y seguras en AWS, Azure o Google Cloud Platform.',
        link: '/soluciones/escalabilidad-global'
    },
    {
        icon: Globe,
        title: 'E-Commerce',
        description: 'Tiendas en línea robustas y optimizadas para maximizar tus ventas y conversiones.',
        link: '/soluciones/ecommerce-avanzado'
    },
    {
        icon: Shield,
        title: 'Ciberseguridad',
        description: 'Auditorías y protección avanzada para mantener tus datos y usuarios seguros.',
        link: '/soluciones/seguridad-empresarial'
    },
];

export const Services = () => {
    return (
        <section className="py-32 relative border-t border-slate-900" id="servicios">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-sm font-semibold tracking-widest text-slate-500 uppercase mb-3">
                        Nuestras Capacidades
                    </h2>
                    <p className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Soluciones tecnológicas para
                        <span className="text-slate-400"> la empresa moderna</span>
                    </p>
                    <p className="text-lg text-slate-400 font-light">
                        Ingeniería de software de alta precisión diseñada para maximizar el rendimiento y la escalabilidad de sus operaciones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={service.link}
                                className="block h-full p-8 rounded-2xl bg-[#0F0F0F] border border-[#1A1A1A] hover:border-slate-700 hover:bg-[#141414] transition-all duration-500 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-all duration-300">
                                        <service.icon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-medium tracking-tight text-slate-200 mb-3 group-hover:text-white transition-colors flex items-center gap-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed font-light text-sm">
                                        {service.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
