import React, { useState } from 'react'
import { addClassName } from '../utils/utilis'
import Pagination from './pagination'
import User from './user'
import { paginate } from './../utils/paginate'
import { PropTypes } from 'prop-types'

const Users = ({ users, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const count = users.length
  const pageSize = 4

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const cropUser = paginate(users, currentPage, pageSize)

  return count === 0 ? (
    <div className={addClassName('danger')}>
      Никто с тобой не тусанет сегодня
    </div>
  ) : (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценки</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cropUser.map((user) => {
            return <User key={user._id} {...user} {...rest} />
          })}
        </tbody>
      </table>

      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object)
}

export default Users
