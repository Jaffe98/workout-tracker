import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Exercise } from '../types';

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ExerciseSetupForm = () => {
  const [name, setName] = useState('');
  const [days, setDays] = useState<string[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [editedExercises, setEditedExercises] = useState<{ [key: number]: string[] }>({});
  const [confirmationMessage, setConfirmationMessage] = useState<string>('');

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    const { data, error } = await supabase.from('exercise_list').select('*');
    if (data) {
      setExercises(data as Exercise[]);
      const initialEdits: { [key: number]: string[] } = {};
      data.forEach((exercise) => {
        initialEdits[exercise.id] = [...exercise.days];
      });
      setEditedExercises(initialEdits);
    }
    if (error) console.error('Error fetching exercises:', error);
  };

  const handleDayChange = (exerciseId: number, day: string) => {
    setEditedExercises((prevEdits) => {
      const currentDays = prevEdits[exerciseId] || [];
      const updatedDays = currentDays.includes(day)
        ? currentDays.filter((d) => d !== day)
        : [...currentDays, day];
      return { ...prevEdits, [exerciseId]: updatedDays };
    });
  };

  const handleSaveChanges = async () => {
    for (const [exerciseId, updatedDays] of Object.entries(editedExercises)) {
      await supabase
        .from('exercise_list')
        .update({ days: updatedDays })
        .eq('id', Number(exerciseId));
    }
    showConfirmationMessage('Changes saved successfully!');
    fetchExercises();
  };

  const handleDelete = async (exerciseId: number) => {
    await supabase.from('exercise_list').delete().eq('id', exerciseId);
    fetchExercises();
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert('Please enter an exercise name before adding.');
      return;
    }

    const { error } = await supabase.from('exercise_list').insert([{ name, days }]);
    if (!error) {
      showConfirmationMessage(`${name} exercise added!`);
      setName('');
      setDays([]);
      fetchExercises();
    }
  };

  const showConfirmationMessage = (message: string) => {
    setConfirmationMessage(message);
    setTimeout(() => setConfirmationMessage(''), 3000);
  };

  return (
    <div>
      <a href="/" className="done-link">Done setting up exercises</a>

      {confirmationMessage && <div className="confirmation-message">{confirmationMessage}</div>}

      <input 
        type="text" 
        placeholder="Exercise Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />

      <div className="days-checkboxes">
        {DAYS_OF_WEEK.map((day) => (
          <label key={day} className="day-checkbox">
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

      <button className="orange-button small-button" onClick={handleSubmit}>Add Exercise</button>

      <table className="exercise-table">
        <thead>
          <tr>
            <th>Exercise</th>
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
                    checked={editedExercises[exercise.id]?.includes(day) || false} 
                    onChange={() => handleDayChange(exercise.id, day)} 
                  />
                </td>
              ))}
              <td>
                <button onClick={() => handleDelete(exercise.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="orange-button small-button" onClick={handleSaveChanges}>Save Changes</button>
    </div>
  );
};

export default ExerciseSetupForm;
