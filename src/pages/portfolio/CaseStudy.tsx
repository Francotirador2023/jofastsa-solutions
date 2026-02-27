import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Users, Clock } from 'lucide-react';
import { Navbar } from '../../components/layout/Navbar';
import { Footer } from '../../components/layout/Footer';

const caseStudies = {
    'fintech-dashboard': {
        title: 'FinTech Dashboard System',
        client: 'NeoBank Corp',
        description: 'Desarrollo de una plataforma centralizada para la gestión financiera de más de 500,000 usuarios activos. Implementación de gráficos en tiempo real y seguridad de grado bancario.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'D3.js', 'Node.js'],
        results: [
            { label: 'Tiempo de Carga', value: '-60%', icon: Clock },
            { label: 'Retención', value: '+25%', icon: Users },
            { label: 'Transacciones', value: '1M+/día', icon: TrendingUp }
        ],
        challenge: 'El cliente tenía un sistema legado lento y difícil de escalar. Necesitaban una arquitectura moderna que soportara picos de tráfico y ofreciera visualización de datos complejos sin latencia.',
        solution: 'Arquitectura de microservicios con un frontend optimizado en React. Utilizamos WebSockets para datos en vivo y D3.js para renderizado eficiente de gráficos financieros.'
    },
    'healthcare-app': {
        title: 'HealthCare Telemedicine App',
        client: 'MediCare Plus',
        description: 'App móvil nativa para consultas médicas remotas, gestión de recetas y seguimiento de pacientes crónicos.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
        tags: ['React Native', 'Firebase', 'WebRTC'],
        results: [
            { label: 'Consultas', value: '50k+', icon: Users },
            { label: 'Tiempo Espera', value: '-80%', icon: Clock },
            { label: 'Satisfacción', value: '4.9/5', icon: TrendingUp }
        ],
        challenge: 'Conectar doctores y pacientes de forma segura y fiable, cumpliendo normativas HIPAA y garantizando calidad de video en conexiones inestables.',
        solution: 'Implementación de WebRTC para videollamadas peer-to-peer encriptadas. Backend serverless con Firebase para escalabilidad automática.'
    },
    'logistics-ai': {
        title: 'Logistics AI Optimization Core',
        client: 'Global Freight Solutions',
        description: 'Sistema central de optimización logística que utiliza algoritmos predictivos para reducir tiempos de entrega y consumo de combustible.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
        tags: ['Python', 'TensorFlow', 'AWS'],
        results: [
            { label: 'Eficiencia', value: '+35%', icon: TrendingUp },
            { label: 'Costos Comb.', value: '-22%', icon: Clock },
            { label: 'Entregas', value: '99% On-Time', icon: Users }
        ],
        challenge: 'La flota de 500+ vehículos operaba con rutas estáticas ineficientes, resultando en altos costos operativos y retrasos frecuentes por tráfico no previsto.',
        solution: 'Desarrollamos un motor de IA que analiza tráfico en tiempo real, clima y carga para recalcular rutas dinámicamente cada 15 minutos.'
    },
    'detallosos': {
        title: 'DetallOsos | Regalos y Detalles',
        client: 'DetallOsos by Mayeff',
        description: 'Plataforma de comercio electrónico diseñada para ofrecer una experiencia de compra emotiva y fluida, especializada en regalos personalizados y arreglos florales.',
        image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
        results: [
            { label: 'Conversión', value: '+45%', icon: TrendingUp },
            { label: 'Pedidos', value: '100% Online', icon: Users },
            { label: 'Carga', value: '<1s', icon: Clock }
        ],
        challenge: 'El negocio operaba principalmente por redes sociales, limitando el alcance y complicando la gestión de inventario y pedidos manuales.',
        solution: 'Desarrollo de una tienda online moderna y escalable. Implementación de catálogo categorizado, carrito de compras optimizado y diseño responsive enfocado en la conversión móvil.'
    },
    'client-portal': {
        title: 'Jofastsa Client Portal',
        client: 'Jofastsa Consulting (Interno)',
        description: 'Portal de autogestión para clientes que centraliza la comunicación, entrega de proyectos y procesos administrativos en una interfaz segura.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'TypeScript', 'Tailwind'],
        results: [
            { label: 'Emails', value: '-70%', icon: Clock },
            { label: 'Transparencia', value: '100%', icon: Users },
            { label: 'Pagos', value: 'Faster', icon: TrendingUp }
        ],
        challenge: 'La gestión de clientes vía email y WhatsApp generaba desorden, pérdida de archivos y retrasos en la facturación. Se necesitaba una fuente única de verdad.',
        solution: 'Desarrollo de un dashboard SPA seguro con React. Incluye chat de soporte en tiempo real, seguimiento visual de hitos de proyecto y repositorio de facturas.'
    },
    'modern-data-stack': {
        title: 'Modern Data Stack Architecture',
        client: 'Data Driven Corp',
        description: 'Implementación de un pipeline ELT robusto y escalable utilizando herramientas open-source modernas para centralizar la inteligencia de negocios.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop',
        tags: ['Apache Airflow', 'Docker', 'dBT', 'PostgreSQL'],
        results: [
            { label: 'Procesamiento', value: 'TB/día', icon: TrendingUp },
            { label: 'Latencia', value: '<5min', icon: Clock },
            { label: 'Fuentes', value: '10+', icon: Users }
        ],
        challenge: 'La organización carecía de una fuente centralizada de datos confiables. Los reportes se generaban manualmente en Excel, propensos a errores y demoras significativas.',
        solution: 'Orquestación de flujos de datos con Apache Airflow en contenedores Docker. Transformación de datos "in-warehouse" con dBT garantizando calidad y linaje de datos en PostgreSQL.'
    },
    'approval-platform': {
        title: 'Corporate Approval Software',
        client: 'Enterprise Logistics',
        description: 'Sistema web para la digitalización y automatización de flujos de aprobación de gastos, viajes y compras corporativas.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'FastAPI', 'SQLModel', 'Vite'],
        results: [
            { label: 'Aprobación', value: '-3 días', icon: Clock },
            { label: 'Papel', value: '0%', icon: Users },
            { label: 'Auditoría', value: '100%', icon: TrendingUp }
        ],
        challenge: 'Los procesos de aprobación requerían firmas físicas y cadenas de correos interminables, resultando en pérdidas de productividad y falta de trazabilidad.',
        solution: 'Desarrollo de una plataforma Full Stack moderna. Frontend reactivo con Vite para experiencia de usuario fluida y Backend robusto con FastAPI para gestión de estados y notificaciones.'
    },
    'mlops-price-predictor': {
        title: 'End-to-End MLOps Pipeline',
        client: 'RealEstate Analytics',
        description: 'Sistema predictivo de precios inmobiliarios totalmente automatizado, desde la ingesta de datos hasta el despliegue del modelo en producción.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
        tags: ['Machine Learning', 'Docker', 'Streamlit', 'FastAPI'],
        results: [
            { label: 'Precisión', value: '94%', icon: TrendingUp },
            { label: 'Despliegue', value: 'Auto', icon: Clock },
            { label: 'Inferencia', value: '100ms', icon: Users }
        ],
        challenge: 'El equipo de ciencia de datos tenía excelentes modelos que nunca llegaban a producción debido a la complejidad de la infraestructura y falta de estandarización.',
        solution: 'Implementación de prácticas MLOps. Contenerización del entorno de entrenamiento y servicio. Interfaz de usuario con Streamlit para que los analistas interactúen con las predicciones fácilmente.'
    }
};

