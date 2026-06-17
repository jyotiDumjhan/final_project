import React from 'react';

function About() {
  const team = [
    {
      name: "IAMANG JYOTI", // <-- UPDATE WITH YOUR NAME
      role: "Lead Systems Architect",
      accent: "#6f42c1", 
      // Replace this URL with your photo filename (e.g., "me.jpg") once placed in your public folder
      image: "https://avatars.githubusercontent.com/u/202217858?s=400&u=46cfae55bb21b7dc2dba0a68e0b90a8bfdda04ac&v=4",
      description: "Dedicated full-stack engineer focusing heavily on component extraction and data synchronization flows across the application infrastructure.",
      deliverables: [
        { key: "Routing Matrix:", val: "Configured 'react-router-dom' paths, mappings, and navbar links." },
        { key: "State Logic:", val: "Wrote the master 'useState' blocks for theme and data forms." },
        { key: "Persistence Engine:", val: "Engineered 'localStorage' serialization for all cache systems." }
      ]
    },
    {
      name: "MANIKA ACHARYA", // <-- UPDATE WITH PARTNER NAME
      role: "UI/UX & Creative Director",
      accent: "#28a745", 
      // Replace this URL with your partner's photo filename (e.g., "partner.jpg") once placed in your public folder
      image: "https://scontent-icn2-1.xx.fbcdn.net/v/t39.30808-6/473292844_1382639316033351_6535621062749944413_n.jpg?stp=dst-jpg_tt6&cstp=mx640x1422&ctp=s640x1422&_nc_cat=105&ccb=1-7&_nc_sid=94e2a3&_nc_ohc=tNyWTLCqevwQ7kNvwG_uNQn&_nc_oc=AdraYRRSodFdt3Yikb5i7gWB8rGqoJYZ2rwR4aMvWt-qUzOaaw5thHTYxGfsVHs8BB8&_nc_zt=23&_nc_ht=scontent-icn2-1.xx&_nc_gid=rGBmy4oWhM7RuTB-zqTp2g&_nc_ss=7b2a8&oh=00_Af8i2mXHe-Xmgkf41O500vprkPeG1Mjcokclo51e9F_lig&oe=6A389DC6",
      description: "Creative designer managing global aesthetic flow, layout structures, dark mode rules mapping, and interactive interface components.",
      deliverables: [
        { key: "Visual Design:", val: "Created all custom CSS modules and designed the color palette." },
        { key: "Dynamic States:", val: "Managed input forms, error parsing, and interactive modal logic." },
        { key: "Build Optimizations:", val: "Handled project setup configurations and deployment pipelines." }
      ]
    }
  ];

  return (
    <div className="page-container" style={{ maxWidth: '1000px' }}>
      {/* Page Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>Meet the Development Team</h1>
        <p style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          This single page application was conceptualized, designed, and pushed to production through a balanced two-student engineering partnership.
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {team.map((member, index) => (
          <div key={index} className="card" style={{
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: `6px solid ${member.accent}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '12px',
            backgroundColor: 'white',
            boxShadow: '0 8px 16px rgba(0,0,0,0.06)'
          }}>
            <div>
              {/* Profile Image Frame */}
              <div style={{
                width: '80px',
                height: '80px',
                marginBottom: '1.5rem',
                borderRadius: '50%',
                overflow: 'hidden',
                border: `3px solid ${member.accent}`,
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover' // Prevents your photos from stretching out of shape
                  }} 
                />
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                {member.name}
              </h2>
              
              <span style={{ 
                fontSize: '0.9rem', 
                fontWeight: '600', 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                color: member.accent,
                display: 'inline-block',
                marginBottom: '1.25rem',
                backgroundColor: `${member.accent}10`,
                padding: '4px 8px',
                borderRadius: '4px'
              }}>
                {member.role}
              </span>

              <p style={{ fontSize: '1rem', color: 'inherit', opacity: '0.9', lineHeight: '1.65', marginBottom: '2rem', fontStyle: 'italic' }}>
                "{member.description}"
              </p>

              {/* Responsibilities List Section */}
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#6c757d', marginBottom: '1rem' }}>Main Engineering Contributions:</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {member.deliverables.map((task, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                    <span style={{ color: member.accent, fontWeight: 'bold' }}>✓</span>
                    <p style={{ margin: '0', color: 'inherit' }}>
                      <strong style={{ opacity: 1 }}>{task.key}</strong> <span style={{ opacity: 0.85 }}>{task.val}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual background accent */}
            <div style={{
              position: 'absolute',
              bottom: '-10px',
              right: '-10px',
              fontSize: '5rem',
              opacity: 0.05,
              fontWeight: '900',
              color: member.accent,
              transform: 'rotate(-10deg)'
            }}>
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;