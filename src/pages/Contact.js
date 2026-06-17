import React, { useState } from 'react';

function Contact() {
  const [inputs, setInputs] = useState({ name: '', email: '', text: '' });
  const [log, setLog] = useState('');

  const sendLog = (e) => {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.text) {
      setLog('Please fulfill all layout processing inputs.');
      return;
    }
    setLog(`Thank you, ${inputs.name}! Form processing signal submitted successfully.`);
    setInputs({ name: '', email: '', text: '' });
  };

  return (
    <div className="page-container" style={{ maxWidth: '1100px' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          Contact Academic Team
        </h1>
        <p style={{ color: '#6c757d', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Have open inquiries regarding our functional engineering builds or structural documentation? Drop us an internal log line.
        </p>
      </div>

      {/* Modern Two-Column Layout */}
      <div className="project-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        
        {/* Left Side: Contact Information & Desk Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card" style={{
            borderLeft: '6px solid #007bff',
            borderRadius: '10px',
            padding: '2rem',
            backgroundColor: 'white',
            boxShadow: '0 6px 15px rgba(0,0,0,0.04)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Project Command Station</h3>
            <p style={{ fontSize: '0.95rem', opacity: '0.8', lineHeight: '1.6', margin: 0 }}>
              This transmission matrix directly processes user evaluation states. Messages are validated in real-time utilizing localized functional parameters.
            </p>
          </div>

          <div className="card" style={{
            borderLeft: '6px solid #6f42c1',
            borderRadius: '10px',
            padding: '2rem',
            backgroundColor: 'white',
            boxShadow: '0 6px 15px rgba(0,0,0,0.04)'
          }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.75rem' }}>Submission Parameters:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6c757d' }}>Endpoint Protocol:</span>
                <span style={{ fontWeight: '600' }}>JSX Synthetic Form</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6c757d' }}>Response State:</span>
                <span style={{ fontWeight: '600', color: '#28a745' }}>Active Tracking</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#6c757d' }}>Target Registry:</span>
                <span style={{ fontWeight: '600' }}>University Grading Desk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Beautiful Form Layout Container */}
        <div className="card" style={{
          borderTop: '5px solid #007bff',
          borderRadius: '10px',
          padding: '2.5rem',
          backgroundColor: 'white',
          boxShadow: '0 6px 15px rgba(0,0,0,0.04)'
        }}>
          <form onSubmit={sendLog} style={{ display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem', color: '#495057' }}>
                Full Username
              </label>
              <input 
                type="text" 
                value={inputs.name} 
                onChange={e => setInputs({...inputs, name: e.target.value})} 
                placeholder="Jane Doe" 
                style={{ margin: 0, padding: '0.85rem', borderRadius: '6px' }}
              />
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem', color: '#495057' }}>
                Academic Email
              </label>
              <input 
                type="email" 
                value={inputs.email} 
                onChange={e => setInputs({...inputs, email: e.target.value})} 
                placeholder="janedoe@school.edu" 
                style={{ margin: 0, padding: '0.85rem', borderRadius: '6px' }}
              />
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.5rem', color: '#495057' }}>
                Inquiry Message
              </label>
              <textarea 
                value={inputs.text} 
                onChange={e => setInputs({...inputs, text: e.target.value})} 
                placeholder="Type your message particulars here..." 
                rows="4" 
                style={{ margin: 0, padding: '0.85rem', borderRadius: '6px', resize: 'vertical' }}
              />
            </div>

            <button type="submit" style={{ padding: '0.85rem', fontSize: '1rem', borderRadius: '6px', cursor: 'pointer' }}>
              Submit Transmission
            </button>
          </form>

          {/* Success Notification Banner */}
          {log && (
            <div style={{ 
              marginTop: '1.5rem', 
              padding: '1rem', 
              backgroundColor: log.includes('fulfill') ? '#f8d7da' : '#d4edda', 
              color: log.includes('fulfill') ? '#721c24' : '#155724', 
              border: `1px solid ${log.includes('fulfill') ? '#f5c6cb' : '#c3e6cb'}`,
              borderRadius: '6px',
              fontSize: '0.95rem',
              fontWeight: '500'
            }}>
              {log}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Contact;