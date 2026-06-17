import React from 'react';

function Projects() {
  const customProjects = [
    {
      title: "Static Component Architecture",
      phase: "Phase 01 — Core Foundations",
      desc: "An entry-level structural build prioritizing modular JSX parsing, strict layout scoping, and complex element arrangements. Emphasizes clean code isolation practices.",
      tech: "JSX Layouts",
      framework: "React DOM",
      color: "#17a2b8", // Cyan Accent
      metric: "100% Modular"
    },
    {
      title: "Dynamic Control Dashboards",
      phase: "Phase 02 — Interactive State",
      desc: "An advanced state tracking environment evaluating complex system properties, functional props passing, custom event handling, and real-time form data sanitization.",
      tech: "State & Hooks",
      framework: "Event Handling",
      color: "#ffc107", // Amber Accent
      metric: "Real-time Sync"
    },
    {
      title: "Unified Learning Ecosystem",
      phase: "Phase 03 — Capstone Build",
      desc: "Our terminal course portfolio linking multi-view SPA client routing structures with automated data persistence layers. This application replaces our final examination.",
      tech: "React Router",
      framework: "Local Storage",
      color: "#007bff", // Blue Accent
      metric: "Persistent Cache"
    }
  ];

  return (
    <div className="page-container" style={{ maxWidth: '1100px' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          Semester Engineering Repository
        </h1>
        <p style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          A chronological showcase of core development milestones and complex single-page applications built during this semester.
        </p>
      </div>

      {/* Projects Grid Layout */}
      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {customProjects.map((project, index) => (
          <div key={index} className="card" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderLeft: `6px solid ${project.color}`, // Sleek vertical accent bar on the left side
            borderRadius: '10px',
            padding: '2.25rem',
            backgroundColor: 'white',
            boxShadow: '0 6px 15px rgba(0,0,0,0.04)',
            position: 'relative'
          }}>
            <div>
              {/* Phase Header Tag */}
              <div style={{ 
                fontSize: '0.8rem', 
                fontWeight: '700', 
                color: '#6c757d', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                marginBottom: '0.75rem'
              }}>
                {project.phase}
              </div>

              {/* Title */}
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'inherit' }}>
                {project.title}
              </h2>

              {/* Description */}
              <p style={{ fontSize: '0.95rem', opacity: '0.85', lineHeight: '1.65', marginBottom: '1.75rem' }}>
                {project.desc}
              </p>
            </div>

            {/* Bottom Tech Metadata Badges */}
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <span className="badge" style={{ backgroundColor: `${project.color}15`, color: project.color, fontWeight: '600' }}>
                  {project.tech}
                </span>
                <span className="badge" style={{ backgroundColor: '#f1f3f5', color: '#495057' }}>
                  {project.framework}
                </span>
              </div>

              {/* Micro Status Bar Accent */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                paddingTop: '1rem', 
                borderTop: '1px solid #f1f3f5',
                fontSize: '0.85rem'
              }}>
                <span style={{ color: '#6c757d' }}>Status Check:</span>
                <span style={{ fontWeight: '600', color: project.color }}>{project.metric}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;