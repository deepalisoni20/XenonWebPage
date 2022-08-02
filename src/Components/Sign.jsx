import React from 'react'
import { Link } from 'react-router-dom'
export default function Sign() {
  return (
    <>
      <div className="card mt-3 col-6 offset-3">
        <div className="card-body bg-dark mt-3">
          <h4 className="card-title text-center" style={{ color: "red" }}>
            Sign up
          </h4>
          <form >
            <div>
              <label className="p-3" style={{ color: "red" }}>
                Email*
              </label>
              <br />
              <input
                type="text"
                name="Email"
                className="form-control"
                row="3"
                placeholder="Enter your email"
              ></input>
            </div>
            <div>
              <label className="p-3" style={{ color: "red" }}>
                Password*
              </label>
              <br />
              <input
                type="password"
                name="Password"
                className="form-control"
                row="3"
                placeholder="Enter your password"
              ></input>
            </div>
            <button className="btn btn-warning mt-3" type="submit">
              Sign up
            </button>
          </form>
        </div>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  )
}
