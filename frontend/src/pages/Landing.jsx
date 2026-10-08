import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="container" style={{ textAlign: 'center', paddingTop: '80px' }}>
      <h1 style={{
        fontSize: '80px',
        fontWeight: 'bold',
        marginBottom: '10px',
        letterSpacing: '8px',
        color: 'var(--primary-color)',
        transform: 'rotate(-2deg)',
        display: 'inline-block'
      }}>OASIS</h1>
      <h3 style={{ fontSize: '24px', color: 'var(--text-secondary)', marginBottom: '30px', fontWeight: '400' }}>
        Understand your mind. Improve your journey.
      </h3>
      <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
        College life can be overwhelming. OASIS helps you understand your stress patterns, reflect on how you're feeling, and build healthier study and wellness habits.
      </p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '80px' }}>
        <Link to="/check-in">
          <button className="btn-primary" style={{ fontSize: '18px', padding: '15px 30px' }}>Start Your Check-in</button>
        </Link>
        <Link to="/dashboard">
          <button style={{
            background: 'none',
            border: '1px solid var(--border-color)',
            padding: '15px 30px',
            borderRadius: '8px',
            color: 'var(--text-color)',
            fontSize: '18px',
            fontWeight: '500'
          }}>Explore OASIS</button>
        </Link>
      </div>

      <div style={{ textAlign: 'left', marginBottom: '80px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>What OASIS helps with</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {[
            { title: 'Track', desc: 'Track your mood and stress over time.' },
            { title: 'Understand', desc: 'Identify patterns in the factors affecting your well-being.' },
            { title: 'Personalize', desc: 'Receive wellness suggestions based on your current state.' },
            { title: 'Connect', desc: 'Find appropriate professional support when needed.' },
          ].map((item, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <h4 style={{ marginBottom: '10px', color: 'var(--primary-color)' }}>{item.title}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', opacity: 0.7, marginBottom: '40px' }}>
        OASIS provides general wellness guidance and does not diagnose or replace professional mental-health care.
      </p>
    </div>
  );
};

export default Landing;
