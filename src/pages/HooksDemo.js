import React, { useState, useEffect } from 'react';
import TodoWidget from '../components/TodoWidget';

function HooksDemo() {
  // 1. Theme state sourced directly from local cache fallback
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app-portfolio-theme') || 'light';
  });

  // 2. Form caching state block
  const [scratchpad, setScratchpad] = useState(() => {
    return localStorage.getItem('app-portfolio-scratchpad') || '';
  });

  // 3. Side-Effect: Manipulate global document classes when theme updates
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('app-portfolio-theme', theme);
  }, [theme]);

  // 4. Side-Effect: Commit text cache string shifts instantly
  useEffect(() => {
    localStorage.setItem('app-portfolio-scratchpad', scratchpad);
  }, [scratchpad]);

  return (
    <div className="page-container" style={{ maxWidth: '1100px' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          Active Hooks Control Console
        </h1>
        <p style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Real-time interface executing data lifecycle synchronization, functional state transitions, and persistent storage engines.
        </p>
      </div>

      {/* Two Column Control Panel Layout */}
      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
        
        {/* Module 1: Theme Switch Engine */}
        <div className="card" style={{
          borderTop: '5px solid #28a745',
          borderRadius: '10px',
          padding: '2.25rem',
          backgroundColor: 'white',
          boxShadow: '0 6px 15px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#28a745', textTransform: 'uppercase', letterSpacing: '1px' }}>
                System Module 01
              </span>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#e2f0d9', color: '#28a745', padding: '2px 8px', borderRadius: '12px', fontWeight: '600' }}>
                Active Side-Effect
              </span>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.5rem' }}>Global Theme Registry</h2>
            <p style={{ fontSize: '0.9rem', opacity: '0.8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Utilizes <code>useState</code> to change app aesthetics and <code>useEffect</code> to map the active styling class to the global HTML document.
            </p>

            <div style={{ 
              padding: '1rem', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '6px', 
              marginBottom: '1.5rem',
              border: '1px solid #e9ecef',
              color: '#212529'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                Active Runtime Mode: <strong style={{ color: '#28a745' }}>{theme.toUpperCase()}</strong>
              </p>
            </div>
          </div>

          <button 
            className="btn-toggle" 
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            style={{ width: '100%', padding: '0.75rem', fontSize: '0.95rem', borderRadius: '6px' }}
          >
            Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode Landscape
          </button>
        </div>

        {/* Module 2: Persistent Storage Scratchpad */}
        <div className="card" style={{
          borderTop: '5px solid #fd7e14',
          borderRadius: '10px',
          padding: '2.25rem',
          backgroundColor: 'white',
          boxShadow: '0 6px 15px rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#fd7e14', textTransform: 'uppercase', letterSpacing: '1px' }}>
                System Module 02
              </span>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#fff3cd', color: '#fd7e14', padding: '2px 8px', borderRadius: '12px', fontWeight: '600' }}>
                Memory Cache
              </span>
            </div>

            <h2 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '0.5rem' }}>Persistent Local Storage</h2>
            <p style={{ fontSize: '0.9rem', opacity: '0.8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Binds the text string value changes into the browser storage engine instantly, preventing data loss during explicit window refreshes.
            </p>
          </div>

          <div>
            <textarea 
              value={scratchpad}
              onChange={(e) => setScratchpad(e.target.value)}
              placeholder="Type persistent code reflections or development logs here..."
              rows="4"
              style={{ borderRadius: '6px', fontSize: '0.9rem', marginBottom: '0.5rem', width: '100%' }}
            />
            <div style={{ textAlign: 'right', fontSize: '0.8rem', color: '#6c757d' }}>
              Character Count: {scratchpad.length}
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Component Widget Section */}
      <div style={{ marginTop: '3rem' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', margin: 0 }}>Isolated Component Render Layer</h3>
          <p style={{ color: '#6c757d', margin: 0, fontSize: '0.95rem' }}>Demonstrating prop piping boundaries and nested state management.</p>
        </div>
        <TodoWidget />
      </div>
    </div>
  );
}

export default HooksDemo;