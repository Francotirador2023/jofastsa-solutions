import { motion } from 'framer-motion';
import { ArrowRight, Check, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../seo/SEOHead';

// Import images
import dataConsultingImg from '../../assets/data-consulting.jpg';
import enterpriseSecurityImg from '../../assets/enterprise-security.jpg';
import globalScalabilityImg from '../../assets/global-scalability.jpg';

const features = [
    {
        title: 'Transformación Digital',
        slug: 'transformacion-digital',
        description: 'Modernizamos tu infraestructura tecnológica para competir en la era digital.',
        icon: Zap,
        image: dataConsultingImg,
        benefits: ['Reducción de costos operativos', 'Automatización de procesos', 'Mejora en la toma de decisiones'],
    },
    {
        title: 'Seguridad Empresarial',
        slug: 'seguridad-empresarial',
        description: 'Protocolos de ciberseguridad avanzados para proteger tus activos más valiosos.',
        icon: Shield,
        image: enterpriseSecurityImg,
        benefits: ['Encriptación de extremo a extremo', 'Auditorías de seguridad continuas', 'Cumplimiento normativo (GDPR/HIPAA)'],
    },
    {
        title: 'Escalabilidad Global',
        slug: 'escalabilidad-global',
        description: 'Arquitecturas cloud-native diseñadas para crecer con tu negocio sin límites.',
        icon: Users,
        image: globalScalabilityImg,
        benefits: ['Infraestructura Serverless', 'Balanceo de carga global', 'Alta disponibilidad 99.99%'],
    },
];

export const Features = () => {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="caracteristicas">
            {/* Background elements consistent with Premium+ style */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[30%] h-[30%] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-5%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <SEOHead title="Soluciones Empresariales" description="Descubre nuestras soluciones de transformación digital, ciberseguridad y escalabilidad." />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Por qué elegir Jofastsa</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        No solo escribimos código. Diseñamos soluciones estratégicas que se integran perfectamente con tus objetivos de negocio.
                    </p>
                </div>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
                        >
                            {/* Content */}
                            <div className="flex-1 space-y-8">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                    <feature.icon className="w-8 h-8 text-blue-500" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                                <p className="text-lg text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                <ul className="space-y-4">
                                    {feature.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>

                                <Link to={`/soluciones/${feature.slug}`} className="flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group">
                                    Saber más
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Visual/Image */}
                            <div className="flex-1 w-full">
                                <div className="aspect-video w-full relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 group">
                                    <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-colors z-10" />
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    />

                                    {/* Abstract Pattern Overlay */}
                                    <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
                                        backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                                        backgroundSize: '24px 24px'
                                    }} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
