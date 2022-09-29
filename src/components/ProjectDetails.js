import React from 'react';
export default function ProjectDetails({ workout }) {
  return (
    <div className='workoutDetails'>
      <h4>Title: {workout.title}</h4>
      <p>
        <strong>Description: {workout.work}</strong>
      </p>
      <p>
        <strong>Length: {workout.hours} Hours</strong>
      </p>
      <p>{workout.createdAt}</p>
      <hr></hr>
    </div>
  );
}