export const CaseStudy = () => {
    const { slug } = useParams();
    // Default fallback content if slug doesn't match exactly
    const study = caseStudies[slug as keyof typeof caseStudies] || {
        title: 'Proyecto de Transformación',
        client: 'Cliente Confidencial',
        description: 'Implementación de soluciones tecnológicas avanzadas para optimizar procesos de negocio.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
        tags: ['Tech', 'Innovation'],
        results: [
            { label: 'Eficiencia', value: '+40%', icon: TrendingUp },
            { label: 'Costos', value: '-30%', icon: Clock },
            { label: 'Usuarios', value: 'Global', icon: Users }
        ],
        challenge: 'Modernizar infraestructura tecnológica obsoleta para competir en el mercado digital actual.',
        solution: 'Desarrollo a medida utilizando las últimas tecnologías cloud y metodologías ágiles.'
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-slate-50">
            <Navbar />

            <main className="pt-20">
                <section className="relative h-[60vh] overflow-hidden">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover opacity-40 mix-blend-luminosity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                        <div className="max-w-7xl mx-auto">
                            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                                <ArrowLeft className="w-4 h-4" /> Volver al Portafolio
                            </Link>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <div className="flex gap-2 mb-4 relative z-10">
                                    {study.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-[#141414] border border-[#222222] text-slate-300 text-xs font-mono tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4 relative z-10">{study.title}</h1>
                                <p className="text-xl text-slate-300 font-light max-w-2xl relative z-10">{study.description}</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-8">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h3 className="text-2xl font-medium tracking-tight text-white mb-4">El Desafío</h3>
                                <p className="text-slate-400 text-lg font-light leading-relaxed">{study.challenge}</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-medium tracking-tight text-white mb-4">Nuestra Solución</h3>
                                <p className="text-slate-400 text-lg font-light leading-relaxed">{study.solution}</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-8">
                                <h3 className="font-medium tracking-tight text-white mb-6">Resultados Clave</h3>
                                <div className="space-y-6">
                                    {study.results.map((result, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#141414] border border-[#222222] flex items-center justify-center text-slate-300">
                                                <result.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="text-2xl font-medium tracking-tight text-white">{result.value}</p>
                                                <p className="text-sm font-light text-slate-500">{result.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#0F0F0F] border border-[#1A1A1A] rounded-2xl p-8 text-center text-white relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <h3 className="font-medium tracking-tight text-xl mb-3">¿Tienes un proyecto similar?</h3>
                                    <p className="text-slate-400 font-light text-sm mb-6">Convertimos ideas complejas en realidades digitales.</p>
                                    <Link to="/contacto" className="inline-block w-full py-3 bg-slate-100 text-slate-900 font-medium rounded-lg hover:bg-white transition-colors duration-300">
                                        Cotizar Ahora
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
