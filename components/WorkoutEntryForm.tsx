import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Exercise } from '../types'; // ✅ Import the Exercise type

const WorkoutEntryForm = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [weight, setWeight] = useState<number | ''>('');
  const [reps, setReps] = useState<number | ''>('');
  const [sets, setSets] = useState<number | ''>('');
  const [notes, setNotes] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([]); // ✅ Add TypeScript type

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    const { data, error } = await supabase.from('exercise_list').select('name');
    if (data) setExercises(data as Exercise[]); // ✅ Use "data as Exercise[]"
    if (error) console.error('Error fetching exercises:', error);
  };

  const handleSubmit = async () => {
    if (!exerciseName) {
      alert('Please select an exercise name.');
      return;
    }

    const { error } = await supabase.from('workouts').insert([{
      exercise_name: exerciseName,
      weight,
      reps,
      sets,
      notes
    }]);

    if (error) {
      console.error('Error adding workout:', error);
      alert('Failed to add workout. Please try again.');
    } else {
      setExerciseName('');
      setWeight('');
      setReps('');
      setSets('');
      setNotes('');
      alert('Workout logged successfully!');
    }
  };

  return (
    <div className="workout-entry-form">
      <h2>Log Workout</h2>

      <div className="form-group">
        <label>Exercise</label>
        <select value={exerciseName} onChange={(e) => setExerciseName(e.target.value)}>
          <option value="">Select an exercise</option>
          {exercises.map((exercise) => (
            <option key={exercise.name} value={exercise.name}>
              {exercise.name}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="Enter weight"
        />
      </div>

      <div className="form-group">
        <label>Reps</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
          placeholder="Enter reps"
        />
      </div>

      <div className="form-group">
        <label>Sets</label>
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(Number(e.target.value))}
          placeholder="Enter sets"
        />
      </div>

      <div className="form-group">
        <label>Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes (optional)"
        />
      </div>

      <button onClick={handleSubmit}>Log Workout</button>
    </div>
  );
};

export default WorkoutEntryForm;
