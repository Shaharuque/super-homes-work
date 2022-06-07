import React from 'react';
import Rooms from './Rooms';

const Floors = ({unit,rooms,btnClicked}) => {
    return (
        <div className='unit-div'>
            <div className='unit-style'>
              <p style={{textAlign:'center',marginTop:'5px'}}>{unit}</p>  
            </div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'10px',padding:'20px'}}>
            {
                rooms.map(room=><Rooms  room={room} btnClicked={btnClicked} ></Rooms>)
            }
            </div>
        </div>
    );
};

export default Floors;