import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Workout, Exercise } from '../types';

const WorkoutEntryForm = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [weight, setWeight] = useState<number | ''>('');
  const [reps, setReps] = useState<number | ''>('');
  const [sets, setSets] = useState<number | ''>('');
  const [notes, setNotes] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    const { data, error } = await supabase.from('exercise_list').select('name');
    if (data) {
      setExercises(data as Exercise[]);
    }
    if (error) console.error('Error fetching exercises:', error);
  };

  const fetchLastWorkout = async (exerciseName: string) => {
    if (!exerciseName) return;
    
    const { data, error } = await supabase
      .from('workouts')
      .select('*')
      .eq('exercise_name', exerciseName)
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (data && data[0]) {
      setWeight(data[0].weight);
      setReps(data[0].reps);
      setSets(data[0].sets);
      setNotes(data[0].notes);
    } else {
      setWeight('');
      setReps('');
      setSets('');
      setNotes('');
    }

    if (error) console.error('Error fetching last workout:', error);
  };

  const handleSubmit = async () => {
    if (!exerciseName || !weight || !reps || !sets) {
      alert('Please fill in all required fields before submitting.');
      return;
    }

    const { data, error } = await supabase.from('workouts').insert([{
      date,
      exercise_name: exerciseName,
      weight: Math.abs(Number(weight)),
      reps: Math.abs(Number(reps)),
      sets: Math.abs(Number(sets)),
      notes: notes || ''
    }]);

    if (!error) {
      showConfirmationMessage(`${exerciseName} workout logged!`);
      clearFormFields();
    } else {
      alert('There was an issue logging the workout. Please try again.');
    }
  };

  const clearFormFields = () => {
    setExerciseName('');
    setDate(new Date().toISOString().split('T')[0]);
    setWeight('');
    setReps('');
    setSets('');
    setNotes('');
  };

  const showConfirmationMessage = (message: string) => {
    setConfirmationMessage(message);
    setTimeout(() => setConfirmationMessage(''), 3000);
  };

  return (
    <div className="workout-form">
      <a href="/setup" className="done-link">Setup Exercises</a>

      {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}

      <h2>Log Workout</h2>

      <div className="form-group">
        <label>Exercise</label>
        <select value={exerciseName} onChange={(e) => {
          const selectedExercise = e.target.value;
          setExerciseName(selectedExercise);
          fetchLastWorkout(selectedExercise);
        }}>
          <option value="">Select an exercise</option>
          {exercises.map((exercise) => (
            <option key={exercise.name} value={exercise.name}>
              {exercise.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Weight</label>
        <input type="number" value={weight} min="0" onChange={(e) => setWeight(Math.abs(Number(e.target.value)))} />
      </div>

      <div className="form-group">
        <label>Sets</label>
        <input type="number" value={sets} min="0" onChange={(e) => setSets(Math.abs(Number(e.target.value)))} />
      </div>

      <div className="form-group">
        <label>Reps</label>
        <input type="number" value={reps} min="0" onChange={(e) => setReps(Math.abs(Number(e.target.value)))} />
      </div>

      <div className="form-group">
        <label>Notes</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>

      <button className="orange-button" onClick={handleSubmit}>Log Workout</button>
    </div>
  );
};

export default WorkoutEntryForm;
