import React from 'react'
import { addClassName } from '../utils/utilis'
import { PropTypes } from 'prop-types'

const Qualitie = ({ color, name, _id }) => {
  return (
    <span key={_id} className={addClassName(color)}>
      {name}
    </span>
  )
}

Qualitie.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}

export default Qualitie
