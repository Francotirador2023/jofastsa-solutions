import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    FileText,
    Settings,
    LogOut,
    FolderKanban,
    MessageSquare,
    Bell
} from 'lucide-react';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const location = useLocation();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Resumen', path: '/dashboard' },
        { icon: FolderKanban, label: 'Mis Proyectos', path: '/dashboard/proyectos' },
        { icon: FileText, label: 'Facturación', path: '/dashboard/facturacion' },
        { icon: MessageSquare, label: 'Soporte', path: '/dashboard/soporte' },
        { icon: Settings, label: 'Configuración', path: '/dashboard/configuracion' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 fixed h-full hidden lg:flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                        <span className="font-bold text-white text-lg">JOFASTSA CONSULTING</span>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive
                                    ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                                    }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-red-400 transition-colors">
                        <LogOut className="w-5 h-5" />
                        <span>Cerrar Sesión</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ml-64">
                {/* Header */}
                <header className="h-16 bg-slate-900/50 backdrop-blur-md border-b border-slate-800 sticky top-0 z-20 px-6 flex items-center justify-between">
                    <h2 className="text-white font-semibold capitalize">
                        {location.pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
                    </h2>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-white relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                            <span className="text-sm font-medium text-white hidden sm:block">Cliente Demo</span>
                        </div>
                    </div>
                </header>

                <main className="p-6 md:p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {children}
                    </motion.div>
                </main>
            </div>
        </div>
    );
};
