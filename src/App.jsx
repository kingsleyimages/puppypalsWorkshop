import React from 'react';
import { useState } from 'react';

import { puppyList } from './data';

import styles from './App.module.css';
function App() {
  // define a constant array with the name puppies that will update using the useState hook and the setPuppies function

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console.log(puppies);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    <>
      <h1>Puppy Pals</h1>
      {/* javascript must be in braces to execute in jsx */}
      {puppies.map((puppy) => (
        <p
          className={styles['puppy-name']}
          onClick={() => {
            setFeatPupId(puppy.id);
          }}
          key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {featPupId && (
        <div className={styles['featured']}>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>
              <span>Age:</span> {featuredPup.age}
            </li>
            <li>
              <span>Email:</span> {featuredPup.email}
            </li>
            <li>
              <span>Tricks:</span>{' '}
              {/* map over subaray of tricks and return the titles of each trick */}
              {featuredPup.tricks
                .map((trick) => {
                  if (trick.title.length > 0) {
                    return trick.title;
                  } else {
                    return 'No trick skills';
                  }
                })
                .join(', ')}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default App;
