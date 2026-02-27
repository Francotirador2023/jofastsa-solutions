import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, PlayCircle, Layers } from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';

// Import images
import dataConsultingImg from '../../assets/data-consulting.jpg';
import enterpriseSecurityImg from '../../assets/enterprise-security.jpg';
import globalScalabilityImg from '../../assets/global-scalability.jpg';

const solutions = {
    'transformacion-digital': {
        title: 'Transformación Digital',
        subtitle: 'Reinventa tu negocio con tecnología de vanguardia.',
        description: 'Implementamos soluciones integrales que digitalizan tus operaciones, optimizan flujos de trabajo y preparan tu empresa para el futuro.',
        steps: [
            'Análisis de Infraestructura Actual',
            'Diseño de Arquitectura Cloud',
            'Migración y Modernización',
            'Capacitación y Soporte Continuo'
        ],
        demoImage: dataConsultingImg
    },
    'seguridad-empresarial': {
        title: 'Seguridad Empresarial',
        subtitle: 'Protección blindada para tus activos digitales.',
        description: 'Nuestros sistemas de seguridad proactiva detectan y neutralizan amenazas antes de que afecten tu operación.',
        steps: [
            'Auditoría de Vulnerabilidades',
            'Implementación de Firewalls y Encriptación',
            'Monitoreo 24/7 con IA',
            'Protocolos de Respuesta a Incidentes'
        ],
        demoImage: enterpriseSecurityImg
    },
    'escalabilidad-global': {
        title: 'Escalabilidad Global',
        subtitle: 'Crece sin límites geográficos ni técnicos.',
        description: 'Arquitecturas distribuidas que garantizan rendimiento y disponibilidad sin importar dónde estén tus usuarios.',
        steps: [
            'Evaluación de Carga y Tráfico',
            'Implementación de CDN y Edge Computing',
            'Optimización de Bases de Datos',
            'Auto-scaling Inteligente'
        ],
        demoImage: globalScalabilityImg
    },
    'apps-moviles': {
        title: 'Desarrollo de Apps Móviles',
        subtitle: 'Experiencias nativas que tus usuarios amarán.',
        description: 'Creamos aplicaciones móviles robustas para iOS y Android, enfocadas en rendimiento, diseño UI/UX premium y alta conversión.',
        steps: [
            'Diseño de Prototipos Interactivos',
            'Desarrollo Frontend Multiplataforma',
            'Integración de APIs y Backend',
            'Pruebas de Rendimiento y Publicación en Tiendas'
        ],
        demoImage: dataConsultingImg // Placeholder, should ideally be a mobile app image
    },
    'ia-automatizacion': {
        title: 'IA y Automatización',
        subtitle: 'Multiplica la eficiencia de tu equipo con Inteligencia Artificial.',
        description: 'Implementamos agentes autónomos y flujos de trabajo automatizados (n8n, Make) que reducen el trabajo manual en un 80%.',
        steps: [
            'Mapeo de Procesos Repetitivos',
            'Entrenamiento de Modelos de IA personalizados',
            'Orquestación de Flujos de Trabajo',
            'Monitoreo de Eficiencia y Ajustes'
        ],
        demoImage: enterpriseSecurityImg // Placeholder
    },
    'ecommerce-avanzado': {
        title: 'E-Commerce Avanzado',
        subtitle: 'Tiendas online diseñadas para maximizar tus ventas.',
        description: 'Desarrollamos plataformas de comercio electrónico ultra-rápidas, escalables y optimizadas para conversión en cada paso del embudo.',
        steps: [
            'Diseño de Experiencia de Compra (UX)',
            'Desarrollo de Catálogo Dinámico y Checkout',
            'Integración de Pasarelas de Pago Globales',
            'Estrategias de Retención (Correos Abandonados, Upselling)'
        ],
        demoImage: globalScalabilityImg // Placeholder
    }
};

