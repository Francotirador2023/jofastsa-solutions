import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Loader2 } from 'lucide-react';

export const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login delay
        setTimeout(() => {
            setIsLoading(false);
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Volver al sitio
                </button>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl"
                >
                    <div className="flex justify-center mb-8">
                        <img src="/logo.png" alt="Logo" className="h-16 w-auto" />
                    </div>

                    <h1 className="text-2xl font-bold text-white text-center mb-2">Área de Clientes</h1>
                    <p className="text-slate-400 text-center mb-8">Ingresa tus credenciales para acceder</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="text-sm text-slate-300 block mb-2">Email Corporativo</label>
                            <input
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="cliente@empresa.com"
                            />
                        </div>
                        <div>
                            <label className="text-sm text-slate-300 block mb-2">Contraseña</label>
                            <input
                                type="password"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <button
                            disabled={isLoading}
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-white font-bold hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Iniciar Sesión'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-sm text-blue-400 hover:text-blue-300">¿Olvidaste tu contraseña?</a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
