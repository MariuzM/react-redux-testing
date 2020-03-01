import React from 'react'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

export default function ButtonComp({ onClick, value, color }) {
  return (
    <Button onClick={onClick} type="button" variant="contained" color={color}>
      {value}
    </Button>
  )
}

ButtonComp.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
