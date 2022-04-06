import React from 'react'
import { addClassName } from '../utils/utilis'
import { PropTypes } from 'prop-types'

const SearchStatus = ({ length }) => {
  const counts = [2, 3, 4]
  const lastOne = Number(length.toString().slice(-1))
  const isLastOne = counts.some((elem) => elem === lastOne)
  let tempStr = `${length} человек тусанет с тобой сегодня`

  if (length > 4 && length < 15) {
    tempStr = `${length} человек тусанет с тобой сегодня`
  } else if ((length <= 4 && length > 1) || isLastOne) {
    tempStr = `${length} человека тусанут с тобой сегодня`
  }

  return <div className={addClassName('primary')}>{tempStr}</div>
}

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
}

export default SearchStatus
