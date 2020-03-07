import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../actions/index'
import ButtonComp from '../components/ButtonComp'

export default function Counter() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <>
      <div id="counter-app">
        <div id="display-container" className="container">
          <p id="display">{count}</p>
        </div>

        <ButtonComp
          onClick={() => dispatch(increment())}
          value="+"
          color="primary"
          buttonColor="#1abc9c"
        />

        <ButtonComp
          onClick={() => dispatch(decrement())}
          value="-"
          color="primary"
          buttonColor="#ffae23"
        />

        <ButtonComp
          onClick={() => dispatch(reset())}
          value="Reset"
          color="secondary"
          buttonColor="#f6223f"
        />
      </div>
    </>
  )
}
