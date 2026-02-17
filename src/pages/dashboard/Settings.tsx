import { Save, User, Bell, Lock, Shield } from 'lucide-react';

export const Settings = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-white">Configuración de Cuenta</h1>
                <p className="text-slate-400">Gestiona tu perfil y preferencias de seguridad</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Sidebar Navigation */}
                <div className="space-y-2">
                    {[
                        { name: 'Perfil General', icon: User, active: true },
                        { name: 'Notificaciones', icon: Bell, active: false },
                        { name: 'Seguridad', icon: Lock, active: false },
                        { name: 'Permisos', icon: Shield, active: false },
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${item.active
                                ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20'
                                : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                }`}
                        >
                            <item.icon className="w-4 h-4" />
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Form Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Profile Card */}
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold text-white mb-6">Información Personal</h2>

                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                                JD
                            </div>
                            <div>
                                <button className="px-4 py-2 bg-slate-800 text-white text-sm rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
                                    Cambiar Foto
                                </button>
                                <p className="text-xs text-slate-500 mt-2">Max 2MB. JPG, PNG.</p>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">Nombre</label>
                                    <input type="text" defaultValue="John" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">Apellido</label>
                                    <input type="text" defaultValue="Doe" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Email Corporativo</label>
                                <input type="email" defaultValue="john.doe@company.com" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-sm text-slate-400 mb-2">Cargo</label>
                                <input type="text" defaultValue="CEO / Founder" className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-2 text-white focus:border-blue-500 outline-none" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button className="px-6 py-2 text-slate-400 hover:text-white transition-colors">Cancelar</button>
                        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center gap-2 shadow-lg shadow-blue-500/20">
                            <Save className="w-4 h-4" /> Guardar Cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
