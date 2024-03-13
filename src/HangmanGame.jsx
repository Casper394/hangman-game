import { useState, useRef } from 'react'
import Hangman from "./components/hangman/Hangman"
import Word from "./components/word/Word"
import Keyboard from "./components/keyboard/Keyboard"
import './hangmanGameStyles.css'

export default function HangmanGame() {
  const [word, setWord] = useState('')
  const [nextIndexToShow, setNextIndexToShow] = useState(0)
  const wordRef = useRef(null)
  const hangmanRef = useRef(null)
  const keyboardRef = useRef(null)
  const tryAgainContainerRef = useRef(null)


  function checkIfLost() {
    if (nextIndexToShow == 9) {
      const letterWrapperArray = Array.from(wordRef.current.children)
      const filteredWrapperArray = letterWrapperArray.filter(letterWrapperDiv => letterWrapperDiv.classList.value !== 'blank-spot')
      filteredWrapperArray.forEach(letterWrapperDiv => {
        const letter = letterWrapperDiv.children[0]
        if (letter.hidden == true) {
          letter.style.color = 'red'
          letter.hidden = false
        }
      }); 
      setTimeout(() => {
        if (confirm('You Lost, want to try again?')) {
          location.reload()
        } else {
          tryAgainContainerRef.current.style.display = 'block'
          const keys = Array.from(keyboardRef.current.children)
          keys.forEach(key => {
            key.disabled = true
            key.classList.add('key-disabled')
          })
        }
      }, 300)
    }
  }
  function checkIfWon() {
    const letterWrapperArray = Array.from(wordRef.current.children)
    const filteredWrapperArray = letterWrapperArray.filter(letterWrapperDiv => letterWrapperDiv.classList.value !== 'blank-spot')
    if (filteredWrapperArray.every((letterWrapperDiv) => letterWrapperDiv.children[0].hidden == false)) {
      setTimeout(() => {
        if (confirm('You Won, want to try again?')) {
          location.reload()
        } else {
          tryAgainContainerRef.current.style.display = 'block'
          const keys = Array.from(keyboardRef.current.children)
          keys.forEach(key => {
            key.disabled = true
            key.classList.add('key-disabled')
          })
        }
      }, 300)
    }
  }
  function handleLetterButtonClick(e) {
    const letterClicked = e.target.textContent
    console.log(letterClicked)

    if (word.includes(letterClicked)) {
      e.target.disabled = true
      e.target.classList.add('key-disabled')
      const letterWrapperArray = Array.from(wordRef.current.children)
      const filteredWrapperArray = letterWrapperArray.filter(letterWrapperDiv => letterWrapperDiv.classList.value !== 'blank-spot')
      filteredWrapperArray.forEach((letterWrapperDiv) => {
        if (letterClicked == letterWrapperDiv.children[0].textContent) letterWrapperDiv.children[0].hidden = false
      })
      checkIfWon()
    } else {
      e.target.disabled = true
      e.target.classList.add('key-disabled')
      hangmanRef.current.children[nextIndexToShow].hidden = false
      checkIfLost()
      setNextIndexToShow(nextIndexToShow + 1)
    }
  }

  return (
    <>
      <div onClick={() => location.reload()} className='tryAgainContainer' ref={tryAgainContainerRef}>
        <p className='tryAgainText'>Try Again</p>
        <button className='tryAgainButton'>click</button>
      </div>
      <div className="hangmanGameContainer">
        <h1 className="header">Hangman Game</h1>
        <Hangman ref={hangmanRef} />
        <Word ref={wordRef} word={word} setWord={setWord}/>
        <Keyboard ref={keyboardRef} handleLetterButtonClick={handleLetterButtonClick}/>
      </div>
    </>
  )
}