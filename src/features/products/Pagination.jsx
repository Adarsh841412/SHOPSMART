import React from 'react'
import { handleDispatch } from '../../app/store'

const Pagination = () => {

  function sendAction(arg){
    handleDispatch(null, arg)
  }

  return (
    <div className='pagination'>

      <div onClick={() => sendAction("prev")}>
        <b>&lt;&lt;</b> Previous
      </div>

      <div className='indexing'>
        <span onClick={() => sendAction("one")}>1</span>
      </div>

      <div className='indexing'>
        <span onClick={() => sendAction("two")}>2</span>
      </div>

      <div className='indexing'>
        <span onClick={() => sendAction("three")}>3</span>
      </div>

      <div onClick={() => sendAction("next")}>
        Next <b>&gt;&gt;</b>
      </div>

    </div>
  )
}

export default Pagination
