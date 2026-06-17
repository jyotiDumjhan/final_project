import React from 'react';

function Home() {
  const coreDeliverables = [
    {
      title: "React Router DOM",
      tagline: "Active Multi-Route Engine",
      description: "Enables seamless, instantaneous client-side navigation across 5 separate views without forcing a full web browser page refresh.",
      color: "#007bff",
      icon: "🌐"
    },
    {
      title: "Layer Separation",
      tagline: "Isolated Code Architecture",
      description: "Maintains a clean workspace by splitting structural page wrappers from reusable sub-components (like our Todo milestone tracker).",
      color: "#6f42c1",
      icon: "📁"
    },
    {
      title: "useState Hook",
      tagline: "Dynamic Runtime Memory",
      description: "Captures, updates, and tracks user input data instantly—such as active search queries, text forms, and theme states.",
      color: "#e83e8c",
      icon: "⚡"
    },
    {
      title: "useEffect Hook",
      tagline: "Lifecycle Synchronization",
      description: "Monitors the system state changes to execute side-effects, dynamically updating the global window context or document background settings.",
      color: "#fd7e14",
      icon: "🔄"
    },
    {
      title: "Local Storage",
      tagline: "Persistent Data Engine",
      description: "Commits tracking inputs into the browser storage registry, preserving user custom settings and tasks safely across browser reloads.",
      color: "#28a745",
      icon: "💾"
    }
  ];

  return (
    <div className="page-container" style={{ maxWidth: '1100px' }}>
      {/* Hero Header Section */}
      <div className="hero-banner" style={{
        background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
        color: 'white',
        padding: '3rem 2rem',
        borderRadius: '12px',
        textAlign: 'center',
        marginBottom: '3rem',
        boxShadow: '0 10px 20px rgba(0,123,255,0.15)'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '700' }}>
          Welcome to Our React Final Portfolio
        </h1>
        <p style={{ fontSize: '1.15rem', opacity: '0.9', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
          This web application acts as our official cumulative exam replacement project, highlighting core architectural design patterns, dynamic state management, and custom responsive layouts built using React.
        </p>
      </div>

      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600' }}>Core Project Deliverables Met</h2>
        <p style={{ color: '#6c757d' }}>An interactive technical breakdown of the modules engineered this semester.</p>
      </div>

      {/* Visual Component & Explanation Grid */}
      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {coreDeliverables.map((item, index) => (
          <div key={index} className="card" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderTop: `5px solid ${item.color}`,
            borderRadius: '8px',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div>
              {/* Graphic/Visual Box Placeholder */}
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: `${item.color}15`,
                color: item.color,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.25rem',
                fontWeight: 'bold'
              }}>
                {item.icon}
              </div>

              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>{item.title}</h3>
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                color: item.color,
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                {item.tagline}
              </span>
              
              <p style={{ fontSize: '0.95rem', color: 'inherit', opacity: '0.85', lineHeight: '1.6', margin: '0' }}>
                {item.description}
              </p>
            </div>
            
            {/* Minimalist graphic accent representing system module layers */}
            <div style={{
              marginTop: '1.5rem',
              height: '4px',
              width: '100%',
              backgroundColor: '#e2e8f0',
              borderRadius: '2px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                left: '0',
                top: '0',
                height: '100%',
                width: '100%',
                backgroundColor: item.color,
                animation: 'pulse 2s infinite',
                opacity: 0.3
              }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;