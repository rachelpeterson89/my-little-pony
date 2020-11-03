import React, { useState } from 'react';
import './App.css';
import PonyCard from './components/PonyCard';
import PonyForm from './components/PonyForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // form manages the state of the form
  const [ form, setForm ] = useState({
    name: "",
    bodyColor: "",
    maneColor: "",
    age: 0,
    hasWings: "No",
    isUnicorn: "No",
    isSelected: false
  })

  // use this to handle form
  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  // ponies manages the state of the ponies
  const [ ponies, setPonies ] = useState([
    {
      name: "Applejack",
      bodyColor: "Orange",
      maneColor: "Yellow",
      age: 6,
      hasWings: "No", 
      isUnicorn: "No",
      isSelected: true
    }, 
    {
      name: "Rainbowdash",
      bodyColor: "Skyblue",
      maneColor: "Rainbow",
      age: 3,
      hasWings: "Yes",
      isUnicorn: "No",
      isSelected: false
    },
    {
      name: "Rarity",
      bodyColor: "White",
      maneColor: "Purple and Pink",
      age: 8,
      hasWings: "No",
      isUnicorn: "Yes",
      isSelected: false
    },
    {
      name: "Minty",
      bodyColor: "Mint Green",
      maneColor: "Pink and White",
      age: 11,
      hasWings: "No",
      isUnicorn: "No",
      isSelected: false
    },

  ])

  // adds a pony from form to the array of ponies
  // handling the submission of the form
  const handleAddPony = (e) => {
    e.preventDefault();
    setPonies([ form, ...ponies ]);
    setForm({
      name: "",
      bodyColor: "",
      maneColor: "",
      age: 0,
      hasWings: "",
      isUnicorn: "",
      isSelected: false
    })
  }

  // add function to free a pony
  // takes a specific object out of pony array based off of index
  const free = (idx) => {
    // ...ponies.slice(0,idx) handles everything before the pony
    // ...ponies.slice(idx+1) handles everything after the pony
    setPonies([...ponies.slice(0,idx), ...ponies.slice(idx+1)])
  }

  // Toggles the selected pony
  const togglePony = (idx) => {
    ponies.forEach(( pony, i ) => {
      let updatePony = pony;

      if ( idx === i) {
        updatePony.isSelected = true;
      } else {
        pony.isSelected = false;
      }
      setPonies(
        [...ponies.slice(0,i),updatePony].concat(ponies.slice(i+1)));
    })
  }

  return (
    <>
      <div className="form">
        <PonyForm 
          inputs={ form } 
          handleForm={ handleForm }
          handleSubmit={ handleAddPony }
        />

        {
          ponies.map(( pony, i ) => {
            return pony.isSelected ? <h1 className="text-center">{pony.name} is Selected</h1> : null
          })
        }
      </div>
      <div className="main">
        {
          ponies.map( (pony, i) => {
              return <PonyCard 
                key={i}
                idx={i}
                name={pony.name}
                bodyColor={pony.bodyColor}
                maneColor={pony.maneColor}
                age={pony.age}
                hasWings={pony.hasWings}
                isUnicorn={pony.isUnicorn}
                freePony={free}
                isSelected={pony.isSelected}
                togglePony={togglePony}
              />
          })
        }
      </div>
    </>
  );
}

export default App;