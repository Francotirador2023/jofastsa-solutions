import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = ['Todos', 'Web', 'Móvil', 'Cloud', 'IA'];

const projects = [
    {
        title: 'FinTech Dashboard',
        slug: 'fintech-dashboard',
        category: 'Web',
        description: 'Plataforma de gestión financiera para banca digital con análisis en tiempo real.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'D3.js', 'Node.js'],
        link: '#',
    },
    {
        title: 'HealthCare App',
        slug: 'healthcare-app',
        category: 'Móvil',
        description: 'Aplicación de telemedicina para gestión de pacientes y consultas remotas.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop',
        tags: ['React Native', 'Firebase', 'WebRTC'],
        link: '#',
    },
    {
        title: 'Logistics AI Core',
        slug: 'logistics-ai',
        category: 'IA',
        description: 'Sistema de optimización de rutas impulsado por inteligencia artificial para flota logística.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
        tags: ['Python', 'TensorFlow', 'AWS'],
        link: '#',
    },
    {
        title: 'DetallOsos E-Commerce',
        slug: 'detallosos',
        category: 'Web',
        description: 'Tienda online completa para regalos personalizados con catálogo dinámico y gestión de pedidos.',
        image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'Next.js', 'Tailwind'],
        link: 'https://detallosos-bymayeff.com/',
    },
    {
        title: 'Modern Data Stack',
        slug: 'modern-data-stack',
        category: 'Cloud',
        description: 'Infraestructura ELT completa orquestada con Airflow en Docker, transformando datos con dBT y Postgres.',
        image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop',
        tags: ['Airflow', 'Docker', 'dBT', 'Postgres'],
        link: '#',
    },
    {
        title: 'Corporate Approval System',
        slug: 'approval-platform',
        category: 'Web',
        description: 'Sistema integral para gestión de aprobaciones corporativas con notificaciones y roles de usuario.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop',
        tags: ['React', 'FastAPI', 'SQLModel'],
        link: '#',
    },
    {
        title: 'MLOps Price Predictor',
        slug: 'mlops-price-predictor',
        category: 'IA',
        description: 'Pipeline end-to-end de Machine Learning: desde el entrenamiento del modelo hasta el despliegue de API y UI.',
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
        tags: ['FastAPI', 'Docker', 'Streamlit', 'ML'],
        link: '#',
    },
];

export const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');

    const filteredProjects = projects.filter(
        (project) => activeCategory === 'Todos' || project.category === activeCategory
    );

    return (
        <section className="py-24 bg-slate-950 relative" id="portafolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-base font-semibold text-blue-500 tracking-wide uppercase mb-2">
                            Casos de Éxito
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Nuestros últimos <span className="text-slate-500">proyectos</span>
                        </h3>
                        <p className="text-lg text-slate-400">
                            Explora cómo hemos ayudado a empresas líderes a alcanzar sus objetivos digitales.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <div className="flex gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-500/20 backdrop-blur-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-slate-300 mb-6 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <Link
                                        to={`/portafolio/${project.slug}`}
                                        className="inline-flex items-center gap-2 text-white font-medium hover:gap-4 transition-all"
                                    >
                                        Ver Caso de Estudio <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all font-medium">
                        Ver Todos los Proyectos
                    </button>
                </div>
            </div>
        </section>
    );
};
