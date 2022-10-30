import React from 'react'
import { Button } from '../utils'

function ClearAllPopup({ onClearCart, toggleOpenPopup }) {
  return (
    <div className='confirm-popup'>
      <h3 className='confirm-popup__question'>Вы уверены?</h3>
      <div className='confirm-popup__buttons'>
        <Button className='button__confirm' onClick={onClearCart}>Очистить</Button>
        <Button className='button__confirm' onClick={toggleOpenPopup}>Оставить</Button>
      </div>
    </div>
  )
}

export default ClearAllPopup
