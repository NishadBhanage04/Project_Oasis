import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MoodHistoryChart = ({ data }) => {
  if (!data || data.length === 0) {
    return <p style={{ textAlign: 'center', padding: '20px', color: 'var(--text-secondary)' }}>Your mood history will appear here as you complete more check-ins.</p>;
  }

  const chartData = [...data].reverse().map(entry => ({
    date: new Date(entry.created_at).toLocaleDateString(),
    level: entry.stress_level
  }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
          <XAxis dataKey="date" stroke="var(--text-secondary)" />
          <YAxis domain={[0, 10]} stroke="var(--text-secondary)" />
          <Tooltip
            contentStyle={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)', color: 'var(--text-color)' }}
          />
          <Line type="monotone" dataKey="level" stroke="var(--primary-color)" strokeWidth={3} dot={{ fill: 'var(--primary-color)' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodHistoryChart;
