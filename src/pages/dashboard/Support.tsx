import { motion } from 'framer-motion';
import { MessageSquare, Send, Plus, MoreVertical } from 'lucide-react';

const tickets = [
    {
        id: 'T-1023',
        subject: 'Error en la carga de imágenes',
        status: 'Abierto',
        priority: 'Alta',
        date: 'hace 2 horas',
        messages: 3
    },
    {
        id: 'T-0998',
        subject: 'Solicitud de cambio en el footer',
        status: 'Cerrado',
        priority: 'Baja',
        date: 'hace 3 días',
        messages: 5
    }
];

export const Support = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white">Centro de Soporte</h1>
                    <p className="text-slate-400">¿Necesitas ayuda? Abre un ticket y te responderemos pronto.</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center gap-2 transition-colors">
                    <Plus className="w-4 h-4" /> Crear Ticket
                </button>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 h-[600px]">
                {/* Tickets List */}
                <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-slate-800 bg-slate-950/50">
                        <h3 className="font-semibold text-white">Mis Tickets</h3>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 space-y-2">
                        {tickets.map((ticket) => (
                            <div key={ticket.id} className="p-4 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 cursor-pointer transition-all">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs font-mono text-slate-500">#{ticket.id}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${ticket.status === 'Abierto' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-700 text-slate-400'
                                        }`}>{ticket.status}</span>
                                </div>
                                <h4 className="text-sm font-medium text-white mb-1">{ticket.subject}</h4>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>{ticket.date}</span>
                                    <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {ticket.messages}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col overflow-hidden relative shadow-2xl">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg">
                                    S
                                </div>
                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full" title="Soporte Online" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm">Soporte Jofastsa</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] text-slate-400">Ticket #T-1023</span>
                                    <span className="w-1 h-1 bg-slate-700 rounded-full" />
                                    <span className="text-[10px] text-blue-400 font-medium tracking-wide">Error en carga</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="hidden md:block px-2 py-0.5 bg-red-500/10 text-red-500 border border-red-500/20 rounded text-[10px] font-bold uppercase tracking-widest">
                                Alta Prioridad
                            </span>
                            <button className="p-2 text-slate-500 hover:text-white transition-colors">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-90">
                        {/* Messages Mock */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-3 max-w-[85%]"
                        >
                            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 text-xs font-bold shrink-0 border border-slate-700">C</div>
                            <div className="space-y-1">
                                <div className="bg-slate-800 text-slate-200 rounded-2xl rounded-tl-none p-4 shadow-sm border border-slate-700/50">
                                    <p className="text-sm leading-relaxed">Hola, estoy intentando subir una imagen al perfil del proyecto pero me devuelve un error 500 constante. ¿Pueden revisarlo?</p>
                                </div>
                                <span className="text-[10px] text-slate-500 px-1">10:30 AM</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-3 flex-row-reverse max-w-[85%] ml-auto"
                        >
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg shadow-blue-600/20">S</div>
                            <div className="space-y-1 items-end flex flex-col">
                                <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none p-4 shadow-xl shadow-blue-600/10">
                                    <p className="text-sm leading-relaxed text-blue-50">Hola Carlos. Entendido perfectamente, estamos revisando los logs de la API. ¿Podrías enviarnos una captura de la consola del navegador si es posible?</p>
                                </div>
                                <div className="flex items-center gap-1.5 px-1">
                                    <span className="text-[10px] text-blue-400 font-medium">Entregado</span>
                                    <span className="text-[10px] text-slate-500">10:35 AM</span>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex justify-center my-4">
                            <span className="px-3 py-1 bg-slate-800/50 text-slate-500 text-[10px] rounded-full font-medium">Hoy, 12 de Febrero</span>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-slate-800 bg-slate-950/50 backdrop-blur-md">
                        <div className="flex items-center gap-3 bg-slate-900 border border-slate-700 rounded-2xl px-4 py-2 focus-within:border-blue-500 transition-all shadow-inner">
                            <button className="p-1.5 text-slate-500 hover:text-blue-400 transition-colors">
                                <Plus className="w-5 h-5" />
                            </button>
                            <input
                                type="text"
                                placeholder="Escribe un mensaje..."
                                className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-slate-600"
                            />
                            <button className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 hover:scale-105 active:scale-95 group">
                                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                        <p className="text-[9px] text-slate-600 text-center mt-3 uppercase tracking-tighter">Powered by Jofastsa Support Engine</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