export const SolutionDetail = () => {
    const { slug } = useParams();
    const [isDemoActive, setIsDemoActive] = useState(false);
    const solution = solutions[slug as keyof typeof solutions];

    if (!solution) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Solución no encontrada</h1>
                    <Link to="/" className="text-blue-400 hover:text-blue-300">Volver al inicio</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50">
            <Navbar />

            <main className="pt-20">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    {/* Background Image Background with Overlay */}
                    <div className="absolute inset-0">
                        <img
                            src={solution.demoImage}
                            alt=""
                            className="w-full h-full object-cover opacity-20"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950 to-slate-950" />

                        {/* Premium Grain Texture */}
                        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Volver
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="max-w-3xl"
                        >
                            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent mb-6">
                                {solution.title}
                            </h1>
                            <p className="text-2xl text-blue-200 mb-6 font-light">{solution.subtitle}</p>
                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                {solution.description}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Process & Demo Section */}
                <section className="py-20 bg-slate-900/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">

                            {/* Process Steps */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Layers className="text-blue-500" /> Procedimiento de Mejora
                                </h2>
                                <div className="space-y-6">
                                    {solution.steps.map((step, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/30 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                                                {index + 1}
                                            </div>
                                            <span className="text-slate-200 font-medium">{step}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Interactive Demo Placeholder */}
                            <div className="relative">
                                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                    <PlayCircle className="text-emerald-500" /> Demo Interactiva
                                </h2>

                                {!isDemoActive ? (
                                    <div
                                        onClick={() => setIsDemoActive(true)}
                                        className="aspect-video rounded-3xl overflow-hidden bg-slate-800 border-2 border-slate-700 relative group cursor-pointer shadow-2xl shadow-blue-900/20"
                                    >
                                        <img
                                            src={solution.demoImage}
                                            alt="Demo Preview"
                                            className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <PlayCircle className="w-10 h-10 text-white" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl">
                                            <p className="text-sm text-slate-300">
                                                <span className="text-emerald-400 font-bold">En vivo:</span> Haz clic para iniciar la simulación del sistema.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="aspect-video rounded-3xl overflow-hidden bg-black border-2 border-emerald-500/50 relative shadow-[0_0_50px_rgba(16,185,129,0.2)] p-6 font-mono text-sm">
                                        <div className="absolute top-4 right-4 flex gap-2">
                                            <span className="w-3 h-3 rounded-full bg-red-500/20" />
                                            <span className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                        </div>

                                        <div className="space-y-2 text-emerald-500/80">
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                                                {'>'} Initializing Jofastsa Consulting Core...
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
                                                {'>'} Connecting to secure nodes... [OK]
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }}>
                                                {'>'} Analyzing infrastructure latency... 12ms
                                            </motion.div>
                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }}>
                                                {'>'} Optimizing data streams...
                                            </motion.div>

                                            <motion.div
                                                className="h-32 mt-8 border border-emerald-500/30 rounded bg-emerald-900/10 flex items-end p-2 gap-1"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 3.5 }}
                                            >
                                                {[40, 70, 45, 90, 65, 85, 30, 60, 75, 50, 95, 80].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="flex-1 bg-emerald-500/50"
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${h}%` }}
                                                        transition={{ delay: 3.5 + (i * 0.1), duration: 0.5 }}
                                                    />
                                                ))}
                                            </motion.div>

                                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.0 }} className="text-white pt-4">
                                                {'>'} RESULT: System Optimization Verified.
                                            </motion.div>
                                        </div>

                                        <button
                                            onClick={() => setIsDemoActive(false)}
                                            className="absolute bottom-6 right-6 px-4 py-2 bg-slate-800 text-slate-400 text-xs rounded hover:bg-slate-700 hover:text-white transition-colors"
                                        >
                                            Reset Simulation
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </section>

                <div className="py-20 text-center">
                    <h3 className="text-2xl font-bold text-white mb-6">¿Listo para escalar?</h3>
                    <Link to="/contacto" className="inline-flex px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105">
                        Agendar Consultoría Gratuita
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
};
