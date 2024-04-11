import React from 'react';
import './TravelCards.css';

const TravelCards = () => {
  return (
    <>
    <div className='travelcardsContainer'>
    <div className="travelcard card w-96 bg-base-100 shadow-xl m-5" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="card-body">
        <p className='travelcardText'>Ijsland</p>
      </div>
    </div>
        <div className="travelcard card w-96 bg-base-100 shadow-xl m-5" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="card-body">
          <p className='travelcardText'>Italië</p>
        </div>
      </div>
      <div className="travelcard card w-96 bg-base-100 shadow-xl m-5" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="card-body">
          <p className='travelcardText'>Zweden</p>
        </div>
      </div>
      <div className="travelcard card w-96 bg-base-100 shadow-xl m-5" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="card-body">
          <p className='travelcardText'>Norwegen</p>
        </div>
      </div>
      </div>
      </>
  );
}

export default TravelCards;
