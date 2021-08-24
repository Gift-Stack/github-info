import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Image from '../../assets/i.jpg'
import GitHub from '../../assets/GitHub-Emblem.png'

const Home = () => {
  const [user, setUser] = useState('')

  const handleChangeUser = (e: React.FormEvent<HTMLInputElement>) => {
    setUser(e.currentTarget.value)
  }

  return (
    <div>
      <div className="position-absolute d-flex justify-content-end bg-transparent py-4">
        <div className="mx-5 d-flex align-items-center">
          <div
            className="rounded-circle"
            style={{ width: 100, height: 100, borderRadius: 50 }}
          >
            <img
              src={Image}
              alt="Pic"
              className="img-fluid"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <p>John Doe</p>
        </div>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <img src={GitHub} alt="GitHub" width={250} />
        <div
          className="form-group has-search"
          style={{ borderRadius: 100, width: '40%', position: 'relative' }}
        >
          {user.length === 0 && (
            <span
              className="fa fa-search form-control-feedback"
              style={{
                position: 'absolute',
                zIndex: 2,
                display: 'block',
                width: '5rem',
                height: '5rem',
                lineHeight: '2.375rem',
                textAlign: 'center',
                pointerEvents: 'none',
                color: '#aaa',
                top: 10,
                fontSize: 20
              }}
            ></span>
          )}
          <input
            type="text"
            value={user}
            onChange={handleChangeUser}
            className="form-control py-3 px-4"
            style={{ borderRadius: 100 }}
          />
        </div>

        <Link to="/">
          <button
            className="btn btn-lg btn-secondary py-3 mt-5"
            style={{ width: 250 }}
          >
            Search Github
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
