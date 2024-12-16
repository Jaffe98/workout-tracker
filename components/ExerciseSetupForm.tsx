import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ExerciseSetupForm = () => {
  const [name, setName] = useState('');
  const [days, setDays] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [exercises, setExercises] = useState([]);
  const [editedExercises, setEditedExercises] = useState({});

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    const { data, error } = await supabase.from('exercise_list').select('*');
    if (data) {
      setExercises(data);
      const initialEdits = {};
      data.forEach((exercise) => {
        initialEdits[exercise.id] = [...exercise.days];
      });
      setEditedExercises(initialEdits);
    }
    if (error) console.error('Error fetching exercises:', error);
  };

  const handleDayChange = (exerciseId, day) => {
    setEditedExercises((prevEdits) => {
      const updatedDays = prevEdits[exerciseId].includes(day)
        ? prevEdits[exerciseId].filter((d) => d !== day)
        : [...prevEdits[exerciseId], day];
      return { ...prevEdits, [exerciseId]: updatedDays };
    });
  };

  const handleSaveChanges = async () => {
    for (const [id, updatedDays] of Object.entries(editedExercises)) {
      const { error } = await supabase.from('exercise_list').update({ days: updatedDays }).eq('id', id);
      if (error) console.error('Error updating exercise:', error);
    }
    setSuccessMessage('Changes saved!');
    setTimeout(() => setSuccessMessage(''), 3000);
    fetchExercises();
  };

  const handleSubmit = async () => {
    if (!name) {
      alert('Please enter an exercise name.');
      return;
    }

    const { error } = await supabase.from('exercise_list').insert([{ name, days }]);
    if (error) {
      console.error('Error adding exercise:', error);
      alert('Failed to add exercise. Please try again.');
    } else {
      setName('');
      setDays([]);
      setSuccessMessage(`${name} exercise added!`);
      setTimeout(() => setSuccessMessage(''), 3000);
      fetchExercises();
    }
  };

  const handleDelete = async (exerciseId: number) => {
    const { error } = await supabase.from('exercise_list').delete().eq('id', exerciseId);
    if (error) {
      console.error('Error deleting exercise:', error);
      alert('Failed to delete exercise. Please try again.');
    } else {
      setSuccessMessage('Exercise deleted!');
      setTimeout(() => setSuccessMessage(''), 3000);
      fetchExercises();
    }
  };

  return (
    <div className="setup-form">
      <a href="/" className="done-link">Done setting up exercises</a>

      <h2>Setup New Exercise</h2>

      {successMessage && <div className="success-message fade-in-out">{successMessage}</div>}

      <div className="form-group">
        <label>Exercise Name</label>
        <input
          type="text"
          placeholder="Enter exercise name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-input"
        />
      </div>

      <div className="form-group">
        <label>Days</label>
        <div className="checkbox-group">
          {DAYS_OF_WEEK.map((day) => (
            <label key={day} className="checkbox-label">
              <input
                type="checkbox"
                checked={days.includes(day)}
                onChange={() => setDays((prevDays) =>
                  prevDays.includes(day) ? prevDays.filter((d) => d !== day) : [...prevDays, day]
                )}
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} className="submit-button">Add Exercise</button>

      <h3>Existing Exercises</h3>
      <table className="exercise-table">
        <thead>
          <tr>
            <th>Exercise Name</th>
            {DAYS_OF_WEEK.map((day) => (
              <th key={day}>{day}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.id}>
              <td>{exercise.name}</td>
              {DAYS_OF_WEEK.map((day) => (
                <td key={day}>
                  <input
                    type="checkbox"
                    checked={editedExercises[exercise.id]?.includes(day)}
                    onChange={() => handleDayChange(exercise.id, day)}
                  />
                </td>
              ))}
              <td>
                <button onClick={() => handleDelete(exercise.id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleSaveChanges} className="save-button">Save Changes</button>
    </div>
  );
};

export default ExerciseSetupForm;
