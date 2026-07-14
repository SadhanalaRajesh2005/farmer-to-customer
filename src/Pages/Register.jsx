import './register.css'
function Register() {
  return (
    <div className="register-container">
      <h2>Farmer Registration</h2>

      <input type="text" placeholder="Name" />
      <br /><br />

      <input type="phone number" placeholder="Phone Number" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button type="submit">Register</button>
    </div>
  )
}

export default Register;