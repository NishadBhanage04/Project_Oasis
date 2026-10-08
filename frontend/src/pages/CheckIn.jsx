import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const CheckIn = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    mood: '',
    factors: [],
    stress_level: 5,
    note: ''
  });

  const moods = ['Great', 'Good', 'Okay', 'Stressed', 'Low'];
  const factorOptions = ['Academics', 'Exams', 'Assignments', 'Career', 'Relationships', 'Personal', 'Financial', 'Other'];

  const toggleFactor = (factor) => {
    setFormData(prev => ({
      ...prev,
      factors: prev.factors.includes(factor)
        ? prev.factors.filter(f => f !== factor)
        : [...prev.factors, factor]
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await api.submitMood(formData);
      navigate('/dashboard');
    } catch (err) {
      alert('Failed to save check-in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ paddingTop: '40px', maxWidth: '600px' }}>
      <div className="card" style={{ textAlign: 'center' }}>
        {step === 1 && (
          <div>
            <h3>How are you feeling today?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
              {moods.map(m => (
                <button
                  key={m}
                  onClick={() => { setFormData({...formData, mood: m}); setStep(2); }}
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    border: formData.mood === m ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                    backgroundColor: formData.mood === m ? 'var(--accent-soft)' : 'var(--surface-color)',
                    color: 'var(--text-color)',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3>What's affecting you today?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
              {factorOptions.map(f => (
                <button
                  key={f}
                  onClick={() => toggleFactor(f)}
                  style={{
                    padding: '15px',
                    borderRadius: '12px',
                    border: formData.factors.includes(f) ? '2px solid var(--primary-color)' : '1px solid var(--border-color)',
                    backgroundColor: formData.factors.includes(f) ? 'var(--accent-soft)' : 'var(--surface-color)',
                    color: 'var(--text-color)',
                    cursor: 'pointer'
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={() => setStep(1)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>Back</button>
              <button onClick={() => setStep(3)} className="btn-primary">Next</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3>How stressed do you feel?</h3>
            <div style={{ margin: '40px 0' }}>
              <input
                type="range"
                min="1"
                max="10"
                value={formData.stress_level}
                onChange={(e) => setFormData({...formData, stress_level: parseInt(e.target.value)})}
                style={{ width: '100%', accentColor: 'var(--primary-color)' }}
              />
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--primary-color)', marginTop: '10px' }}>
                {formData.stress_level}
              </div>
            </div>
            <div style={{ textAlign: 'left', marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>Want to add a note?</label>
              <textarea
                placeholder="What's on your mind?"
                value={formData.note}
                onChange={(e) => setFormData({...formData, note: e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--surface-color)',
                  color: 'var(--text-color)',
                  minHeight: '100px',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="btn-primary"
              style={{ width: '100%', padding: '15px' }}
            >
              {loading ? 'Saving...' : 'Save Check-in'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckIn;
