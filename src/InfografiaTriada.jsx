import React from 'react';

export default function InfografiaTriada() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#38bdf8' }}>Tríada de la Seguridad de la Información</h1>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8' }}>Los tres pilares fundamentales para proteger los datos en cualquier organización.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Confidencialidad */}
        <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #3b82f6' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔒</div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Confidencialidad</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Garantiza que la información sea accesible únicamente por personas autorizadas.</p>
          <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8' }}>
            <li>Cifrado de datos</li>
            <li>Control de acceso (RBAC)</li>
            <li>Autenticación de dos factores (2FA)</li>
          </ul>
        </div>

        {/* Integridad */}
        <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #10b981' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🛡️</div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Integridad</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Asegura que los datos sean precisos, completos y no hayan sido alterados indebidamente.</p>
          <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8' }}>
            <li>Funciones Hash (SHA-256)</li>
            <li>Firmas digitales</li>
            <li>Control de versiones</li>
          </ul>
        </div>

        {/* Disponibilidad */}
        <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '12px', borderTop: '4px solid #f59e0b' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Disponibilidad</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '1rem' }}>Garantiza que los sistemas y la información estén accesibles cuando se requieran.</p>
          <ul style={{ paddingLeft: '1.2rem', color: '#94a3b8' }}>
            <li>Copias de seguridad (Backups)</li>
            <li>Sistemas redundantes</li>
            <li>Protección contra ataques DDoS</li>
          </ul>
        </div>
      </div>
    </div>
  );
}