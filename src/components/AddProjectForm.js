import React from 'react';
import { useState } from 'react';

export default function AddProjectForm() {
  //setting the state
  const [title, setTitle] = useState('');
  const [work, setWork] = useState('');
  const [hours, setHours] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    //prevent the page from being submmited
    console.log(event);
    event.preventDefault();

    const workout = { title, work, hours };
    console.log(workout);

    const response = await fetch('http://localhost:3000/api/workouts/', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (response.ok) {
      setTitle('');
      setHours('');
      setWork('');
      setError(null);
      console.log('new Skill added', json);
    }
    if (!response.ok) {
      setError(json.error);
    }
  };
  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Create A New Skill</h3>

      <label>Title:</label>
      <input
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></input>
      <label>Description:</label>
      <input
        type='text'
        onChange={(e) => setWork(e.target.value)}
        value={work}
      ></input>
      <label>Duration(hrs):</label>
      <input
        type='number'
        onChange={(e) => setHours(e.target.value)}
        value={hours}
      ></input>

      <button>Add Skill</button>
      {error && <div className='error'>{error}</div>}
    </form>
  );
}
