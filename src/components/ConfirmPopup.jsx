import React from 'react'
import { Button } from '../utils'

function ConfirmPopup() {
  return (
    <div className="confirm-popup">
      <h3 className="confirm-popup__question">Вы уверены?</h3>
      <div className="confirm-popup__buttons">
        <Button className="button__confirm">Удалить</Button>
        <Button className="button__confirm">Оставить</Button>
      </div>
    </div>
  )
}

export default ConfirmPopup
