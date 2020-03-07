import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import { isLogged } from '../actions/index'
import ButtonComp from '../components/ButtonComp'

export default function IsLogged() {
  const log = useSelector(state => state.log)
  const dispatch = useDispatch()

  return (
    <>
      {log ? (
        <Typography>I am Logged in</Typography>
      ) : (
        <Typography>I&apos;m not logged in</Typography>
      )}

      <ButtonComp
        onClick={() => dispatch(isLogged())}
        value="Log Toggle"
        color="primary"
        buttonColor="#444"
      />
    </>
  )
}
