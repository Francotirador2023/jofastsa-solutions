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
        <section className="py-24 bg-slate-950 relative" id="servicios">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-base font-semibold text-blue-500 tracking-wide uppercase mb-2">
                        Nuestros Servicios
                    </h2>
                    <p className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Soluciones integrales para tu
                        <span className="text-slate-500"> transformación digital</span>
                    </p>
                    <p className="text-lg text-slate-400">
                        Combinamos diseño innovador con ingeniería robusta para entregar resultados excepcionales.
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
                                className="block h-full p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                                        <service.icon className="w-7 h-7 text-blue-500 group-hover:text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed">
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
