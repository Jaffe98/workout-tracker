import React, { useState, useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';
import { Exercise } from '../types'; // 🚀 Import the Exercise type

const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ExerciseSetupForm = () => {
  const [name, setName] = useState('');
  const [days, setDays] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [exercises, setExercises] = useState<Exercise[]>([]); // ✅ Correct Type for useState
  const [editedExercises, setEditedExercises] = useState<{ [key: number]: string[] }>({});

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    const { data, error } = await supabase.from('exercise_list').select('*');
    if (data) {
      setExercises(data as Exercise[]); // ✅ Tell TypeScript that data is an array of Exercise
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
      const updatedDays = prevEdits[exerciseId].includes(day)
        ? prevEdits[exerciseId].filter((d) => d !== day)
        : [...prevEdits[exerciseId], day];
      return { ...prevEdits, [exerciseId]: updatedDays };
    });
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

  return (
    <div className="setup-form">
      <a href="/" className="done-link">Done setting up exercises</a>

      <h2>Setup New Exercise</h2>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <div className="form-group">
        <label>Exercise Name</label>
        <input
          type="text"
          placeholder="Enter exercise name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Days</label>
        <div className="checkbox-group">
          {DAYS_OF_WEEK.map((day) => (
            <label key={day}>
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

      <button onClick={handleSubmit}>Add Exercise</button>

      <h3>Existing Exercises</h3>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>
            {exercise.name} ({exercise.days.join(', ')})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseSetupForm;
