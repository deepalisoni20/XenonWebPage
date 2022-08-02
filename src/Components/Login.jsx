import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
      <div className="card mt-3 col-6 offset-3">
        <div className="card-body bg-dark  mt-3">
          <h4 className="card-title text-center" style={{ color: "red" }}>
            Log in
          </h4>
          <form>
            <div>
              <label className="p-3" style={{ color: "red" }}>
                Email*/UserName*
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
              log in
            </button>
          </form>
        </div>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/sign">Sign up</Link>
        </div>
      </div>
    </div>
  )
}
