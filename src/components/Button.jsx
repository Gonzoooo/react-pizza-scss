import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

function Button({ outline, className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {
        'button-outline': outline,
      })}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button
