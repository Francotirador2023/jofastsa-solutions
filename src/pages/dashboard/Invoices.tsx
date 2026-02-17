import { motion } from 'framer-motion';
import { Download, FileCheck, Search } from 'lucide-react';

const invoices = [
    { id: 'F-2024-001', date: '25 Ene 2026', amount: '$1,200.00', status: 'Pagado', concept: 'Anticipo Desarrollo Web 50%' },
    { id: 'F-2024-002', date: '15 Feb 2026', amount: '$1,200.00', status: 'Pendiente', concept: 'Saldo Final Desarrollo Web' },
];

export const Invoices = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Facturación</h1>
                    <p className="text-slate-400">Historial de pagos y facturas fiscales</p>
                </div>
                <div className="relative">
                    <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        placeholder="Buscar factura..."
                        className="pl-10 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm focus:outline-none focus:border-blue-500 w-full sm:w-64"
                    />
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
            >
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-950/50 border-b border-slate-800 text-slate-400 text-sm">
                                <th className="p-4 font-medium">N° Factura</th>
                                <th className="p-4 font-medium">Concepto</th>
                                <th className="p-4 font-medium">Fecha</th>
                                <th className="p-4 font-medium">Monto</th>
                                <th className="p-4 font-medium">Estado</th>
                                <th className="p-4 font-medium text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {invoices.map((invoice) => (
                                <tr key={invoice.id} className="hover:bg-slate-800/50 transition-colors group">
                                    <td className="p-4 text-white font-mono text-sm">{invoice.id}</td>
                                    <td className="p-4 text-slate-300">{invoice.concept}</td>
                                    <td className="p-4 text-slate-400 text-sm">{invoice.date}</td>
                                    <td className="p-4 text-white font-medium">{invoice.amount}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${invoice.status === 'Pagado'
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                            }`}>
                                            {invoice.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all" title="Descargar PDF">
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {invoices.length === 0 && (
                    <div className="p-12 text-center text-slate-500">
                        <FileCheck className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p>No hay facturas disponibles</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
};
