import React, { useState } from 'react';

import Travelers from '../travelers.svg';

const Home = () => {
  const [destination, setDestination] = useState('');
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const handleForm = () => {};

  const handleDate = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className='landing-container'>
      <div className='left-container'>
        <div className='logo'>Jupiter</div>
        <div className='form-container'>
          <div className='big-text'>Pick your flights</div>
          <form>
            <input
              className='destination'
              type='text'
              placeholder='Enter a destination'
            />
            <div className='dates'>
              <div className='date'>
                <label>From</label>
                <input type='date' onChange={handleDate} />
              </div>

              <div className='date'>
                <label>To</label>
                <input type='date' />
              </div>
            </div>
            <div className='passengers'>
              <label>Passengers</label>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <button className='submit-btn' type='submit'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className='right-container'>
        <img src={Travelers} />
      </div>
    </div>
  );
};

export default Home;
