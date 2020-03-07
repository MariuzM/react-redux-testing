import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

export default function ButtonComp({ onClick, value, color, buttonColor }) {
  const useStyles = makeStyles(() => ({
    buttonColor: { backgroundColor: `${buttonColor}` },
  }))

  return (
    <Button
      className={useStyles().buttonColor}
      onClick={onClick}
      type="button"
      variant="contained"
      color={color}
    >
      {value}
    </Button>
  )
}

ButtonComp.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
}
