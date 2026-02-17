import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

export const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSent(true);

        // Reset after showing success
        setTimeout(() => setIsSent(false), 5000);
    };

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden" id="contacto">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-4">Hablemos de tu Proyecto</h2>
                            <p className="text-xl text-slate-400">
                                ¿Listo para escalar tu negocio? Agenda una consulta gratuita o envíanos un mensaje.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, text: 'francojonysenati@gmail.com', label: 'Envíanos un correo' },
                                { icon: Phone, text: '+51 928 926 775', label: 'WhatsApp' },
                                { icon: MapPin, text: 'Lima, Perú', label: 'Visítanos' },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-500">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">{item.label}</p>
                                        <p className="text-lg font-medium text-white">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-950 p-8 rounded-2xl border border-slate-800"
                    >
                        {isSent ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12">
                                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                                <p className="text-slate-400">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                                <button
                                    onClick={() => setIsSent(false)}
                                    className="mt-6 text-blue-400 hover:text-blue-300 font-medium"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-400">Nombre</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="Juan Pérez"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-400">Email</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                            placeholder="juan@empresa.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400">Mensaje</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                        placeholder="Cuéntanos sobre tu idea..."
                                    />
                                </div>

                                <button
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" /> Enviando...
                                        </>
                                    ) : (
                                        <>
                                            Enviar Mensaje <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
