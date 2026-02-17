import { motion } from 'framer-motion';
import { Clock, CheckCircle2, AlertCircle, FileText, Download } from 'lucide-react';

export const Overview = () => {
    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Proyectos Activos', value: '1', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                    { label: 'Facturas Pendientes', value: '0', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
                    { label: 'Horas Soporte', value: '12', icon: AlertCircle, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex items-center gap-4"
                    >
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                            <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Active Project Status */}
                <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 relative overflow-hidden group">
                    {/* Decoración de fondo */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />

                    <div className="flex justify-between items-start mb-8 relative z-10">
                        <div>
                            <h3 className="text-xl font-bold text-white">Proyecto Actual: Website Corporativo</h3>
                            <p className="text-sm text-slate-400 mt-1">Hitos y entregas programadas</p>
                        </div>
                        <div className="text-right">
                            <span className="text-2xl font-bold text-blue-400">75%</span>
                            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Progreso Total</p>
                        </div>
                    </div>

                    <div className="space-y-8 relative z-10">
                        {/* Progress Bar Superior */}
                        <div className="w-full bg-slate-800/50 rounded-full h-3 p-0.5 border border-slate-700/30">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '75%' }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] relative"
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg scale-75" />
                            </motion.div>
                        </div>

                        {/* Timeline Interactiva */}
                        <div className="relative pl-8 space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-blue-500/50 before:to-slate-800">
                            {[
                                { step: 'Diseño UX/UI Premium', status: 'Completado', date: '15 Ene', desc: 'Definición de wireframes y prototipo alta fidelidad.' },
                                { step: 'Desarrollo Frontend Core', status: 'En Progreso', date: 'Actual', desc: 'Implementación de componentes y animaciones.' },
                                { step: 'Integración CMS & Backend', status: 'Pendiente', date: 'Est. 10 Feb', desc: 'Conexión con base de datos y panel administrador.' },
                                { step: 'QA, Optimización & Despliegue', status: 'Pendiente', date: '--', desc: 'Pruebas de rendimiento y lanzamiento final.' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className={`absolute -left-[29px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-slate-900 z-10 ${item.status === 'Completado' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' :
                                            item.status === 'En Progreso' ? 'bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-slate-700'
                                        }`} />

                                    <div className={`p-4 rounded-xl border transition-all duration-300 ${item.status === 'En Progreso'
                                            ? 'bg-blue-500/5 border-blue-500/20 ring-1 ring-blue-500/10'
                                            : 'bg-slate-800/20 border-slate-800/50 hover:border-slate-700'
                                        }`}>
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className={`text-sm font-bold ${item.status === 'Completado' ? 'text-slate-300' : 'text-white'}`}>
                                                {item.step}
                                            </h4>
                                            <span className="text-[10px] font-mono text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded uppercase">
                                                {item.date}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-500 line-clamp-1 group-hover:line-clamp-none transition-all">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Files */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Archivos Recientes</h3>
                    <div className="space-y-4">
                        {[
                            { name: 'Contrato_Servicios.pdf', size: '2.4 MB' },
                            { name: 'Brand_Book_v2.pdf', size: '15 MB' },
                            { name: 'Wireframes_Home.fig', size: '4.1 MB' },
                        ].map((file, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-blue-500/30 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <FileText className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                                    <div>
                                        <p className="text-sm text-slate-300 truncate max-w-[120px]">{file.name}</p>
                                        <p className="text-xs text-slate-600">{file.size}</p>
                                    </div>
                                </div>
                                <button className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                                    <Download className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-2 text-sm text-slate-400 hover:text-white border border-slate-800 hover:bg-slate-800 rounded-lg transition-colors">
                        Ver todos los archivos
                    </button>
                </div>
            </div>
        </div>
    );
};
