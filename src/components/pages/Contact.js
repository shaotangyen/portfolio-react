import React, { useState } from 'react';
import { validateEmail } from '../../untils/helpers.js';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [errorEmailFormatMsg, setErrorEmailFormatMsg] = useState('');
  const [noteMsg, setNoteMsg] = useState('');

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === 'name') {
      setName(inputValue);
    } else if (inputName === 'email') {
      setEmail(inputValue);
    } else {
      setMsg(inputValue);
    };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //check if all fields are filled and email format is correct
    if (!errorMsg && !errorEmailFormatMsg) {
      setNoteMsg('Successfully Sent');
      setName('');
      setEmail('');
      setMsg('');
    } else {
      setErrorMsg('All fields must be filled correctly');
    }
  };

  const handleOnClick = (e) => {
    //reset note message whenever a field is clicked
    if (noteMsg) {
      setNoteMsg('');
    }
  }

  //validate each field's value
  const handleOnBlur = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === 'name') {
      //check if name is empty
      if (!inputValue) {
        setErrorMsg('Must fill in your name');
      } else {
        //if all good, reset the error message
        setErrorMsg('');
      }
    } else if (inputName === 'email') {
      if (!inputValue) {
        //check if email is empty
        setErrorMsg('Must fill in your email');
      } else {
        setErrorMsg('');
        //if there's value, check if email format is valid
        if (!validateEmail(inputValue)) {
          //if not, check if email is valid
          setErrorEmailFormatMsg('Incorrect email format')
        } else {
          //if all good, reset the error message
          setErrorEmailFormatMsg('');
        }
      };
    } else if (inputName === 'msg') {
      //check if message if empty
      if (!inputValue) {
        setErrorMsg('Must fill in your message');
      } else {
        //if all good, reset the error message
        setErrorMsg('');
      }
    }
  };

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="vh-90 d-flex align-items-center">
          <div className="contact-form">
            <h1 className='text-center mb-3'>Contact <span className="accent-color">Me</span></h1>
            <p className='text-center mb-4'>If you have any enquires or interest in what I do, feel free to reach out by filling out the form below. I will get back to you as soon you possible. Cheers.</p>
            <form>
              <div className="mb-3">
                <label className='form-label'>Your Name</label>
                <input
                  value={name}
                  name="name"
                  onChange={handleInputChange}
                  onBlur={handleOnBlur}
                  onClick={handleOnClick}
                  type="text"
                  className='form-control'
                  placeholder="Your name"
                />
              </div>
              <div className="mb-3">
                <label className='form-label'>Your Email</label>
                <input
                  value={email}
                  name="email"
                  onChange={handleInputChange}
                  onBlur={handleOnBlur}
                  onClick={handleOnClick}
                  type="email"
                  className='form-control'
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label className='form-label'>Message</label>
                <textarea
                  value={msg}
                  name="msg"
                  onChange={handleInputChange}
                  onBlur={handleOnBlur}
                  onClick={handleOnClick}
                  type="text"
                  className='form-control'
                  rows="5"
                  placeholder="Message"
                />
              </div>
              <div className='error-msg mb-3'>
                {/* if there's error message, print it. If there's no error message but email format is incorrect, print it. */}
                {(errorMsg && (<span> * {errorMsg}</span>)) || (errorEmailFormatMsg && (<span> * {errorEmailFormatMsg}</span>))}
              </div>
              <div className='text-center'>
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className='btn btn-lg btn-main mb-3'
                >
                  Submit
                </button>
                <div className="note-msg">
                  {noteMsg && (<span>{noteMsg}</span>)}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
