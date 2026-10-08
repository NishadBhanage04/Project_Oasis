import React from 'react';

const RecommendationCard = ({ text, icon }) => (
  <div className="card" style={{
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '12px',
    padding: '15px',
    borderLeft: '4px solid var(--primary-color)'
  }}>
    <span style={{ fontSize: '24px' }}>{icon}</span>
    <span style={{ fontSize: '16px', fontWeight: '500' }}>{text}</span>
  </div>
);

export default RecommendationCard;
