import React from 'react'
import { Button } from '../utils'

function ConfirmPopup({ onTogglePopup, handleRemoveClick }) {
  return (
    <div className='confirm-popup'>
      <h3 className='confirm-popup__question'>Вы уверены?</h3>
      <div className='confirm-popup__buttons'>
        <Button className='button__confirm' onClick={handleRemoveClick}>Удалить</Button>
        <Button className='button__confirm' onClick={onTogglePopup}>Оставить</Button>
      </div>
    </div>
  )
}

export default ConfirmPopup
