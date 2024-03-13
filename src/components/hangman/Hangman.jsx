import { forwardRef } from 'react'
import './hangmanStyles.css'

const Hangman = forwardRef(function Hangman(props, hangmanRef) {
  return (
    <div className='hangmanContainer' ref={hangmanRef}>
      <div hidden className='gallows-1'></div>
      <div hidden className='gallows-2'></div>
      <div hidden className='gallows-3'></div>
      <div hidden className='gallows-4'></div>
      <div hidden className='guy-head'></div>
      <div hidden className='guy-torso'></div>
      <div hidden className='guy-lefthand'></div>
      <div hidden className='guy-righthand'></div>
      <div hidden className='guy-leftleg'></div>
      <div hidden className='guy-rightleg'></div>
    </div>
  )
})

export default Hangman