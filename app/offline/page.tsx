export default function OfflinePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Estás sin conexión</h1>
      <p style={{ fontSize: '1.25rem' }}>Por favor, revisá tu conexión a internet para continuar usando la aplicación.</p>
    </div>
  );
}
