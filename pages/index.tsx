import React from 'react';
import WorkoutEntryForm from '../components/WorkoutEntryForm';

export default function Home() {
  return (
    <div>
      <h1>Workout Tracker</h1>
      <WorkoutEntryForm />
      <button 
        onClick={() => window.location.href = '/setup'} 
        style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Setup Exercises
      </button>
    </div>
  );
}
