import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import MoodHistoryChart from '../components/MoodHistoryChart';
import RecommendationCard from '../components/RecommendationCard';

const Dashboard = () => {
  const [history, setHistory] = useState([]);
  const [today, setToday] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await api.getHistory();
        setHistory(data);
        if (data && data.length > 0) {
          setToday(data[0]);
        }
      } catch (err) {
        console.error('Error loading dashboard data', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="container" style={{ textAlign: 'center', paddingTop: '100px' }}>Loading your journey...</div>;

  return (
    <div className="container" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '32px', margin: 0 }}>Your Wellness Dashboard</h2>
        <Link to="/check-in">
          <button className="btn-primary" style={{
            fontSize: '18px',
            padding: '12px 24px',
            boxShadow: '0 8px 20px var(--shadow)',
            transform: 'scale(1.1)',
            transition: 'transform 0.2s',
            fontWeight: 'bold'
          }}>
            + New Check-in
          </button>
        </Link>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '40px' }}>
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Today's Overview</h3>
          {today ? (
            <div style={{ marginTop: '20px' }}>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--primary-color)', marginBottom: '10px' }}>
                {today.stress_category} Stress
              </div>
              <p style={{ marginBottom: '10px' }}>
                <strong style={{ color: 'var(--text-color)' }}>Mood:</strong> {today.mood} | <strong style={{ color: 'var(--text-color)' }}>Level:</strong> {today.stress_level}/10
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.5' }}>
                Your current check-in indicates {today.stress_category?.toLowerCase()} stress, with {today.factors ? today.factors.split(',').join(', ') : 'various factors'} appearing to be a contributor.
              </p>
            </div>
          ) : (
            <p style={{ color: 'var(--text-secondary)' }}>No check-in for today yet.</p>
          )}
        </div>

        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>Suggestions for You</h3>
          <div style={{ marginTop: '20px' }}>
            {today ? (
              <>
                <RecommendationCard icon="🧘" text="Take a short reset" />
                <RecommendationCard icon="📚" text="Break your task into smaller goals" />
                <RecommendationCard icon="🚶" text="Step away for a few minutes" />
              </>
            ) : (
              <p style={{ color: 'var(--text-secondary)' }}>Complete a check-in to see recommendations.</p>
            )}
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '20px' }}>Your Recent Journey</h3>
        <div style={{ marginTop: '20px' }}>
          <MoodHistoryChart data={history} />
        </div>
      </div>

      <div className="card" style={{ backgroundColor: 'var(--accent-soft)', borderColor: 'var(--primary-color)', marginBottom: '40px' }}>
        <h3 style={{ marginBottom: '15px' }}>Music for Your Mood</h3>
        <p style={{ marginBottom: '20px', color: 'var(--text-secondary)' }}>
          Spotify integration — coming in a future version.
        </p>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{ padding: '10px 20px', background: 'var(--surface-color)', borderRadius: '20px', border: '1px solid var(--border-color)', fontSize: '14px', color: 'var(--text-color)' }}>Lo-fi Study Beats</div>
          <div style={{ padding: '10px 20px', background: 'var(--surface-color)', borderRadius: '20px', border: '1px solid var(--border-color)', fontSize: '14px', color: 'var(--text-color)' }}>Deep Focus</div>
          <div style={{ padding: '10px 20px', background: 'var(--surface-color)', borderRadius: '20px', border: '1px solid var(--border-color)', fontSize: '14px', color: 'var(--text-color)' }}>Calm Piano</div>
        </div>
      </div>

      <div className="card" style={{ opacity: 0.8 }}>
        <h3 style={{ marginBottom: '15px' }}>Find Professional Support</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
          OASIS plans to partner with verified mental-health professionals so students can find appropriate professional support when needed.
        </p>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '15px', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
          <div style={{ fontSize: '24px' }}>👨‍⚕️</div>
          <div>
            <div style={{ fontWeight: 'bold', color: 'var(--text-color)' }}>Example Professional (Mock)</div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Specialization: Student Counselling | ✓ Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
