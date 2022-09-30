import React from 'react';
import { useEffect, useState } from 'react';

//comps
import ProjectDetails from './ProjectDetails';
import AddProjectForm from './AddProjectForm';
export default function Home() {
  const [workout, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts');
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className='home'>
      <div>
        {workout &&
          workout.map((workout) => (
            <ProjectDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <AddProjectForm />
    </div>
  );
}
