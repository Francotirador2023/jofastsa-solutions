import { motion } from 'framer-motion';
import { MoreVertical, Plus, Calendar, Clock } from 'lucide-react';

const projects = [
    {
        id: 1,
        name: 'Website Corporativo',
        client: 'Jofastsa Consulting',
        status: 'En Desarrollo',
        deadline: '15 Feb 2026',
        progress: 75,
        category: 'Desarrollo Web',
        priority: 'Alta',
        members: [1, 2, 3],
        description: 'Rediseño completo de la identidad corporativa y plataforma web con dashboard de clientes.',
        nextMilestone: 'Integración CMS',
        budget_status: 'Dentro de lo previsto'
    },
    {
        id: 2,
        name: 'App Móvil E-commerce',
        client: 'Fashion Store',
        status: 'Pendiente',
        deadline: '20 Mar 2026',
        progress: 10,
        category: 'Mobile App',
        priority: 'Media',
        members: [2, 4],
        description: 'Aplicación nativa iOS/Android para tienda de moda con pasarela de pagos.',
        nextMilestone: 'Definición de Arquitectura',
        budget_status: 'Pendiente'
    }
];

export const Projects = () => {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Mis Proyectos</h1>
                    <p className="text-slate-400">Gestión y seguimiento de desarrollos activos</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-4 py-2 bg-slate-900 border border-slate-800 text-slate-300 rounded-lg hover:bg-slate-800 transition-colors">
                        Filtrar
                    </button>
                    <button className="flex-1 md:flex-none px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 transition-colors">
                        <Plus className="w-4 h-4" /> Nuevo Proyecto
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all group relative overflow-hidden"
                    >
                        {/* Status & Priority */}
                        <div className="flex justify-between items-start mb-6">
                            <div className="space-y-1">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.status === 'En Desarrollo' ? 'bg-blue-500/10 text-blue-400' :
                                    project.status === 'Completado' ? 'bg-emerald-500/10 text-emerald-400' :
                                        'bg-slate-800 text-slate-400'
                                    }`}>
                                    {project.status}
                                </span>
                                <div className="text-[10px] text-slate-500 font-medium px-1 flex items-center gap-1">
                                    <span className={`w-1 h-1 rounded-full ${project.priority === 'Alta' ? 'bg-red-500' : 'bg-amber-500'}`} />
                                    Prioridad {project.priority}
                                </div>
                            </div>
                            <button className="text-slate-500 hover:text-white p-1">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Profile & Info */}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                                <span className="text-blue-500 font-medium">{project.category}</span>
                                <span>•</span>
                                <span>{project.client}</span>
                            </div>
                            <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
                        </div>

                        {/* Metrics Bar */}
                        <div className="space-y-4 mb-8">
                            <div>
                                <div className="flex justify-between text-xs mb-2">
                                    <span className="text-slate-500 font-medium font-mono uppercase">Progreso</span>
                                    <span className="text-white font-bold">{project.progress}%</span>
                                </div>
                                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${project.progress}%` }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/50">
                                    <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase font-bold mb-1">
                                        <Calendar className="w-3 h-3" /> Entrega
                                    </div>
                                    <p className="text-xs text-white font-medium">{project.deadline}</p>
                                </div>
                                <div className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/50">
                                    <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase font-bold mb-1">
                                        <Clock className="w-3 h-3" /> Próximo Hito
                                    </div>
                                    <p className="text-xs text-blue-400 font-medium truncate">{project.nextMilestone}</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="pt-6 border-t border-slate-800/50 flex justify-between items-center">
                            <div className="flex -space-x-2">
                                {project.members.map((m) => (
                                    <div key={m} title={`Miembro U${m}`} className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white hover:scale-110 transition-transform cursor-pointer">
                                        U{m}
                                    </div>
                                ))}
                                <div className="w-8 h-8 rounded-full bg-blue-600/20 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-blue-400">
                                    +
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Team JOFASTSA CONSULTING</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
