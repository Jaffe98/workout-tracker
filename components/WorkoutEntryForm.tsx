import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const WorkoutEntryForm = () => {
  const [exercises, setExercises] = useState([]); // Exercise dropdown options
  const [exerciseName, setExerciseName] = useState('');
  const [weight, setWeight] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [notes, setNotes] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch exercises for the dropdown
  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    const { data, error } = await supabase.from('exercise_list').select('name');
    if (data) setExercises(data);
    if (error) console.error('Error fetching exercises:', error);
  };

  // Fetch the most recent workout record for the selected exercise
  const handleExerciseChange = async (selectedExercise: string) => {
    setExerciseName(selectedExercise);

    if (selectedExercise) {
      const { data, error } = await supabase
        .from('workouts')
        .select('*')
        .eq('exercise_name', selectedExercise)
        .order('created_at', { ascending: false })
        .limit(1);

      if (data && data.length > 0) {
        const { weight, sets, reps, notes } = data[0];
        setWeight(weight || '');
        setSets(sets || '');
        setReps(reps || '');
        setNotes(notes || '');
      } else {
        // Reset fields if no record exists
        setWeight('');
        setSets('');
        setReps('');
        setNotes('');
      }

      if (error) {
        console.error('Error fetching previous workout:', error);
      }
    }
  };

  // Submit the workout record to Supabase
  const handleSubmit = async () => {
    if (!exerciseName || !weight || !sets || !reps) {
      alert('Please fill in all required fields.');
      return;
    }

    const { error } = await supabase.from('workouts').insert([
      {
        date: new Date().toISOString().split('T')[0],
        exercise_name: exerciseName,
        weight: parseInt(weight, 10),
        sets: parseInt(sets, 10),
        reps: parseInt(reps, 10),
        notes: notes || '',
      },
    ]);

    if (!error) {
      setSuccessMessage(`${exerciseName} logged successfully!`);
      setTimeout(() => setSuccessMessage(''), 3000);

      // Clear form fields
      setExerciseName('');
      setWeight('');
      setSets('');
      setReps('');
      setNotes('');
    } else {
      console.error('Error logging workout:', error);
      alert('Error logging workout. Please try again.');
    }
  };

  return (
    <div className="workout-form">
      <h2>Log Workout</h2>

      {successMessage && <div className="success-message fade-in-out">{successMessage}</div>}

      <label>Exercise Name</label>
      <select value={exerciseName} onChange={(e) => handleExerciseChange(e.target.value)} className="dropdown">
        <option value="">Select an Exercise</option>
        {exercises.map((exercise, index) => (
          <option key={index} value={exercise.name}>
            {exercise.name}
          </option>
        ))}
      </select>

      <label>Weight (lbs)</label>
      <input
        type="number"
        placeholder="Enter weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <label>Sets</label>
      <input
        type="number"
        placeholder="Enter sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
      />

      <label>Reps</label>
      <input
        type="number"
        placeholder="Enter reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <label>Notes</label>
      <textarea
        placeholder="Enter notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>

      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default WorkoutEntryForm;
