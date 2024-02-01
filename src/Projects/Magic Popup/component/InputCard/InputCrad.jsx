import React from 'react';
import { useState, useEffect } from 'react';
import './InputCard.css';
import "../Popup.css"
import Popup from '../Popup.component';

const InputCard = () => {
  const [userData, setUserData] = useState([]);
  const [newUser, setNewUser] = useState({username: "", userAge: ""});
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const handleInputChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleAddUser = () => {
    if(newUser.username === "" || newUser.userAge <=0) {
      setShowPopup(true)
    }
    else {
      setUserData([...userData, newUser]);
      setNewUser({username: "", userAge: ""})
      setShowPopup(false)
    }
  };

  const emptyField =
  newUser.username === ""
    ? "User Name cant be empty"
    : newUser.userAge === "" || (newUser.userAge !== "" && newUser.userAge <= 0)
    ? "User Age cant be negative or empty"
    : "Set your username and age";



   return showPopup ? <Popup setShowPopup={setShowPopup} emptyField={emptyField} /> :

 (
    <>
   
    <div className='flex items-center p-10 justify-center'>
      {/* Input Section */}
      
      <div className='flex flex-col items-center m-10 px-10 py-5 bg-slate-500'>
        <input
          onChange={handleInputChange}
          className='ml-5 mb-3 mr-5 rounded-md px-3 py-1'
          name='username'
          type='text'
          placeholder='Enter username'
          value={newUser.username}
        />
        <input
          onChange={handleInputChange}
          name='userAge'
          className='ml-5 mb-3 mr-5 rounded-md px-3 py-1'
          type='number'
          placeholder='Enter age'
          value={newUser.userAge}
        />
        <button onClick={handleAddUser} className='glow-on-hover p-2 rounded-xl mt-3'>
          Add User
        </button>
      </div>
    </div>

    <div className='flex items-center justify-center'>
    <div className='flex flex-col  items-center m-10 px-10 py-5 bg-slate-500 rounded-lg'>
    <p className="text-3xl font-bold underline mb-5">User List</p>
    
    <ul>
      {userData.map((user) => (
        <li
          className='p-2 rounded-xl  max-w-md mb-4 text-lg font-bold  bg-white'
          key={Math.floor(Math.random() * 10)}
        >
          {user.username} - {user.userAge} Years old
        </li>
      ))}
    </ul>
  </div>
  </div>
  </>
   
  );
};

export default InputCard;
