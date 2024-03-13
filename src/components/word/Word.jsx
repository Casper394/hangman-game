import { useEffect, forwardRef } from 'react'
import './wordStyles.css'
import PropTypes from 'prop-types';
import wordList from "./wordList.json"

const Word = forwardRef(function Word({ word, setWord }, wordRef) {

  useEffect(() => {
    setWord(wordList[Math.floor(Math.random() * wordList.length)].toUpperCase())
  }, [setWord])
  
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div className='word' ref={wordRef}>
        {word.split("").map((letter, index) => (
          letter == " " ? 
          <div className='blank-spot' key={index}></div>
          : 
          <div className='letter-wrapper' key={letter + index}>
            <div hidden={true} className='letter'>{letter}</div>
          </div>
        ))}
      </div>
    </div>
  )
})

Word.propTypes = {
  word: PropTypes.string,
  setWord: PropTypes.func,
  wordRef: PropTypes.object
}

export default Word