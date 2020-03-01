import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { increment, decrement } from '../actions/index'
import ButtonComp from '../components/ButtonComp'

export default function Counter() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <>
      <Typography variant="h4">{`This is count ${count}`}</Typography>

      <ButtonComp onClick={() => dispatch(increment())} value="+" color="primary" />
      <ButtonComp onClick={() => dispatch(decrement())} value="-" color="secondary" />
    </>
  )
}
