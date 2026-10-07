import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Database, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  XOctagon, 
  Info,
  ChevronDown
} from 'lucide-react';

const ciaData = [
  {
    id: 'confidentiality',
    title: 'Confidencialidad',
    icon: Lock,
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-400',
    bgGlow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    text: 'text-blue-400',
    border: 'border-blue-500/30',
    lightBg: 'bg-blue-500/10',
    shortDesc: 'Garantizar que la información solo sea accesible para las entidades autorizadas. Es el pilar de la privacidad.',
    realFailure: 'Un proveedor de salud expuso millones de registros médicos por un error de configuración en un "bucket" de la nube, violando la privacidad de los pacientes.',
    threats: [
      'Ataques de Phishing e Ingeniería Social',
      'Intercepción (Man-in-the-Middle)',
      'Robo de dispositivos no cifrados'
    ],
    protections: [
      'Cifrado robusto (AES-256, TLS)',
      'Autenticación Multifactor (MFA)',
      'Control de Acceso Basado en Roles (RBAC)'
    ]
  },
  {
    id: 'integrity',
    title: 'Integridad',
    icon: Database,
    color: 'emerald',
    gradient: 'from-emerald-600 to-green-400',
    bgGlow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    lightBg: 'bg-emerald-500/10',
    shortDesc: 'Asegurar que la información es exacta, completa y no ha sido alterada de manera no autorizada. Garantiza la confiabilidad.',
    realFailure: 'Atacantes alteraron los registros de transacciones (logs) en un sistema de facturación para ocultar transferencias fraudulentas de fondos.',
    threats: [
      'Ransomware que corrompe archivos',
      'Inyección SQL en bases de datos',
      'Modificación maliciosa de registros de auditoría'
    ],
    protections: [
      'Firmas digitales y Hashing (SHA-256)',
      'Copias de seguridad inmutables (WORM)',
      'Control de versiones estricto'
    ]
  },
  {
    id: 'availability',
    title: 'Disponibilidad',
    icon: Activity,
    color: 'purple',
    gradient: 'from-purple-600 to-fuchsia-400',
    bgGlow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    text: 'text-purple-400',
    border: 'border-purple-500/30',
    lightBg: 'bg-purple-500/10',
    shortDesc: 'Garantizar que la información y los sistemas estén accesibles para los usuarios autorizados siempre que lo necesiten.',
    realFailure: 'Un ataque masivo DDoS contra un importante sitio de e-commerce durante el Black Friday colapsó los servidores, generando millones en pérdidas.',
    threats: [
      'Ataques de Denegación de Servicio (DDoS)',
      'Ataques de Ransomware (bloqueo de sistemas)',
      'Fallos críticos de hardware o desastres naturales'
    ],
    protections: [
      'Redundancia y Balanceo de carga',
      'Planes de Recuperación ante Desastres (DRP)',
      'Protección Anti-DDoS y redes CDN'
    ]
  }
];

const PillarCard = ({ data, isActive, onClick }) => {
  const Icon = data.icon;
  
  return (
    <div 
      className={`relative overflow-hidden rounded-2xl transition-all duration-500 cursor-pointer border backdrop-blur-md
        ${isActive 
          ? `bg-slate-800/80 ${data.border} ring-1 ring-${data.color}-500/50 scale-[1.02] ${data.bgGlow} z-10` 
          : 'bg-slate-800/40 border-slate-700/50 hover:bg-slate-800/60 hover:border-slate-600 z-0'
        }
      `}
      onClick={onClick}
    >
      {/* Top Gradient Line */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${data.gradient}`}></div>
      
      <div className="p-6 md:p-8">
        {/* Header section of the card */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-4 rounded-2xl ${data.lightBg} ${data.text}`}>
            <Icon className="w-8 h-8" strokeWidth={2} />
          </div>
          <button 
            className={`p-2 rounded-full transition-transform duration-300 ${isActive ? 'rotate-180 bg-slate-700' : 'bg-slate-800/50 hover:bg-slate-700'}`}
            aria-label="Toggle details"
          >
            <ChevronDown className={`w-5 h-5 text-slate-400`} />
          </button>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-3">{data.title}</h2>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {data.shortDesc}
        </p>

        {/* Expandable Details Section */}
        <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden flex flex-col gap-6">
            
            {/* Real Failure Case */}
            <div className={`p-4 rounded-xl border ${data.lightBg} ${data.border}`}>
              <h3 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center ${data.text}`}>
                <AlertTriangle className="w-4 h-4 mr-2" />
                Caso Real
              </h3>
              <p className="text-sm text-slate-200 italic border-l-2 pl-3 border-current opacity-90">
                "{data.realFailure}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Threats */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-3 flex items-center">
                  <XOctagon className="w-4 h-4 mr-2" />
                  Amenazas
                </h3>
                <ul className="space-y-2">
                  {data.threats.map((threat, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500/50 mt-1.5 mr-2 flex-shrink-0"></span>
                      {threat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Protections */}
              <div>
                <h3 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center ${data.text}`}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Protección
                </h3>
                <ul className="space-y-2">
                  {data.protections.map((prot, idx) => (
                    <li key={idx} className="text-sm text-slate-300 flex items-start">
                      <span className={`w-1.5 h-1.5 rounded-full ${data.text.replace('text-', 'bg-')}/50 mt-1.5 mr-2 flex-shrink-0`}></span>
                      {prot}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  // State to track which card is currently expanded. Default to the first one.
  const [activeCard, setActiveCard] = useState('confidentiality');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-6xl relative z-10">
        
        {/* Header */}
        <header className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center justify-center p-2 px-4 rounded-full bg-slate-800/50 border border-slate-700 mb-4 backdrop-blur-sm">
            <Shield className="w-5 h-5 text-emerald-400 mr-2" />
            <span className="text-sm font-medium tracking-wide text-slate-300 uppercase">Fundamentos de Ciberseguridad</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            La Tríada <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400">CIA</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            El modelo fundamental para el desarrollo de políticas de seguridad. Haz clic en cada pilar para explorar sus amenazas y mecanismos de defensa.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 items-start">
          {ciaData.map((data) => (
            <PillarCard 
              key={data.id}
              data={data}
              isActive={activeCard === data.id}
              onClick={() => setActiveCard(activeCard === data.id ? null : data.id)}
            />
          ))}
        </div>

        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 p-4 bg-yellow-500/10 rounded-full border border-yellow-500/20">
              <Info className="w-8 h-8 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">El equilibrio es la clave</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                La seguridad no es un estado absoluto, sino un balance continuo. Implementar demasiados controles de <strong>Confidencialidad</strong> puede arruinar la <strong>Disponibilidad</strong>. Por el contrario, priorizar el acceso rápido sin control destruye la <strong>Integridad</strong> de los datos. La arquitectura perfecta depende del contexto de negocio.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}