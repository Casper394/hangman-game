import { forwardRef } from 'react';
import './keyboardStyles.css'
import PropTypes from 'prop-types';

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const Keyboard = forwardRef(function Keyboard({ handleLetterButtonClick }, keyboardRef) {
  return (
    <div ref={keyboardRef} className='keyboard'>
      {alphabet.map(letter => (
        <button onClick={(e) => handleLetterButtonClick(e)} className='keyboard-letter' key={letter}>{letter}</button>
      ))}
    </div>
  )
})

Keyboard.propTypes = {
  handleLetterButtonClick: PropTypes.func
}

export default Keyboard