import React from 'react'
import '../styles/Login.scss'

const Login = () => {
  return (
    <div className="login">
        <div className="form-container">
            <img src="/logos/logo_yard_sale.svg" alt="YARD SALE" className="logo" />
            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>
            <form action="/" className="form">
              <label htmlFor="password" className="label">Password</label>
              <input type="password" id="password" className="input input-password" placeholder="*********" />
              <label htmlFor="new-password" className="label">Password</label>
              <input type="password" id="new-password" className="input input-password" placeholder="*********" />
              <input type="submit" defaultValue="Confirm" className="primary-button login-button" />
            </form>
        </div>
    </div>
  )
}

export default Login